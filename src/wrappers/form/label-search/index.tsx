import React, { FC } from 'react'
import { Form, Input } from 'antd'

const { Search } = Input
const FormItem = Form.Item

interface ILabelSearch {
  config: any
  name: string
  inputAttrs: object
  title: string,
}

const LabelSearch: FC<ILabelSearch> = ({
  config,
  name,
  inputAttrs,
  title,
}) => (
  <FormItem
    name={name}
    label={title}
    {...config}
  >
    <Search
      {...inputAttrs}
    />
  </FormItem>
)

export default LabelSearch
