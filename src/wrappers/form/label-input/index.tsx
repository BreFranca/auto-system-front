import React, { FC } from 'react'
import { Form, Input } from 'antd'
import MaskedInput from 'antd-mask-input'
import { SizeType } from 'antd/lib/config-provider/SizeContext'

const FormItem = Form.Item

interface ILabelInput {
  config: any
  name: string
  inputAttrs: object
  title: string,
  mask: string
  size: SizeType
}

const LabelInput: FC<ILabelInput> = ({
  config,
  name,
  inputAttrs,
  title,
  mask,
  size,
}) => (
  <FormItem
    name={name}
    label={title}
    {...config}
  >
    {mask
      ? <MaskedInput {...inputAttrs} size={size} mask={mask} />
      : <Input {...inputAttrs} />}
  </FormItem>
)

export default LabelInput
