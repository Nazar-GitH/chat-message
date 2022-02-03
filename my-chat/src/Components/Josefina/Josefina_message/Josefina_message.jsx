import React from "react";
import style from './Josefina_message.module.css'

export default function Josefina_message() {
    return (
        <div className={style.message}>
            <div className={style.messageTop}>
                <img className={style.messageImg} src='https://media.istockphoto.com/photos/real-woman-picture-id1198027123?b=1&k=20&m=1198027123&s=170667a&w=0&h=aXmAB1C93akXzJlXQx6ldCVT3I3nUReQHT-myoCxmCI=' alt='photo' />
                <p className={style.messageText}>We are losing money! Quick</p>
            </div>
            <div className={style.messageBottom}>2 hour ago</div>

        </div>
    )
}