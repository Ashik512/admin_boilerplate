import { Outlet } from 'react-router-dom';

// import components
import { Layout } from 'antd';
import { Footer } from 'antd/es/layout/layout';
import { useState } from 'react';
import { CustomDrawer, Navbar } from '../components';

const ProtectedRoute = () => {
  // rudux state
  // const { isAuthenticated, isAuthValidating } = useSelector((state) => state.auth)

  // local storage token setup
  // const token = localStorage.getItem('token')
  // const token = cookies.getCookie('token')

  // if (isAuthValidating) {
  // 	return (
  // 		<div className={'h-screen flex justify-center items-center'}>
  // 			<Spinner />
  // 		</div>
  // 	)
  // }

  // if (isAuthenticated && token && !isAuthValidating) {

  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout
      style={{
        minHeight: '100vh',
        marginLeft: collapsed ? 80 : 255,
        transition: '.4s',
      }}
    >
      <CustomDrawer collapsed={collapsed} />
      <Layout>
        <Navbar
          collapsed={collapsed}
          setCollapsed={setCollapsed}
        />
        <Layout.Content
          style={{
            margin: true ? '1em' : '1em 1em 1em 2em',
          }}
        >
          <Outlet />
        </Layout.Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          RMS ©2023 Created by TechnoNext
        </Footer>
      </Layout>
    </Layout>
  );
  // }

  // if (!isAuthenticated && !token && !isAuthValidating) {
  // 	return <Navigate to={'/login'} />
  // }
};

export default ProtectedRoute;
