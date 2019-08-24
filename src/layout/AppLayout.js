import React from 'react';
import { Layout, Menu } from 'antd';
import './layout.css'
import { Link } from 'react-router-dom'
const { Header, Content } = Layout;

function AppLayout({linkKey, children}) {
    return (
        <Layout className="layout">
            <Header>
                <h2 className="logo" >Food Wiki</h2>
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={[linkKey]}
                    style={{ lineHeight: '64px' }}
                >
                    <Menu.Item key="1" id='home'><Link to="/">Home</Link></Menu.Item>
                    <Menu.Item key="2" id='restaurants'><Link to="/restaurants">Restaurants</Link></Menu.Item>
                </Menu>
            </Header>
            <Content style={{ padding: '50px 50px' }}>{children}</Content>
        </Layout>
    )
}

export default AppLayout;