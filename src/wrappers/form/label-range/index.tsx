import React, { FC } from 'react'
import { Form, DatePicker } from 'antd'
import { SizeType } from 'antd/lib/config-provider/SizeContext'

const { RangePicker } = DatePicker
const FormItem = Form.Item

interface ILabelRange {
  config: any
  name: string
  inputAttrs: object
  title: string
  size: SizeType
}

const LabelRange: FC<ILabelRange> = ({
  config,
  name,
  inputAttrs,
  title,
  size,
}) => (
  <FormItem
    name={name}
    label={title}
    {...config}
  >
    <RangePicker size={size} {...inputAttrs} />
  </FormItem>
)

export default LabelRange
