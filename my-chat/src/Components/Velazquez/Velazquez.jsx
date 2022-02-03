import React from "react";
import style from './Velazquez.module.css';

export default function Velazquez() {
    return (
        <div className={style.conversation}>
       <img className={style.converstionImg} src="https://media.istockphoto.com/photos/handsome-in-spectacles-picture-id656673020?k=20&m=656673020&s=612x612&w=0&h=kJ5fq_Exi0FG0yw7tqwTdfXuUPBac0o0eH3kSyQyxWs=" alt="photo" />
       <span className={style.conversationName}>Velazquez</span>
        </div>
    )
}