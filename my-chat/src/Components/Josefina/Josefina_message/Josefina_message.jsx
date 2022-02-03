import React from "react";
import style from './Josefina_message.module.css'

const DialogItem2 = (props) => {
    return <div className={style.messageTop}>
        <img className={style.messageImg} src={props.src} />
        <p className={style.messageText}>{props.text}</p>
        <div className={style.messageBottom}>{props.data}</div>
    </div>
}

function Josefina_message(props) {
    return (
        <div className={style.message}>
            <DialogItem2 src='https://media.istockphoto.com/photos/real-woman-picture-id1198027123?b=1&k=20&m=1198027123&s=170667a&w=0&h=aXmAB1C93akXzJlXQx6ldCVT3I3nUReQHT-myoCxmCI=' text='We are losing money! Quick' data='2 hour ago'/>
        </div>
    )
}

export default Josefina_message