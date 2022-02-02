import React from "react";
import style from './Message.module.css'

export default function Message() {
    return (
        <div className={style.message}>
            <div className={style.messageTop}>
                <img className={style.messageImg} src='https://media.istockphoto.com/photos/real-woman-picture-id1198027123?k=20&m=1198027123&s=612x612&w=0&h=qYYjlUI1CarODsBxdLRSEkJHjaWGtxPGufvRFE6hfwE=' alt='photo' />
                <p className={style.messageText}>Quickly come to the meeting room 1B</p>
            </div>
            <div className={style.messageBottom}>1 hour ago</div>

        </div>
    )
}