import React, { useState, useEffect, useRef } from 'react'
import Tip from '@components/Tip'
import Icon from '@assets/images/icon_s.png'
import User from '@assets/images/user_icon.png'
import './index.scss'
import { Input, Button, Progress, Alert } from 'antd';
import { mockKeyGen } from '@/mock';
import { keyGenMap,  signMap } from '@/common/constants/constans'
import { getFromStorage, getLocationParam, saveToLocalStorage } from  '@/common/utils'
import * as gg18   from '@ieigen/tss-wasm/pkg'
// var gg18  = require('@ieigen/tss-wasm')

import  { keyGen,getAddress,sign } from '@/common/api'
// import { getFromStorage } from '@/common/utils'
import { utils } from 'ethers'

function Create() {

    const [keyName, setKeyname] = useState('')
    const [btnDisable, setBtnEnable] = useState(false)
    const [done, setDone] = useState(false)
    const [round, setRound] = useState<number>(0)
    const [showShards, setShowShards] = useState(false)
    const publicKeyRef = useRef('')

    useEffect(() => {
        const googleUserId = getLocationParam('id')
        const googleAuthToken = getLocationParam('auth_token')
        if (googleUserId) { 
          saveToLocalStorage({'user_id': googleUserId})
          saveToLocalStorage({'auth_token': googleAuthToken})
        }
    }, []);

    const handleInputChange = (e: any) => {
        setKeyname(e.target.value)
    }

    const handleBtnClick = () => {
        if (!showShards && round === 0) {
            setBtnEnable(true)
            genKey()
        } else {
            window.location.hash = '/sign'
        }

    }

    const postKeyGen = (round?: number) => {
        const userId = getFromStorage('user_id')
        if (round) {
            return keyGen({
                user_id: Number(userId),
                round: round
            })
        } else  {
            return keyGen({
                user_id: Number(userId),
                name: keyName,
                threshold: 1,
                share: 2
            })
        }
    }

    const getShards = async () => {
        let res = await getAddress(302)
        console.log('getShards',res);
        
    }

    const genKey = async () => {
        setRound(1)
        let res0 = await postKeyGen()
        console.log('xll res0', res0);
        setTimeout(() => {
            console.log('setTimeout');
        }, 500)
        // const gg181 = await gg18.init();
        let context
        context =  await gg18.gg18_keygen_client_new_context('http://43.133.35.136:8000', 1, 2, 50)
        // console.log('xll', res11)
        // console.log('xll', gg18)
        // console.log('xll2', res11); 
        setTimeout(() => {
            console.log('setTimeout');
        }, 500)
        let res1 = await postKeyGen(1)
        console.log('xll res1', res1);
        context =  await gg18.gg18_keygen_client_round1(context, 50)
        setRound(1)
        setTimeout(() => {
            console.log('setTimeout');
        }, 500)
        let res2 = await postKeyGen(2)
        context =  await gg18.gg18_keygen_client_round2(context, 50)
        console.log('xll res2', res2);
        setRound(2)
        setTimeout(() => {
            console.log('setTimeout');
        }, 500)
        let res3 = await postKeyGen(3)
        context =  await gg18.gg18_keygen_client_round3(context, 50)
        console.log('xll res3', res3);
        setRound(3)
        setTimeout(() => {
            console.log('setTimeout');
        }, 500)
        let res4 = await postKeyGen(4)
        context =  await gg18.gg18_keygen_client_round4(context, 50)
        console.log('xll res4', res4);
        setRound(4)
        setTimeout(() => {
            console.log('setTimeout');
        }, 500)
        publicKeyRef.current = JSON.parse(context).public_key_address
        let res5 = await postKeyGen(5)
        const  keygen_json  =  await gg18.gg18_keygen_client_round5(context, 50)
        console.log('xll publicKeyRef',publicKeyRef.current);
        // window.context = contextRef.current
        setRound(5)


        // setDone(true)
        // setTimeout(() => {
        //     setShowShards(true)
        // }, 1000)
    }


    const signMessage = async () => {
        let context
        const delay = 50
        const digest = utils.keccak256(utils.toUtf8Bytes("EigenTest")).slice(2)
        const user_id = Number(getFromStorage('user_id'))
        const keyAddr = 'dde95c67559b441e4356274e59c6f3b03d4a0a05'
        let signResInit = await sign({
            digest: digest,
            // user_address: publicKeyRef.current,
            user_address: keyAddr,
            user_id,
            thrshold: 1,
            share: 2,
        })
        setTimeout(() => {
            console.log('setTimeout');
        }, 500)
        context = await gg18.gg18_sign_client_new_context('http://43.133.35.136:8000', 1, 2, keyAddr, digest)
        console.log('signInit res context', signResInit, context);
        let sign0 = await sign({
            user_id,
            round: 0
        })
        setTimeout(() => {
            console.log('setTimeout');
        }, 500)
        context = await gg18.gg18_sign_client_round0(context, delay);
        console.log("sign round0: ");
        let sign1 = await sign({
            user_id,
            round: 1
        })
        setTimeout(() => {
            console.log('setTimeout');
        }, 500)
        context = await gg18.gg18_sign_client_round1(context, delay);
        console.log("sign round1: ");
        let sign2 = await sign({
            user_id,
            round: 2
        })
        setTimeout(() => {
            console.log('setTimeout');
        }, 500)
        context = await gg18.gg18_sign_client_round2(context, delay);
        console.log("sign round2: ");
        let sign3 = await sign({
            user_id,
            round: 3
        })
        setTimeout(() => {
            console.log('setTimeout');
        }, 500)
        context = await gg18.gg18_sign_client_round3(context, delay);
        console.log("sign round3: ");
        let sign4 = await sign({
            user_id,
            round: 4
        })
        setTimeout(() => {
            console.log('setTimeout');
        }, 500)
        context = await gg18.gg18_sign_client_round4(context, delay);
        console.log("sign round4: ");
        let sign5 = await sign({
            user_id,
            round: 5
        })
        setTimeout(() => {
            console.log('setTimeout');
        }, 500)
        context = await gg18.gg18_sign_client_round5(context, delay);
        console.log("sign round5: ");
        let sign6 = await sign({
            user_id,
            round: 6
        })
        setTimeout(() => {
            console.log('setTimeout');
        }, 500)
        context = await gg18.gg18_sign_client_round6(context, delay);
        console.log("sign round6: ");
        let sign7 = await sign({
            user_id,
            round: 7
        })
        setTimeout(() => {
            console.log('setTimeout');
        }, 500)
        context = await gg18.gg18_sign_client_round7(context, delay);
        console.log("sign round7: ");
        let sign8 = await sign({
            user_id,
            round: 8
        })
        setTimeout(() => {
            console.log('setTimeout');
        }, 500)
        context = await gg18.gg18_sign_client_round8(context, delay);
        console.log("sign round8: ");
        let sign9 = await sign({
            user_id,
            round: 9
        })
       const signJson = await gg18.gg18_sign_client_round9(context, delay);
       console.log("sign round9: signJson", JSON.parse(signJson));
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
                <div onClick={getShards}>getUserAddress</div>
                <div onClick={signMessage}>SIGN</div>
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