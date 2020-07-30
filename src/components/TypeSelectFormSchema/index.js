import * as React from 'react';
import { inject, observer } from 'mobx-react';
import PropTypes from 'prop-types';
import { Input, Select } from 'antd';
const { Option } = Select;
import { EventTypeDataList } from '$data/TypeDataList';
import {
  getCurrentFormat,
  getNextIndexRoute,
  getParentIndexRoute,
} from '$utils/jsonSchema';
import './index.scss';

/** 主要用于渲染typeSelect类型的元素
 * 备注：TypeSelectFormSchema组件中只有default是可编辑的（提供选择列表） */
class TypeSelectFormSchema extends React.PureComponent {
  static propTypes = {
    parentType: PropTypes.string,
    jsonKey: PropTypes.string,
    indexRoute: PropTypes.string,
    nodeKey: PropTypes.string,
    targetJsonData: PropTypes.any,
    typeSelectData: PropTypes.any,
    isFixed: PropTypes.any,
  };

  constructor(props) {
    super(props);
    // 这边绑定是必要的，这样 `this` 才能在回调函数中使用
    this.typeHandleChange = this.typeHandleChange.bind(this);
  }

  /** 数据源类型变动事件处理器 */
  typeHandleChange = (newType) => {
    console.log(`selected ${newType}`);
    const {
      indexRoute,
      jsonKey,
      targetJsonData,
      typeSelectData,
      editJsonData,
      updateJsonData,
    } = this.props;
    if (targetJsonData.default === newType) return; // default值未改变则直接跳出
    editJsonData(indexRoute, jsonKey, {
      default: newType,
    });

    // 判断是否在type改变时进行特殊处理（比如dataSource类型中需要调整data的数据内容）
    if (typeSelectData) {
      const newDataJSONObj = typeSelectData[newType];
      if (newDataJSONObj && targetJsonData.title === '数据源类型') {
        // 根据indexRoute获取下一个子元素的路径值
        const nextIndexRoute = getNextIndexRoute(indexRoute);
        // 类型改变时更新targetJsonData.properties.data中的数据
        editJsonData(nextIndexRoute, 'data', newDataJSONObj);
      }
    }
    // event类型的特殊处理
    if (EventTypeDataList) {
      const newEventJSONObj = EventTypeDataList[newType];
      if (targetJsonData.title === '事件类型' && newEventJSONObj) {
        // 根据indexRoute获取下一个子元素的路径值
        const parentIndexRoute = getParentIndexRoute(indexRoute);
        // 类型改变时更新父元素的json数据
        updateJsonData(parentIndexRoute, newEventJSONObj);
      }
    }
  };

  render() {
    const { nodeKey, targetJsonData } = this.props;
    const currentFormat = getCurrentFormat(targetJsonData);

    const curEnums = targetJsonData.enum || [];
    const curEnumextras = targetJsonData.enumextra || [];

    return (
      <div className="typeSelect-schema-box" id={nodeKey}>
        <div className="key-input-item">
          <Select
            defaultValue={targetJsonData.default || 'local'}
            onChange={this.typeHandleChange}
          >
            {curEnums.map((item, enumIndex) => (
              <Option key={item} value={item}>
                {curEnumextras[enumIndex]}
              </Option>
            ))}
          </Select>
        </div>
        <div className="type-select-item">
          <Select
            defaultValue={currentFormat}
            style={{ width: 120 }}
            disabled={true}
          >
            <Option key={currentFormat} value={currentFormat}>
              {currentFormat}
            </Option>
          </Select>
        </div>
        <div className="title-input-item">
          <Input defaultValue={targetJsonData.title} disabled={true} />
        </div>
        <div className="operate-item">&nbsp;</div>
      </div>
    );
  }
}

export default inject((stores) => ({
  editJsonData: stores.jsonSchemaStore.editJsonData,
  updateJsonData: stores.jsonSchemaStore.updateJsonData,
}))(observer(TypeSelectFormSchema));
