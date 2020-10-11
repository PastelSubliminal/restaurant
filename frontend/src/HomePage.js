import React from 'react'
import { Link } from 'react-router-dom'

console.log(window._)

export default function(){
  return <div>
    <div>
      <Link to="/login">登陆</Link>
      <Link to="/register">注册</Link>
    </div>
  </div>
}