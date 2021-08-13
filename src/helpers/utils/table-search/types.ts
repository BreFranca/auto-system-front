import { ReactNode, MouseEventHandler } from "react"

export type TColumnText = {
  title: string
  dataIndex: string
}

export interface IColumnCustom extends TColumnText {
  render: ReactNode
}

export type TColumnActions = {
  title: string
  dataIndex: string
  onPrint?(val: object): MouseEventHandler<HTMLElement>
  editLink?: string
  onDelete?(val: object): MouseEventHandler<HTMLElement>
}
