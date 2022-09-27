import React, { useEffect } from 'react'
import globalConfig from '../../config/globalConfig'
import LoginPanel from './components/LoginPanel.jsx'
import { getMain } from '../../utils/main'
const loginUrl = 'https://p6-tuchong.byteimg.com/obj/tuchong-avatar/h_362174_1'

import './index.scss'

const Login = () => {
  useEffect(() => {
    const main = getMain()
    main.appInfo.header.changeHeader(false)
    main.appInfo.nav.changeNav(false)
  }, [])

  return (
    <div className="login">
      <img className="loginBackground" src={`${globalConfig.baseUrl}/login-background.png`} />
      {/* <img className="loginBackground" src={loginUrl} /> */}
      <LoginPanel />
    </div>
  )
}

export default Login
