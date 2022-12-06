import React from 'react'
import './index.scss'

interface TipProps {
    text: string
}

function Tip(props: TipProps) {
    return (
        <div className="textBox">
            {props.text}
        </div>
    )
} 

export default Tip