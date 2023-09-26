// import components
import { Space } from 'antd'
import UserProfileNavbar from './UserProfileNavbar'
import { BellOutlined } from '@ant-design/icons'
// import Notifications from './Notifications'

const NavbarOptions = () => {
	return (
		<div>
			<Space>
				{/* <Notifications /> */}
        <BellOutlined style={{fontSize: '27px'}}/>
				<UserProfileNavbar />
			</Space>
		</div>
	)
}

export default NavbarOptions
