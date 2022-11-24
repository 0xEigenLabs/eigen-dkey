import React, { useState, useEffect } from 'react'
import Tip from '@components/Tip'
import Icon from '@assets/images/icon_s.png'
import User from '@assets/images/user_icon.png'
import './index.scss'
import { Input, Button, Progress, Alert } from 'antd';
import { mockKeyGen } from '@/mock';
import { keyGenMap,  signMap } from '@/common/constants/constans'

function Create() {

    const [keyName, setKeyname] = useState('')
    const [btnDisable, setBtnEnable] = useState(false)
    const [done, setDone] = useState(false)
    const [round, setRound] = useState<number>(0)
    const [showShards, setShowShards] = useState(false)

    const handleInputChange = (e: any) => {
        setKeyname(e.target.value)
        console.log('xll', keyName)
    }

    const handleBtnClick = () => {
        if (!showShards && round === 0) {
            setBtnEnable(true)
            genKey()
        } else {
            window.location.hash = '/sign'
        }

    }

    const handleSignBtnClick = () => {

    }

    const genKey = async () => {
        let res1 = await mockKeyGen(1)
        console.log('xll', res1);
        setRound(1)
        // let res2 = await mockKeyGen(2)
        // console.log('xll', res2);
        // setPercent(40)
        // let res3 = await mockKeyGen(3)
        // console.log('xll', res3);
        // setPercent(60)
        // let res4 = await mockKeyGen(4)
        // console.log('xll', res4);
        // setPercent(80)
        // let res5 = await mockKeyGen(5)
        // console.log('xll', res5);
        // setPercent(100)
        setDone(true)
        setTimeout(() => {
            setShowShards(true)
        }, 1000)
    }



    const text = "Create 2-of-2 thredshould signing key, one part key stores in your Google Drive, the other one stores in our service. Then we can sign a message with these 2 parties."
    return (
        <div className="container">
            <div className="header">
                <img src={Icon} alt="" width={55} height={55}/>
                <span className="desc">Security Tools</span>
                <img src={User} alt=""/>
            </div>
            <div className="content">
                <Tip text={text}/>
                { !btnDisable  ?
                (<div className="start">
                    <span className="backTip">Create key shards and back them up</span>
                    <div className="inputName">
                        <span className="inputTip">Set backup name</span>
                        <Input value={keyName} onChange={handleInputChange} placeholder="Set backup name"  className="input"/>
                    </div>                    
                </div>)
                : !showShards ?
                (<div className="progress">
                    <Progress percent={round*20} strokeWidth={25}/>
                    { !done && <div className="roundTips">{keyGenMap[round]}</div> }
                </div>) : null } 
                <div className="success">
                { done &&
                    <Alert
                        message="Success Text"
                        description="Congratulations on the successful creation and backup of the key 
                        partition!"
                        type="success"
                        closable
                    /> }
                </div> 
                 { showShards && <div className="showShards">
                    <span className="tittle">Stored Key Shards</span>
                    <div className="drive">
                        Google Drive
                    </div>
                </div> }
            </div>
            <div className="footer">
               <Button type="primary" disabled={showShards ? false : btnDisable} onClick={handleBtnClick}>
                    {  showShards ? 'Sign' : round > 0 ? 'Creating' : 'Create' }
                </Button> 
            </div>
        </div>
    )
} 

export default Create