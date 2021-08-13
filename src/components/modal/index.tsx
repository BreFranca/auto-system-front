import React from 'react'
import { Modal } from 'antd'
import { TModal } from './types'

const CustomModal = (props: TModal) => {
  const { children } = props
  return (
    <Modal
      {...props}
    >
      {children}
    </Modal>
  )
}

export default CustomModal
