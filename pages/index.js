import {Button, Row, Col, List, Icon} from 'antd'
import Link from 'next/link'
import React ,{useState}  from 'react'
import Header from '../components/Header';
import '../static/style/pages/index.css'




const Home = () => {

const [ mylist , setMylist ] = useState(
    [
      {title:'Title',context:'context contextcontextcontextcontextcontextcontext'},
     ]
  );
  return (
    <div >
      <Header />
      <Row className="comm-main" type="flex" justify="center">
        <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}  >
          <List
              header={<div>最新日志</div>}
              itemLayout="vertical"
              dataSource={mylist}
              renderItem={item => (
                <List.Item>
                  <div className="list-title">{item.title}</div>
                  <div className="list-icon">
                    <span><Icon type="calendar" /> 2019-06-28</span>
                    <span><Icon type="folder" /> 视频教程</span>
                    <span><Icon type="fire" /> 5498人</span>
                  </div>
                  <div className="list-context">{item.context}</div>  
                </List.Item>
              )}
              />
        </Col>

        <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
            
        
              
        </Col>
      </Row>
    </div>
  )
} 

export default Home
