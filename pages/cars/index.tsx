import { Button, Space, Tooltip } from 'antd'
import React, { useState } from 'react'
import { FilePdfOutlined } from '@ant-design/icons'
import { MasterPage, Table, Modal } from '../../src/components'
import { columns, data } from './_functions'

React.useLayoutEffect = React.useEffect

interface ICar {
  id: String
}

const Cars = () => {
  const [modalVisibility, toggleModalVisibility] = useState(false)
  const [car, setCar] = useState<ICar | object>({})

  const onPrint = (c: ICar) => {
    toggleModalVisibility(true)
    setCar(c)
  }

  const handlePrint = () => {
    console.log('PRINT', car)
  }

  const handleDelete = () => {
    console.log('DELETE')
  }

  return (
    <MasterPage
      path="/cars"
      create={false}
    >
      <Table
        columns={
          columns({
            editLink: `/cars`,
          })
        }
        dataSource={data}
      />
      <Modal
        title="Você deseja imprimir qual documento?"
        visible={modalVisibility}
        footer={null}
        onCancel={() => toggleModalVisibility(false)}
      >
        <Space style={{ display: 'flex', textAlign: 'center' }}>
          <Tooltip title="Imprimir documento">
            <Button
              type="primary"
              size="large"
              icon={<FilePdfOutlined />}
              onClick={handlePrint}
            />
          </Tooltip>
        </Space>
      </Modal>
    </MasterPage>
  )
}

export default Cars
