/**
 * JSONSchema数据对象的通用操作方法【非响应式数据操作方法集合】
 */
import { objClone } from '$utils/index';

/** 【校验是否是合法的JsonSchema数据格式】
 *  主要判断当前JSON对象中是否有预先定义的属性：
 *  Object类型必须有的属性：type、format、title、properties、required、propertyOrder；
 *  Array类型必须有的属性：type、format、title、properties、propertyOrder；
 *  基本数据类型必须有的属性：type、title、format
 * */
export function isJSONSchemaFormat(targetJsonObj) {
  let isFormat = false;
  if (targetJsonObj.type) {
    if (
      targetJsonObj.type === 'object' &&
      targetJsonObj.format &&
      targetJsonObj.title &&
      targetJsonObj.properties &&
      targetJsonObj.required &&
      targetJsonObj['propertyOrder']
    ) {
      isFormat = true;
    } else if (
      targetJsonObj.type === 'array' &&
      targetJsonObj.format &&
      targetJsonObj.title &&
      targetJsonObj.properties &&
      targetJsonObj['propertyOrder']
    ) {
      isFormat = true;
    } else if (targetJsonObj.format && targetJsonObj.title) {
      isFormat = true;
    }
  }
  return isFormat;
}

/** 判断是否为空的jsonSchema
 * 备注：一级字段必须为object，用于规避非法的jsonSchema数据，以及结构单一的jsonSchema数据，
 * 后续再单独考虑如何兼容单一结构的jsonSchema数据。
 * */
export function isEmptySchema(targetJsonObj) {
  let isEmpty = true;
  if (targetJsonObj) {
    const curType = getCurrentFormat(targetJsonObj);
    if (
      curType === 'object' &&
      targetJsonObj['propertyOrder'] &&
      targetJsonObj['propertyOrder'].length > 0
    ) {
      isEmpty = false;
    }
  }
  return isEmpty;
}

/** 根据索引路径获取对应的json数据  */
export function getJSONDataByIndex(
  indexRoute,
  targetJsonSchemaObj,
  useObjClone,
) {
  let curJsonSchemaObj = targetJsonSchemaObj;
  if (useObjClone) {
    curJsonSchemaObj = objClone(targetJsonSchemaObj); // 进行深拷贝，避免影响原有数据
  }
  if (indexRoute) {
    const indexRouteArr = indexRoute.split('-');
    for (let index = 0, size = indexRouteArr.length; index < size; index++) {
      // 获取指定路径的json数据对象，需要按以下步骤（备注：确保是符合规则的json格式数据，使用isJSONSchemaFormat进行校验）
      const curIndex = indexRouteArr[index];
      if (
        curIndex === '0' &&
        curJsonSchemaObj.format === 'array' &&
        curJsonSchemaObj.items
      ) {
        // 从items中获取数据
        curJsonSchemaObj = curJsonSchemaObj.items;
      } else {
        // 1、先根据路径值获取key值
        const curKeyTemp = curJsonSchemaObj['propertyOrder'][curIndex];
        // 2、根据key值获取对应的json数据对象
        curJsonSchemaObj = curJsonSchemaObj.properties[curKeyTemp];
      }
    }
  }
  return curJsonSchemaObj;
}

/**
 * 判断是否是同一个父元素
 * 备注：用于判断两个元素是否在同一个父级容器中
 */
export function isSameParent(curIndex, targetIndex) {
  const curIndexArr = curIndex.split('-');
  const targetIndexArr = targetIndex.split('-');
  curIndexArr.pop();
  targetIndexArr.pop();
  if (curIndexArr.join('-') === targetIndexArr.join('-')) {
    return true;
  } else {
    return false;
  }
}

/** 获取当前字段的类型（format）
 *  如果当前字段没有format字段，则根据type字段赋予默认的类型 */
export function getCurrentFormat(targetJsonData) {
  let currentType = targetJsonData.format;
  if (!currentType) {
    if (
      targetJsonData.type === 'object' ||
      targetJsonData.type === 'array' ||
      targetJsonData.type === 'string'
    ) {
      currentType = targetJsonData.type;
    } else {
      currentType = 'input';
    }
  }
  return currentType;
}

