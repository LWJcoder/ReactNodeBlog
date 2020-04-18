
import {Avatar,Divider} from 'antd'
import '../static/style/components/author.css'
import {WechatOutlined, QqOutlined, GithubOutlined} from '@ant-design/icons';

const Author = () => {
		return (
			<div className="author-div comm-box">
				<div > <Avatar size={100} src="./static/avatar.png" /> </div>
				<div className="author-introduction">
					专注于WEB前端开发的程序员
					<Divider > 社交账号</Divider>
					<div className="authorIcon" ><GithubOutlined   style={{ fontSize: '28px', color: '#08c' }} /> </div>
					<div className="authorIcon" ><WechatOutlined     style={{ fontSize: '28px', color: '#08c' }} /></div>
					<div className="authorIcon" ><QqOutlined    style={{ fontSize: '28px', color: '#08c' }}/></div>
				</div>
			
			</div>
		)
	
}

export default Author;