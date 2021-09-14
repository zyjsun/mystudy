import React, { useEffect, useState } from 'react';
import { NavBar } from 'antd-mobile';
import { useHistory } from 'react-router-dom'
import { List, Icon } from 'antd-mobile';
import { getQueryString } from '../utils';
import axios from '../utils/axios';
const Detail = () => {
  const history = useHistory()
  const id = getQueryString('id')
  const [detail, setDetail] = useState({})

  useEffect(() => {
    axios.get(`/detail/${id}`).then(res => {
      console.log(res);
      setDetail(res.data[0])
    })
  }, [])

  return (
    <div className='diary-detail'>
      <NavBar
        mode="light"
        icon={<Icon type="left" />}
        onLeftClick={() => history.goBack()}
      >{detail.title}</NavBar>
      <List renderHeader={() => `${detail.data} 晴天`} className="my-list">
        <List.Item multipleLine wrap>
          {detail.content}
        </List.Item>
      </List>
    </div>
  )
}

export default Detail
