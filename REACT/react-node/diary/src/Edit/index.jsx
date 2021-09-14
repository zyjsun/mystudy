import React, { useState } from 'react';
import './style.css'
import axios from '../utils/axios';
import { List, InputItem, ImagePicker, TextareaItem, DatePicker, Button } from 'antd-mobile';
const Edit = () => {
  const [data, setDate] = useState()
  const [file, setfile] = useState([])
  const [title, settitle] = useState()
  const id = 2
  const [content, setContent] = useState()
  const imgChange = (file, type, index) => {
    setfile(file)
  }
  return (
    <div className='diary-edit'>
      <List renderHeader={() => '编辑日记'} className="my-list">
        <InputItem
          placeholder="请输入日记标题"
          clear
          value={title}
          onChange={title => { settitle(title) }}
        >日记标题</InputItem>
        <TextareaItem
          placeholder="请输入内容"
          value={content}
          onChange={content => { setContent(content) }}
          rows={6}
        />
        <DatePicker
          mode="date"
          title="请选择日期"
          extra="请选择日期"
          value={data}
          onChange={data => setDate(data)}
        >
          <List.Item arrow="horizontal">日期</List.Item>
        </DatePicker>
        <ImagePicker
          files={file}
          onChange={imgChange}
          onImageClick={(index, fs) => console.log(index, fs)}
          selectable={file.length < 1}
          multiple={false}
        />
        <Button type="primary" onClick={() => {
          axios.post('/add', {
            id,
            content,
            title,
            url: file,
            data
          })
        }}>提交按钮</Button>
      </List>

    </div>
  )
}

export default Edit