import { Button, Layout } from 'antd';
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import './App.css';
import {MenuUnfoldOutlined, MenuFoldOutlined} from '@ant-design/icons';


const { Header, Sider, Content } = Layout;
const App = () => {
  const [collapsed,setcollapsed] =useState(false)
  return (
  <Layout>
    <Sider theme="light" 
    trigger={null} 
    collapsible 
    collapsed={collapsed} 
    className="sider"
    >
      <Sidebar/>


      <Button type='text'
       icon={collapsed ? <MenuUnfoldOutlined/> :<MenuFoldOutlined/>}
       onClick={() => setcollapsed(!collapsed)}
       className="trigger-btn"

       />
    </Sider>
    <Layout>
      <Header className='header'></Header>
      <Content className='content'></Content>
    </Layout>  
  </Layout>
  );
};

export default App ;
