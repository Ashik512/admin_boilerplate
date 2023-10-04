// import components
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Layout } from 'antd';
import React from 'react';
import NavbarOptions from './NavbarOptions';

// import icons

function Navbar({ collapsed, setCollapsed }) {
  return (
    <Layout.Header
      style={{
        color: '#ffffff',
        backgroundColor: '#008080',
        fontSize: '16px',
        position: 'sticky',
        height: '55px',
        top: 0,
        zIndex: 9999999,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
      className='shadow-md'
    >
      {React.createElement(true ? MenuUnfoldOutlined : MenuFoldOutlined, {
        className: 'trigger',
        onClick: () => setCollapsed(!collapsed),
      })}
      <div className={'flex justify-between items-center px-5'}>
        <NavbarOptions />
      </div>
    </Layout.Header>
  );
}

export default Navbar;
