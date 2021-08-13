import React, { FC } from 'react'
import { Table } from 'antd'

interface IMasterTable {
  columns: Array<any>
  dataSource: Array<any>
}

const MasterTable: FC<IMasterTable> = ({
  columns,
  dataSource,
}) => (
  <Table columns={columns} dataSource={dataSource} />
)

export default MasterTable
