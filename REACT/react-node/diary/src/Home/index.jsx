import React, { useEffect, useState } from 'react';
import { Card } from 'antd-mobile';
import { Link } from 'react-router-dom'
import './style.css'
import axios from '../utils/axios'
//用hooks函数

const Home = () => {
  const [list, setList] = useState([])
  useEffect(() => {
    axios.get('/list').then(res => {
      console.log(res.data);
      setList(res.data)
    })
  }, [])
  return (
    <div className='diary-list'>
      {
        list.map((item, index) => {
          return (
            <Link to={{ pathname: '/detail', search: `?id=${item.id}` }} key={index}><Card>
              <Card.Header
                title={item.title}
                thumb="https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg"
                extra={<span>晴天</span>}
              />
              <Card.Body>
                <div>{item.content}</div>
              </Card.Body>
              <Card.Footer content={item.data} extra={<div>extra footer content</div>} />
            </Card>
            </Link>)
        })
      }
    </div>
  )
}

export default Home