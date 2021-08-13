export type TInsertExtraZeros = {
  value: string
  reverse?: boolean
  cep: boolean
}

export type TShowConfirm = {
  title: string
  content?: any
  onOk?: () => void
  onCancel?: () => void
  okText: string
  cancelText: string
}

export type TCepFormater = {
  cep: string
  staticCep: boolean
}

export type TCopyToClipboard = {
  text: any
  onCopy: (t: string) => void
}

export type TPushNotification = {
  title: string
  description?: string
  type?: 'info' | 'success' | 'warning' | 'error'
  duration: number
}
