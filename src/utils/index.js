export const JSONPATH_JOIN_CHAR = '.';
export const lang = 'en_US';

export const format = [
  { name: 'date-time' },
  { name: 'date' },
  { name: 'email' },
  { name: 'hostname' },
  { name: 'ipv4' },
  { name: 'ipv6' },
  { name: 'uri' },
];
const _ = require('underscore');
// 功能类型可选项
export const FUNCSCHEME_TYPE = [
  'input',
  'date',
  'boolean',
  'date-time',
  'time',
  'url',
  'textarea',
  'number',
  'radio',
  'select',
  'array',
  'object',
];
// 样式类型可选项
export const STYLESCHEME_TYPE = [
  'input',
  'boolean',
  'color',
  'url',
  'number',
  'radio',
  'select',
  'quantity',
  'array',
  'object',
];
// 数组类型可选项
export const ARRAY_TYPE = [
  'input',
  'boolean',
  'color',
  'date',
  'date-time',
  'time',
  'url',
  'textarea',
  'number',
  'radio',
  'select',
];
// 数据类型可选项
export const DATASCHEME_TYPE = [
  'input',
  'number',
  'json',
  'datasource',
  'event',
  'object',
];
// schema基本类型
export const SCHEMA_TYPE = [
  'input',
  'boolean',
  'color',
  'date',
  'date-time',
  'time',
  'url',
  'textarea',
  'json',
  'number',
  'radio',
  'select',
  'quantity',
  'datasource',
  'event',
  'array',
];
// 默认的schema对象
export const defaultSchema = {
  input: {
    type: 'string',
    description: '单文本框',
    format: 'input',
  },
  object: {
    type: 'object',
    format: 'object',
    properties: {
      a: {
        type: 'string',
        description: '单文本框',
        format: 'input',
      },
    },
    description: '普通对象',
    required: ['a'],
  },
  boolean: {
    type: 'boolean',
    description: '布尔值',
    format: 'boolean',
  },
  color: {
    type: 'string',
    format: 'color',
    description: 'Color',
  },
  date: {
    type: 'string',
    format: 'date',
    description: 'Date',
  },
  'date-time': {
    type: 'string',
    format: 'date-time',
    description: 'Datetime',
  },
  time: {
    type: 'string',
    format: 'time',
    description: 'Time',
  },
  url: {
    type: 'string',
    format: 'url',
    description: 'Url',
  },
  textarea: {
    type: 'string',
    format: 'textarea',
    description: '多行文本框',
  },
  json: {
    type: 'string',
    format: 'json',
    description: 'JSON',
  },
  number: {
    type: 'number',
    default: '50',
    minimum: 0,
    maximum: 100,
    description: 'Number',
  },
  radio: {
    type: 'string',
    format: 'radio',
    enum: ['a', 'b'],
    enumextra: ['选项a', '选项b'],
    description: '单选',
  },
  select: {
    type: 'array',
    format: 'select',
    items: {
      type: 'string',
      enum: ['a', 'b', 'c'],
      enumextra: ['选项a', '选项b', '选项c'],
    },
    uniqueItems: true,
    description: '多选',
  },
  array: {
    type: 'array',
    format: 'array',
    items: {
      type: 'object',
      properties: {
        name: {
          type: 'string',
          format: 'input',
          description: '名字',
        },
      },
      description: '数组项',
    },
    description: '数组',
    required: ['type'],
  },
  quantity: {
    type: 'object',
    format: 'quantity',
    properties: {
      unit: {
        type: 'number',
        description: '数量',
      },
      quantity: {
        type: 'string',
        default: 'px',
        format: 'quantitySelect',
        enum: ['px', 'rem', 'em', 'percent'],
        enumextra: ['px', 'rem', 'em', 'percent'],
        description: '单位',
      },
    },
    description: '单位计量输入',
    required: ['unit', 'quantity'],
  },
  datasource: {
    type: 'object',
    format: 'datasource',
    properties: {
      type: {
        type: 'string',
        default: 'local',
        format: 'typeSelect',
        enum: ['local', 'remote'],
        enumextra: ['local', 'remote'],
        description: '类型',
      },
      data: {
        type: 'string',
        format: 'typeSelectData',
        default: 'local',
        readOnlyInJson: false,
      },
      filter: {
        type: 'string',
        format: 'textarea',
        default: 'return data;',
        description: '过滤器',
      },
    },
    description: '数据源',
    required: ['name', 'filter', 'type'],
  },
  event: {
    type: 'object',
    format: 'event',
    properties: {
      // name: {
      //   type: "string",
      //   faker: "lorem.word",
      //   description: "事件名",
      //   readOnlyInJson: true
      // },
      type: {
        type: 'string',
        default: 'out',
        format: 'typeSelect',
        enum: ['in', 'out'],
        enumextra: ['in', 'out'],
        description: '类型',
        readOnlyInJson: false,
      },
      filter: {
        type: 'string',
        format: 'textarea',
        default: 'return data;',
        description: '过滤器',
      },
    },
    description: '事件',
    required: ['name', 'filter', 'type'],
  },
};

