import { Link } from 'react-router-dom';

// import components
import { Image, Layout } from 'antd';
import NavbarOptions from './NavbarOptions';

// import icons
import homePageIcon from '../assets/images/usb-logo.png';

function Navbar() {
  return (
    <Layout.Header
      style={{
        backgroundColor: 'transparent',
        padding: 0,
        lineHeight: '0px',
        height: '48px',
      }}
    >
      <div className={'fixed w-full z-20 shadow-sm'} style={{backgroundColor: '#f8f9fd'}}>
        <div className={'flex justify-between items-center px-5'}>
          <Link to={'/'}>
            {/* <Image
              preview={false}
              src={homePageIcon}
              alt={'Flight Schedule'}
              width={'10rem'}
              style={{ padding: '2px' }}
            /> */}
            <h1 style={{ padding: '5px' }}><i>RMS</i></h1>
          </Link>
          <NavbarOptions />
        </div>
      </div>
    </Layout.Header>
  );
}

export default Navbar;