/**
 * 获取父元素的路径值
 */
export function getParentIndexRoute(curIndexRoute) {
  const curIndexArr = curIndexRoute.split('-');
  curIndexArr.pop();
  return curIndexArr.join('-');
}

/**
 * 获取父元素的路径值和当前index
 */
export function getParentIndexRoute_CurIndex(curIndexRoute) {
  const curIndexArr = curIndexRoute.split('-');
  const curIndex = curIndexArr.pop();
  return [curIndexArr.join('-'), curIndex];
}

/**
 * 将当前路径值向前移动一位
 */
export function moveForward(curIndexRoute) {
  const curIndexArr = curIndexRoute.split('-');
  const curIndex = curIndexArr.pop();
  curIndexArr.push(Number(curIndex) - 1);
  return curIndexArr.join('-');
}

/**
 * 将当前路径值向后移动一位
 */
export function moveBackward(curIndexRoute) {
  const curIndexArr = curIndexRoute.split('-');
  const curIndex = curIndexArr.pop();
  curIndexArr.push(Number(curIndex) + 1);
  return curIndexArr.join('-');
}

/** 根据format判断是否是容器类型字段
 *  容器类型字段：func、style、data、object
 *  主要用于判断当前元素点击新增时是添加子元素还是添加兄弟节点，容器类型点击新增时则添加子节点。
 *  备注：array类型字段只有固定的一个items属性，不能新增其他子元素。
 * */
export function isBoxSchemaData(format) {
  let isBoxSchema = false;
  if (
    format === 'func' ||
    format === 'style' ||
    format === 'data' ||
    format === 'object'
  ) {
    isBoxSchema = true;
  }
  return isBoxSchema;
}

/** 根据format判断是否是一级类型字段
 *  一级类型字段：func、style、data
 *  备注：一级类型字段不允许拖拽和复制
 * */
export function isFirstSchemaData(format) {
  let isFirstSchema = false;
  if (format === 'func' || format === 'style' || format === 'data') {
    isFirstSchema = true;
  }
  return isFirstSchema;
}

/** 【旧版jsonSchema转新版jsonSchema】
 * 新版有propertyOrder属性，旧版的required需要根据properties重新生成一份
 * 新版的title需要从description中获取值（旧版的title值使用的是description字段的值）
 * */
export function oldJSONSchemaToNewJSONSchema(oldJSONSchema) {
  let newJSONSchema = objClone(oldJSONSchema); // 进行深拷贝，避免影响原有数据;
  // 1.根据原有的description值生成title值
  if (!newJSONSchema.title && newJSONSchema.description) {
    newJSONSchema.title = newJSONSchema.description;
  }
  // 2.当format为空时重新进行赋值
  if (!newJSONSchema.format) {
    newJSONSchema.format = getCurrentFormat(newJSONSchema);
  }
  // 3.转换旧版的radio类型的数据结构
  if (newJSONSchema.format === 'radio') {
    newJSONSchema.type = 'string';
    // 统一转换至items
    newJSONSchema.items = {
      type: 'string',
      enum: objClone(newJSONSchema.enum),
      enumextra: objClone(newJSONSchema.enumextra),
    };
    // 删除此前的enum、enumextra
    delete newJSONSchema.enum;
    delete newJSONSchema.enumextra;
  }
  // 判断是否有propertyOrder属性
  if (!oldJSONSchema.propertyOrder && newJSONSchema.properties) {
    // 3.重新生成required属性
    newJSONSchema.required = Object.keys(newJSONSchema.properties);
    // 4.生成propertyOrder属性
    newJSONSchema.propertyOrder = newJSONSchema.required;
    // 5.继续遍历properties属性进行转换
    newJSONSchema.propertyOrder.map((jsonKey) => {
      newJSONSchema.properties[jsonKey] = oldJSONSchemaToNewJSONSchema(
        newJSONSchema.properties[jsonKey],
      );
    });
  }
  // 判断是否有items属性
  if (newJSONSchema.items) {
    // 6. 转换items中的数据
    newJSONSchema.items = oldJSONSchemaToNewJSONSchema(newJSONSchema.items);
  }
  return newJSONSchema;
}