export const canDropDown = (value, format) => (
  value === 'object'
    || value === 'event'
    || value === 'datasource'
    || format === 'radio'
    || format === 'select'
);

// 防抖函数，减少高频触发的函数执行的频率
// 请在 constructor 里使用:

// this.func = debounce(this.func, 400);
export const debounce = (func, wait) => {
  let timeout;
  return function () {
    clearTimeout(timeout);
    timeout = setTimeout(func, wait);
  };
};
// 根据keys从state对象中获取数据，其中keys是key值路径组成的数组。
export function getData(state, keys) {
  let curState = state;
  for (let i = 0; i < keys.length; i++) {
    curState = curState[keys[i]];
  }
  return curState;
}

// 根据keys向state对象中设置新的数值
export function setData(state, keys, value) {
  let curState = state;
  for (let i = 0; i < keys.length - 1; i++) {
    curState = curState[keys[i]];
  }
  curState[keys[keys.length - 1]] = value;
};

export function deleteData(state, keys) {
  let curState = state;
  for (let i = 0; i < keys.length - 1; i++) {
    curState = curState[keys[i]];
  }

  delete curState[keys[keys.length - 1]];
}
// 获取父元素的key值路径数组
export function getParentKeys(keys) {
  if (keys.length === 1) return [];
  const arr = [].concat(keys);
  arr.splice(keys.length - 1, 1);
  return arr;
};
// 根据系列key值删除对象中的指定属性（一级属性）
export function clearSomeFields(keys, data) {
  const newData = { ...data };
  keys.forEach((key) => {
    delete newData[key];
  });
  return newData;
}
// 获取当前对象的所有属性key，组成requiredTitle
function getFieldstitle(data) {
  const requiredtitle = [];
  Object.keys(data).map((title) => {
    requiredtitle.push(title);
  });

  return requiredtitle;
}
// 给schema对象设置required属性，其中required记录当前schema的所有属性key值
export function handleSchemaRequired(schema, checked) {
  if (schema.type === 'object') {
    const requiredtitle = getFieldstitle(schema.properties);

    // schema.required = checked ? [].concat(requiredtitle) : [];
    if (checked) {
      schema.required = [].concat(requiredtitle);
    } else {
      delete schema.required;
    }

    handleObject(schema.properties, checked);
  } else if (schema.type === 'array') {
    handleSchemaRequired(schema.items, checked);
  } else {
    return schema;
  }
}

function handleObject(properties, checked) {
  for (const key in properties) {
    if (properties[key].type === 'array' || properties[key].type === 'object') handleSchemaRequired(properties[key], checked);
  }
}

// copy某个对象的数值，且避免产生关联（js深复制）
export function cloneObject(obj) {
  if (typeof obj === 'object') {
    if (Array.isArray(obj)) {
      const newArr = [];
      obj.forEach((item, index) => {
        newArr[index] = cloneObject(item);
      });
      return newArr;
    }
    const newObj = {};
    for (const key in obj) {
      newObj[key] = cloneObject(obj[key]);
    }
    return newObj;
  }
  return obj;
}
