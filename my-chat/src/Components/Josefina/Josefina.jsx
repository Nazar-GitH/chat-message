import React from "react";
import style from './Josefina.module.css';

export default function Josefina() {
    return (
        <div className={style.conversation}>
       <img className={style.converstionImg} src="https://media.istockphoto.com/photos/real-woman-picture-id1198027123?b=1&k=20&m=1198027123&s=170667a&w=0&h=aXmAB1C93akXzJlXQx6ldCVT3I3nUReQHT-myoCxmCI=" alt="photo" />
       <span className={style.conversationName}>Josefina</span>
        </div>
    )
}