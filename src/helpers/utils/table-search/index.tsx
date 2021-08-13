import React from 'react'
import { Space } from 'antd'
import { PrinterOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons'
import Link from 'next/link'

import {
  TColumnActions,
  TColumnText,
  IColumnCustom,
} from './types'
import { Button } from '../../../components'
// import { showConfirm } from '../commons'

export const ColumnText = ({
  title,
  dataIndex,
}: TColumnText) => ({
  title,
  dataIndex,
  key: dataIndex,
})

export const ColumnCustom = ({
  title,
  dataIndex,
  render,
}: IColumnCustom) => ({
  title,
  dataIndex,
  key: dataIndex,
  render,
})

export const columnActions = ({
  title,
  dataIndex,
  onPrint,
  editLink,
  onDelete,
}: TColumnActions) => ({
  title,
  key: dataIndex,
  render: (text: string, record: { id: string }) => (
    <Space size="middle">
      <Button
        icon={<PrinterOutlined />}
        onClick={onPrint ? () => onPrint(record) : undefined}
      />
      {editLink
        && (
          <Link href="/cars/1">
            <Button
              icon={<EditOutlined />}
            />
          </Link>
        )}
      <Button
        icon={<DeleteOutlined />}
        onClick={onDelete ? () => onDelete(record) : undefined}
      />
    </Space>
  ),
})
