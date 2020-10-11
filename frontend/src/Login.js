import React, { useRef, useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom'
import api from './api'
import Axios from 'axios'

export default withRouter(function(props) {
  var nameRef = useRef()
  var passwordRef = useRef()
  var captchaRef = useRef()

  var [captcha, setCaptcha] = useState(null)

  // useEffect(() => {
  //   api.get('/captcha').then(res => {
  //     console.log(res.data)
  //     setCaptcha('data:image/svg+xml;base64,' + btoa(res.data))
  //   })
  // }, [])

  async function login(e) {
    e.preventDefault()

    var name = nameRef.current.value
    var password = passwordRef.current.value
    var captcha = captchaRef.current.value

    try {
      var res = await api.post('/login', {name, password, captcha})
      props.history.push(`/restaurant/${res.data.id}/manage/`)
    } catch(e) {
      alert(e.response.data.msg)
    }

  }

  return (
    <div>
      <h2>餐厅管理员登陆</h2>
      <form onSubmit={login}>
        账号：<input type="text" ref={nameRef}/><br/>
        密码：<input type="password" ref={passwordRef}/><br/>
        验证码：<input type="text" ref={captchaRef}/><br/>

        <img src="http://localhost:5002/api/captcha" alt="captcha" />
        {/* <img src={captcha} alt="captcha"/> */}
        <button>Login</button>
      </form>
    </div>
  )
})
