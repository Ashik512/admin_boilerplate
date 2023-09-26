import React, { useState } from 'react';

// import components
import { Layout, Menu } from 'antd';

// import icons
import { DownSquareOutlined, HomeOutlined, LaptopOutlined, LeftOutlined, NotificationOutlined, PicLeftOutlined, StepBackwardOutlined, UserOutlined } from '@ant-design/icons';

// import action
// import { tranformIntoMenuList } from '../services/actions/menuAction'
// import { setSelectedMenuItemKey } from '../services/reducers/authReducer'

// import release version
// import { RELEASE_VERSION } from '../config'

// component
const CustomDrawer = () => {
  // drawer state
  const [collapsed, setCollapsed] = useState(false);
  const [items, setItems] = useState([]);
  const [openKeys, setOpenKeys] = useState(['employees']);
  const [rootSubmenuKeys, setRootSubmenuKeys] = useState([]);


  const items1 = ['1', '2', '3'].map((key) => ({
    key,
    label: `nav ${key}`,
  }));

  const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map((icon, index) => {
    const key = String(index + 1);
    return {
      key: `sub${key}`,
      icon: React.createElement(icon),
      label: `subnav ${key}`,
      children: new Array(4).fill(null).map((_, j) => {
        const subKey = index * 4 + j + 1;
        return {
          key: subKey,
          label: `option${subKey}`,
        };
      }),
    };
  });
 

  // distruct menuList from auth redux toolkit
  // const { menuList, selectedMenuItemKey } = useSelector((state) => state.auth)

  //navigate hook
  // const navigate = useNavigate()
  // const dispatch = useDispatch()

  // init life cycle, set root sub menu keys
  // useEffect(() => {
  // 	// format the menuList
  // 	const _items = tranformIntoMenuList(menuList)
  // 	setItems(_items)

  // 	const _rootSubmenuKeys = _items?.length > 0 && _items.map((item) => item?.key)

  // 	setRootSubmenuKeys(_rootSubmenuKeys)
  // }, [menuList])

  // // function for navigate
  // const _onSelect = ({ key, selectedKeys }) => {
  // 	// set selected item key to redux
  // 	dispatch(setSelectedMenuItemKey(selectedKeys))

  // 	// navigate keypath
  // 	navigate(key)
  // }

  // // handle on open change
  // const _onOpenChange = (keys) => {
  //   console.log({keys});
  // 	// const latestOpenKey = keys?.length && keys.find((key) => openKeys?.indexOf(key) === -1)

  // 	// if (rootSubmenuKeys && rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
  // 	// 	setOpenKeys(keys)
  // 	// } else {
  // 	// 	setOpenKeys(latestOpenKey ? [latestOpenKey] : [])
  // 	// }
  // }

  return (
    <Layout.Sider
      breakpoint={'xl'}
      onBreakpoint={(isOnBreakpoint) => setCollapsed(isOnBreakpoint)}
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
      width={240}
      style={{
        height: 'calc(100vh - 96px)',
        position: 'sticky',
        top: 48,
        overflow: 'auto',
        background: '#f8f9fd',
      }}
      // className={'shadow'}
      trigger={
        true && (
          <div className={'px-2 relative flex justify-start items-center'}>
            <div>{'v1.1.0'}</div>
            <div
              className={`absolute top-0.5 ${
                collapsed ? 'right-2' : 'left-1/2 bottom-1'
              }`}
            >
              <LeftOutlined
                className={
                  collapsed && 'rotate-180 transition-all duration-400'
                }
              />
            </div>
          </div>
        )
      }
    >
      <Menu
        // theme={'dark'}
        // selectedKeys={selectedMenuItemKey}
        // mode={'inline'}
        // items={menus}
        // triggerSubMenuAction={'click'}
        // // onSelect={_onSelect}
        // openKeys={openKeys}
        // onOpenChange={_onOpenChange}
        style={{backgroundColor: '#f8f9fd'}}
        mode="inline"
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        items={items2}
      />
    </Layout.Sider>
  );
};

export default CustomDrawer;
