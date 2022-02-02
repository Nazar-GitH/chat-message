import React from "react";
import style from './Conversation.module.css';

export default function Conversation() {
    return (
        <div className={style.conversation}>
       <img className={style.converstionImg} src="https://s1.1zoom.me/big0/700/Gray_background_Brunette_girl_Hair_Smile_Glance_563423_1280x872.jpg" alt="photo" />
       <span className={style.conversationName}>Alice Freeman</span>
        </div>
    )
}