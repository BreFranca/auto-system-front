import { ReactNode } from "react"

export type TModal = {
  title: string
  visible: boolean
  onOk?: () => void
  onCancel?: () => void
  children?: ReactNode
  footer?: ReactNode | boolean
}
