import React, { useState, ReactNode, FC } from 'react'
import { Layout, Menu, Row, Col } from 'antd'
import Image from 'next/image'
import Link from 'next/link'
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  CarOutlined,
  UserOutlined,
  FileOutlined,
} from "@ant-design/icons"
import { Button } from '../../../components'
import styles from './styles.module.css'

React.useLayoutEffect = React.useEffect

const { SubMenu } = Menu
const { Header, Sider, Content } = Layout

interface IMasterPage {
  path: string
  create: boolean
  children: ReactNode
}

const MasterPage: FC<IMasterPage> = ({
  path,
  create,
  children,
}) => {
  const [collapsed, setCollapsed] = useState(false)

  const toggle = () => {
    setCollapsed(!collapsed)
  }

  return (
    <Layout className={styles.layout}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className={!collapsed ? styles.logo : styles.logoCollapsed}>
          <Image
            layout="fill"
            src="/logo.png"
            alt="Winners multimarcas"
            objectFit="contain"
          />
        </div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <SubMenu key="sub3" icon={<CarOutlined />} title="Carros">
            <Menu.Item key="9">Adicionar Novo</Menu.Item>
          </SubMenu>
          <Menu.Item key="2" icon={<UserOutlined />}>
            Clientes
          </Menu.Item>
          <Menu.Item key="3" icon={<FileOutlined />}>
            Documentos
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header style={{ padding: 0 }}>
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: styles.trigger,
            onClick: toggle,
          })}
        </Header>
        {!create
          && (
            <Row className={styles['row-layout']}>
              <Col offset={12} span={12} style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Link href={`${path}/new`} passHref>
                  <Button>Adicionar novo</Button>
                </Link>
              </Col>
            </Row>
          )}
        <Content
          className={styles['site-layout-background']}
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  )
}

export default MasterPage
