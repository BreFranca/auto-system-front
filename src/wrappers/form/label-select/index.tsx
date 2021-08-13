import React, { FC } from 'react'
import { Form, Select } from 'antd'

const { Option } = Select
const FormItem = Form.Item

interface IValues {
  index: number
  value: string
  text: string
}

interface ILabelSelect {
  config: any
  name: string
  inputAttrs: object
  title: string
  values?: Array<IValues>
}

const LabelSelect: FC<ILabelSelect> = ({
  config,
  name,
  inputAttrs,
  title,
  values,
}) => (
  <FormItem
    name={name}
    label={title}
    {...config}
  >
    <Select {...inputAttrs}>
      {values && values.map((option, index) => (
        <Option key={index} value={option.value}>{option.text}</Option>
      ))}
    </Select>
  </FormItem>
)

export default LabelSelect
