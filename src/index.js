import * as React from 'react';
import ReactDOM from 'react-dom';
import JSONSchemaEditor from './main';
import { Switch } from 'antd';
import JSONEditor from '@jdwork/json-editor/dist/index.umd';
import '@jdwork/json-editor/dist/index.css';
import './index.scss';

/**
 * JSONSchema的测试Demo
 */
class IndexDemo extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      jsonSchema: {
        type: 'object',
        title: 'jsonSchemaObject',
        properties: {
          func: {
            type: 'object',
            format: 'func',
            title: '功能设置',
            readOnly: false,
            properties: {
              field_1: {
                type: 'string',
                title: '单文本框',
                format: 'input',
                isRequired: false,
                default: '',
                description: '',
                placeholder: '',
                readOnly: false,
              },
              field_2: {
                type: 'boolean',
                title: '布尔值',
                format: 'boolean',
                isRequired: false,
                default: true,
                description: '',
                placeholder: '',
                readOnly: false,
              },
              field_3: {
                type: 'string',
                title: '日期',
                format: 'date',
                isRequired: false,
                default: '',
                description: '',
                placeholder: '',
                readOnly: false,
              },
              field_4: {
                type: 'string',
                title: '日期',
                format: 'date-time',
                isRequired: false,
                default: '',
                description: '',
                placeholder: '',
                readOnly: false,
              },
              field_5: {
                type: 'string',
                title: '时间',
                format: 'time',
                isRequired: false,
                default: '',
                description: '',
                placeholder: '',
                readOnly: false,
              },
              field_6: {
                type: 'string',
                title: 'URL',
                format: 'url',
                isRequired: false,
                default: '',
                description: '',
                placeholder: '',
                readOnly: false,
              },
              field_7: {
                type: 'string',
                title: '多行文本框',
                format: 'textarea',
                isRequired: false,
                default: '',
                description: '',
                placeholder: '',
                readOnly: false,
              },
              field_8: {
                type: 'number',
                title: '数值',
                format: 'number',
                isRequired: false,
                default: 50,
                description: '',
                placeholder: '',
                readOnly: false,
                minimum: 0,
                maximum: 100,
              },
              field_9: {
                type: 'string',
                title: '单选',
                format: 'radio',
                isRequired: false,
                default: '',
                description: '',
                placeholder: '',
                readOnly: false,
                items: {
                  type: 'string',
                  enum: ['a', 'b', 'c'],
                  enumextra: ['选项a', '选项b', '选项c'],
                },
              },
              field_10: {
                type: 'array',
                title: '多选',
                format: 'select',
                isRequired: false,
                default: '',
                description: '',
                placeholder: '',
                readOnly: false,
                items: {
                  type: 'string',
                  enum: ['a', 'b', 'c'],
                  enumextra: ['选项a', '选项b', '选项c'],
                },
              },
              field_11: {
                type: 'array',
                title: '数组',
                format: 'array',
                isRequired: false,
                default: '',
                description: '',
                placeholder: '',
                readOnly: false,
                items: {
                  type: 'object',
                  format: 'object',
                  title: '数组项',
                  readOnly: false,
                  isRequired: false,
                  description: '',
                  properties: {
                    name: {
                      type: 'string',
                      format: 'input',
                      title: '名字',
                      isRequired: false,
                      default: '',
                      description: '',
                      placeholder: '',
                      readOnly: false,
                    },
                  },
                  required: ['name'],
                  propertyOrder: ['name'],
                },
              },
              field_12: {
                type: 'object',
                title: '对象类型',
                format: 'object',
                isRequired: false,
                default: '',
                description: '',
                placeholder: '',
                readOnly: false,
                properties: {
                  a: {
                    type: 'string',
                    title: '单文本框',
                    format: 'input',
                    isRequired: false,
                    default: '',
                    description: '',
                    placeholder: '',
                    readOnly: false,
                  },
                },
                required: ['a'],
                propertyOrder: ['a'],
              },
            },
            required: [
              'field_1',
              'field_2',
              'field_3',
              'field_4',
              'field_5',
              'field_6',
              'field_7',
              'field_8',
              'field_9',
              'field_10',
              'field_11',
              'field_12',
            ],
            propertyOrder: [
              'field_1',
              'field_2',
              'field_3',
              'field_4',
              'field_5',
              'field_6',
              'field_7',
              'field_8',
              'field_9',
              'field_10',
              'field_11',
              'field_12',
            ],
          },
          style: {
            type: 'object',
            format: 'style',
            title: '样式设置',
            readOnly: false,
            properties: {
              field_16: {
                type: 'string',
                title: '单文本框',
                format: 'input',
                isRequired: false,
                default: '',
                description: '',
                placeholder: '',
                readOnly: false,
              },
              field_17: {
                type: 'boolean',
                title: '布尔值',
                format: 'boolean',
                isRequired: false,
                default: true,
                description: '',
                placeholder: '',
                readOnly: false,
              },
              field_18: {
                type: 'string',
                title: '颜色值',
                format: 'color',
                isRequired: false,
                default: '#fff',
                description: '',
                placeholder: '',
                readOnly: false,
              },
              field_19: {
                type: 'string',
                title: 'URL',
                format: 'url',
                isRequired: false,
                default: '',
                description: '',
                placeholder: '',
                readOnly: false,
              },
              field_20: {
                type: 'number',
                title: '数值',
                format: 'number',
                isRequired: false,
                default: 50,
                description: '',
                placeholder: '',
                readOnly: false,
                minimum: 0,
                maximum: 100,
              },
              field_21: {
                type: 'string',
                title: '单选',
                format: 'radio',
                isRequired: false,
                default: '',
                description: '',
                placeholder: '',
                readOnly: false,
                items: {
                  type: 'string',
                  enum: ['a', 'b', 'c'],
                  enumextra: ['选项a', '选项b', '选项c'],
                },
              },
              field_22: {
                type: 'array',
                title: '多选',
                format: 'select',
                isRequired: false,
                default: '',
                description: '',
                placeholder: '',
                readOnly: false,
                items: {
                  type: 'string',
                  enum: ['a', 'b', 'c'],
                  enumextra: ['选项a', '选项b', '选项c'],
                },
              },
              field_23: {
                type: 'object',
                title: '单位计量输入',
                format: 'quantity',
                isRequired: false,
                default: '',
                description: '',
                placeholder: '',
                readOnly: false,
                properties: {
                  unit: {
                    type: 'number',
                    title: '数值',
                  },
                  quantity: {
                    type: 'string',
                    default: 'px',
                    format: 'quantitySelect',
                    enum: ['px', 'rem', 'em', '%'],
                    enumextra: ['px', 'rem', 'em', '%'],
                    title: '单位',
                  },
                },
                required: ['unit', 'quantity'],
                propertyOrder: ['unit', 'quantity'],
              },
              field_24: {
                type: 'array',
                title: '数组',
                format: 'array',
                isRequired: false,
                default: '',
                description: '',
                placeholder: '',
                readOnly: false,
                items: {
                  type: 'object',
                  format: 'object',
                  title: '数组项',
                  readOnly: false,
                  isRequired: false,
                  description: '',
                  properties: {
                    name: {
                      type: 'string',
                      format: 'input',
                      title: '名字',
                      isRequired: false,
                      default: '',
                      description: '',
                      placeholder: '',
                      readOnly: false,
                    },
                  },
                  required: ['name'],
                  propertyOrder: ['name'],
                },
              },
              field_25: {
                type: 'object',
                title: '对象类型',
                format: 'object',
                isRequired: false,
                default: '',
                description: '',
                placeholder: '',
                readOnly: false,
                properties: {
                  a: {
                    type: 'string',
                    title: '单文本框',
                    format: 'input',
                    isRequired: false,
                    default: '',
                    description: '',
                    placeholder: '',
                    readOnly: false,
                  },
                },
                required: ['a'],
                propertyOrder: ['a'],
              },
            },
            required: [
              'field_16',
              'field_17',
              'field_18',
              'field_19',
              'field_20',
              'field_21',
              'field_22',
              'field_23',
              'field_24',
              'field_25',
            ],
            propertyOrder: [
              'field_16',
              'field_17',
              'field_18',
              'field_19',
              'field_20',
              'field_21',
              'field_22',
              'field_23',
              'field_24',
              'field_25',
            ],
          },
          data: {
            type: 'object',
            format: 'data',
            title: '数据设置',
            readOnly: false,
            properties: {
              field_26: {
                type: 'string',
                title: '单文本框',
                format: 'input',
                isRequired: false,
                default: '',
                description: '',
                placeholder: '',
                readOnly: false,
              },
              field_27: {
                type: 'number',
                title: '数值',
                format: 'number',
                isRequired: false,
                default: 50,
                description: '',
                placeholder: '',
                readOnly: false,
                minimum: 0,
                maximum: 100,
              },
              field_28: {
                type: 'string',
                title: 'json数据项',
                format: 'json',
                isRequired: false,
                default: '{}',
                description: '',
                placeholder: '',
                readOnly: false,
              },
              field_29: {
                type: 'object',
                title: '数据源',
                format: 'datasource',
                isRequired: false,
                default: '',
                description: '',
                placeholder: '',
                readOnly: false,
                properties: {
                  type: {
                    type: 'string',
                    default: 'local',
                    format: 'typeSelect',
                    enum: ['local', 'remote'],
                    enumextra: ['local', 'remote'],
                    title: '类型',
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
                    title: '过滤器',
                  },
                },
                required: ['type', 'data', 'filter'],
                propertyOrder: ['type', 'data', 'filter'],
              },
              field_30: {
                type: 'object',
                title: '事件',
                format: 'event',
                isRequired: false,
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
              },
              field_31: {
                type: 'object',
                title: '对象类型',
                format: 'object',
                isRequired: false,
                default: '',
                description: '',
                placeholder: '',
                readOnly: false,
                properties: {
                  a: {
                    type: 'string',
                    title: '单文本框',
                    format: 'input',
                    isRequired: false,
                    default: '',
                    description: '',
                    placeholder: '',
                    readOnly: false,
                  },
                },
                required: ['a'],
                propertyOrder: ['a'],
              },
              field_33: {
                type: 'array',
                title: '数组',
                format: 'array',
                isRequired: false,
                default: '',
                description: '',
                placeholder: '',
                readOnly: false,
                items: {
                  type: 'object',
                  format: 'object',
                  title: '数组项',
                  readOnly: false,
                  isRequired: false,
                  description: '',
                  properties: {
                    name: {
                      type: 'string',
                      format: 'input',
                      title: '名字',
                      isRequired: false,
                      default: '',
                      description: '',
                      placeholder: '',
                      readOnly: false,
                    },
                    field_2: {
                      type: 'array',
                      title: '数组',
                      format: 'array',
                      isRequired: false,
                      default: '',
                      description: '',
                      placeholder: '',
                      readOnly: false,
                      items: {
                        type: 'object',
                        format: 'object',
                        title: '数组项',
                        readOnly: false,
                        isRequired: false,
                        description: '',
                        properties: {
                          name: {
                            type: 'string',
                            format: 'input',
                            title: '名字',
                            isRequired: false,
                            default: '',
                            description: '',
                            placeholder: '',
                            readOnly: false,
                          },
                          field_3: {
                            type: 'string',
                            title: '单文本框',
                            format: 'input',
                            isRequired: false,
                            default: '',
                            description: '',
                            placeholder: '',
                            readOnly: false,
                          },
                          field_5: {
                            type: 'string',
                            title: '单文本框',
                            format: 'input',
                            isRequired: false,
                            default: '',
                            description: '',
                            placeholder: '',
                            readOnly: false,
                          },
                        },
                        required: ['name', 'field_3', 'field_5'],
                        propertyOrder: ['name', 'field_3', 'field_5'],
                      },
                    },
                  },
                  required: ['name', 'field_2'],
                  propertyOrder: ['name', 'field_2'],
                },
                properties: {
                  a: {
                    type: 'string',
                    title: '单文本框',
                    format: 'input',
                    isRequired: false,
                    default: '',
                    description: '',
                    placeholder: '',
                    readOnly: false,
                  },
                },
                required: ['a'],
                propertyOrder: ['a'],
              },
              field_34: {
                type: 'object',
                title: '对象类型',
                format: 'object',
                isRequired: false,
                default: '',
                description: '',
                placeholder: '',
                readOnly: false,
                properties: {
                  obj: {
                    type: 'object',
                    title: '对象类型',
                    format: 'object',
                    isRequired: false,
                    default: '',
                    description: '',
                    placeholder: '',
                    readOnly: false,
                    properties: {
                      a: {
                        type: 'string',
                        title: '单文本框',
                        format: 'input',
                        isRequired: false,
                        default: '',
                        description: '',
                        placeholder: '',
                        readOnly: false,
                      },
                      field_1: {
                        type: 'array',
                        title: '多选',
                        format: 'select',
                        isRequired: false,
                        default: '',
                        description: '',
                        placeholder: '',
                        readOnly: false,
                        items: {
                          type: 'string',
                          enum: ['a', 'b', 'c'],
                          enumextra: ['选项a', '选项b', '选项c'],
                        },
                      },
                    },
                    required: ['a', 'field_1'],
                    propertyOrder: ['a', 'field_1'],
                  },
                },
                required: ['obj'],
                propertyOrder: ['obj'],
              },
            },
            required: [
              'field_26',
              'field_27',
              'field_28',
              'field_29',
              'field_30',
              'field_31',
              'field_33',
              'field_34',
            ],
            propertyOrder: [
              'field_26',
              'field_27',
              'field_28',
              'field_29',
              'field_30',
              'field_31',
              'field_34',
              'field_33',
            ],
          },
        },
        required: ['func', 'style', 'data'],
        format: 'object',
        propertyOrder: ['func', 'style', 'data'],
      },
      jsonData: {},
      wideScreen: false,
    };
  }

  render() {
    const { jsonSchema, jsonData, wideScreen } = this.state;
    return (
      <>
        <div className="title-container">
          <div className="title1-box">
            <p>
              <b>JSONSchema</b>:
              提供可视化界面编辑json格式/结构；(目前主要用于区块的模型设置，定义区块的配置项)
            </p>
          </div>
          <div className="title2-box">
            <p>
              <b>JSONEditor</b>:
              提供可视化界面编辑json数据内容，用于区块的可视化配置，避免用户直接编辑json数据内容；
              (目前主要用于区块的配置) 。
            </p>
            <div>
              展示模式：
              <Switch
                style={{ display: 'inline-block' }}
                defaultChecked={wideScreen}
                checkedChildren="宽屏"
                unCheckedChildren="小屏"
                onChange={(checked) => {
                  this.setState({
                    wideScreen: checked,
                  });
                }}
              />
            </div>
          </div>
        </div>
        <div className="json-action-container">
          <div className="json-schema-box">
            <JSONSchemaEditor
              data={jsonSchema}
              onChange={(newJsonSchema) => {
                console.log('jsonSchemaChange', newJsonSchema);
                this.setState({
                  jsonSchema: newJsonSchema,
                });
              }}
            />
          </div>
          <div className="json-editor-box">
            <JSONEditor
              wideScreen={wideScreen} // 宽屏和小屏的配置项
              schemaData={jsonSchema}
              jsonData={jsonData}
              onChange={(newJsonData) => {
                console.log('jsonDataChange', newJsonData);
                this.setState({
                  jsonData: newJsonData,
                });
              }}
            />
          </div>
        </div>
      </>
    );
  }
}

ReactDOM.render(
  <div>
    <h1>JSON数据可视化/JSONSchema&JSONEditor Demo</h1>

    <br />

    <IndexDemo />
  </div>,
  document.getElementById('root'),
);
