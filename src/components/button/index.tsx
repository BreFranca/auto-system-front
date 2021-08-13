import React, { FC } from 'react'
import { Button } from 'antd'
import { TButton } from './types'

const CustomButton: FC<TButton> = (props, { type = 'primary' }) => {
  const { children } = props

  return (
    <Button
      {...props}
      type={type}
    >
      {children}
    </Button>
  )
}

export default CustomButton
