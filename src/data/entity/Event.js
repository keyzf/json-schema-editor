/** event字段项
 * 【字段属性说明】
 *  type：用于标识字段项的基本数据类型（object、array、string、boolean、number）
 *  title：字段项的label值
 *  properties：存放所有的子字段数据内容
 *  format：用于标识字段项的展示类型（input、date、data-time、url、textarea 等）
 *  readOnly：字段项可设置是否可编辑
 *  required：存放所有子字段的key值，用于验证子字段项是否存在，同时required可充当排序功能
 *  propertyOrder：按序存放所有子字段的key值（排序功能）
 * */
export const initEventData = {
  type: 'object',
  format: 'event',
  title: '事件',
  readOnly: false,
  properties: {
    type: {
      type: 'string',
      default: 'out',
      format: 'typeSelect',
      enum: ['in', 'out'],
      enumextra: ['in', 'out'],
      title: '类型',
      readOnlyInJson: false,
    },
    filter: {
      type: 'string',
      format: 'textarea',
      default: 'return data;',
      title: '过滤器',
    },
  },
  required: ['type', 'data', 'filter'],
  propertyOrder: ['type', 'data', 'filter'],
};
