import React from "react";
import style from './Alice_message.module.css'

export default function Alice_message() {
    return (
        <div className={style.message}>
            <div className={style.messageTop}>
                <img className={style.messageImg} src='https://s1.1zoom.me/big0/700/Gray_background_Brunette_girl_Hair_Smile_Glance_563423_1280x872.jpg' alt='photo' />
                <p className={style.messageText}>You are the worst</p>
            </div>
            <div className={style.messageBottom}>1 hour ago</div>

        </div>
    )
}