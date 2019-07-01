
import React from 'react'
import '../assets/common.less'
import './index.less'
import { Link } from 'react-router-dom'

const Layout = (props) => {
  return (
    <div className='normal'><h1 className='title'><Link to='/'>Egg + React + SSR</Link><div className='author'>by ykfe</div></h1>{props.children}</div>)
}

export default Layout
