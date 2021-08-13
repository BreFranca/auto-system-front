import { Modal, notification } from 'antd'
import {
  TInsertExtraZeros,
  TShowConfirm,
  TCepFormater,
  TCopyToClipboard,
  TPushNotification,
} from './types'

const { confirm } = Modal

export const arrCheck = (x: any) => Array.isArray(x) && x.length

const cleanExtraZeros = (value: string) => {
  if (value.substr(0, 2) === '00') {
    return value.substr(2, value.length)
  }

  if (value.substr(0, 1) === '0') {
    return value.substr(1, value.length)
  }
  return value
}

export const insertExtraZeros = ({ value, reverse, cep }: TInsertExtraZeros) => {
  if (cep) {
    switch (value.length) {
      case 1:
        return `0000000${value}`
      case 2:
        return `000000${value}`
      case 3:
        return `00000${value}`
      case 4:
        return `0000${value}`
      case 5:
        return `000${value}`
      case 6:
        return `00${value}`
      case 7:
        return `0${value}`
      default:
        return value
    }
  }
  const cleanedValue = cleanExtraZeros(value)
  switch (cleanedValue.length) {
    case 2:
      return reverse ? `${cleanedValue}0` : `0${cleanedValue}`
    case 1:
      return reverse ? `${cleanedValue}00` : `00${cleanedValue}`
    default:
      return cleanedValue
  }
}

export const cepFormater = ({ cep, staticCep }: TCepFormater): string => {
  // eslint-disable-next-line no-console
  console.log(cep)
  if (cep && cep.length <= 8) {
    if (!staticCep) {
      const arr = cep.match(/^(\d{5})(\d{3})$/)
      return arr && arr.length === 3 ? `${arr[1]}-${arr[2]}` : cep
    }
    const cepWithZeros = insertExtraZeros({ value: cep, cep: true })
    const arr = cepWithZeros.match(/^(\d{5})(\d{3})$/)
    return arr && arr.length === 3 ? `${arr[1]}-${arr[2]}` : cepWithZeros
  }
  return cep
}

export const removeAccent = (match: string) => {
  const withAccent = 'áàãâäéèêëíìîïóòõôöúùûüç'
  const noAccent = 'aaaaaeeeeiiiiooooouuuuc'
  return noAccent.substr(withAccent.search(match), 1)
}

export const removeSpaceTrace = (text: string): string => text.replace(/(\s|-)/g, '')

export const pushNotification = ({
  title,
  description,
  type = 'info',
  duration = 10,
}: TPushNotification) => {
  notification[type]({
    message: title,
    description,
    duration,
  })
}

export const showConfirm = ({
  title = 'Deseja realmente fazer isso?',
  content = '',
  onOk,
  onCancel,
  okText = 'OK',
  cancelText = 'Cancelar',
}: TShowConfirm) => () => {
  confirm({
    title,
    content,
    onOk,
    onCancel,
    okText,
    cancelText,
  })
}

export const removeDuplicateFromArray = (arr: Array<any>, prop: string) => (
  arr.reduce((acc, current) => {
    const x = acc.find((item: any) => item[prop] === current[prop])
    if (!x) {
      return acc.concat([current])
    }
    return acc
  }, [])
)

export const copyToClipboard = ({
  text,
  onCopy,
}: TCopyToClipboard) => {
  const dummy = document.createElement("textarea")
  document.body.appendChild(dummy)
  dummy.value = text
  dummy.select()
  document.execCommand("copy")
  document.body.removeChild(dummy)

  pushNotification({
    title: onCopy ? onCopy(text) : text,
    duration: 3,
  })
}
