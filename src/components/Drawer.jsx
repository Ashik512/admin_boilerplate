import React, { useState } from 'react';
// import components
import {
  AlipayOutlined,
  AlipaySquareFilled,
  AppstoreOutlined,
  HomeOutlined,
  PlayCircleOutlined,
  PlusSquareFilled,
  QuestionOutlined,
  SettingOutlined,
  SettingTwoTone,
  SubnodeOutlined,
  ToTopOutlined,
  UserAddOutlined,
  UserOutlined,
  UserSwitchOutlined,
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import { useNavigate } from 'react-router-dom';

// creating menu items
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

// menu items
const items = [
  getItem('DASHBOARD', '', <HomeOutlined />),
  getItem('User Management', 'user-management', <UserOutlined />, [
    getItem('User Type', 'user-type', <UserSwitchOutlined />),
    getItem('User', 'user', <UserAddOutlined />),
  ]),
  getItem('Role Management', 'role-management', <AppstoreOutlined />, [
    getItem('Role', 'role', <PlayCircleOutlined />),
    getItem('Role Details', 'role-details', <PlusSquareFilled />),
  ]),
  getItem('Configurations', 'configurations', <SettingOutlined />, [
    getItem('Subject', 'subjects', <SubnodeOutlined />),
    getItem('Topic', 'topics', <ToTopOutlined />),
  ]),
  getItem('Question', 'question', <QuestionOutlined />),
  getItem('Assesment Management', 'assesment-management', <AlipayOutlined />, [
    getItem('Assesment', 'assesment', <AlipaySquareFilled />),
    getItem('Assesment Settings', 'assesment-settings', <SettingTwoTone />),
  ]),
];

// submenu keys of first level
const rootSubmenuKeys = ['user-management', 'role-management', 'configurations','assesment-management'];

// component
const CustomDrawer = ({ collapsed }) => {
  // drawer state
  const [openKeys, setOpenKeys] = useState([]);
  const navigate = useNavigate();

  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  // function for navigate
  const onClick = ({ key, selectedKeys }) => {
    console.log({ key, selectedKeys });

    // set selected item key to redux
    // dispatch(setSelectedMenuItemKey(selectedKeys))

    // navigate keypath
    navigate(`/${key}`);
  };

  return (
    <Layout.Sider
      collapsible
      collapsed={collapsed}
      width={280}
      style={{
        overflow: 'auto',
        height: '100vh',
        position: 'fixed',
        left: 0,
        top: 0,
        bottom: 0,
        transition: '.4s',
        background: '#FFFFFF',
      }}
      className={'shadow-lg'}
      trigger={null}
    >
      <div className="logo text-center">
        <h1
          style={
            collapsed
              ? { marginTop: '15px', width: '100%', transition: '.4s' }
              : { marginTop: '15px', width: '80%', transition: '.4s' }
          }
        >
          RMS
        </h1>
        <hr style={{ opacity: 0.2 }} />
      </div>
      <Menu
        mode="inline"
        theme="light"
        // selectedKeys={selectedMenuItemKey}
        onClick={onClick}
        openKeys={openKeys}
        onOpenChange={onOpenChange}
        items={items}
        triggerSubMenuAction={'click'}
      />
    </Layout.Sider>
  );
};

export default CustomDrawer;
