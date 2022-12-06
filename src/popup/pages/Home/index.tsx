import * as React from 'react'
import './index.scss'
import EigenIcon from '@assets/images/logo.png'
import request from '@/common/utils/request'

function Home() {




 const googleLogin = () => {
    request({
        url: `/auth/google/url`,
        method: 'get',
      }).then( (uri) => {
          console.log('1234 res', uri)
          window.location.href = uri
      }).catch( err => {
          console.error(err)
      })
 }

    const handleClick = () => {
        window.location.hash = '/create'
    }

    return (
        <div className="container">
            <div className="icon">
                <img src={EigenIcon} alt=""/>
                <p className="eigenName">EigenSafe</p>
                <p className="eigenDesc">Simple, Sage and Reliable</p>
            </div>
            <div className="login" onClick={googleLogin}>
              <i className="login-icon logo-google"></i>
              <span>Google Account</span>
            </div>
            {/* <div onClick={handleClick}>
                createPage
            </div> */}
        </div>
    )
} 

export default Home