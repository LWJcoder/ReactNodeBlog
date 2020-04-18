import React from 'react'
import '../static/style/pages/header.css'
import {Row, Col, Menu, Icon} from 'antd'

const Header =  () => (
	<div className="header">
	<Row type="flex" justify="center">
		
		<Col  className="memu-div" xs={0} sm={0} md={14} lg={8} xl={6}>	
			<Menu mode="horizontal">
				<Menu.Item key="home">
					<Icon type="home" />
					首页
				</Menu.Item>
				<Menu.Item key="video">
					<Icon type="youtube" />
					视频
				</Menu.Item>
				<Menu.Item key="live">
					<Icon type="smile" />
					生活
				</Menu.Item>
			</Menu>

		</Col>

	</Row>
	</div>
)

export default Header;