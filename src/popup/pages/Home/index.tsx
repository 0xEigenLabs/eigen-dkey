import * as React from 'react'
import './index.scss'
import EigenIcon from '@assets/images/logo.png'

function Home() {




 const googleLogin = async () => {
    
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
        </div>
    )
} 

export default Home