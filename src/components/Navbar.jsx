import React from 'react'

import 'antd/dist/antd.css'
import  {Menu} from 'antd'
import Icon from '@ant-design/icons';
import { Link } from 'react-router-dom'

export default function Navbar () {
  return (
    <Menu mode='horizontal'>
      <Menu.Item >
      <Link to='/'>
          <Icon type='home' /> Episodes
        </Link>
      </Menu.Item>
    </Menu>
  )
}