import React from "react";
import style from './Velazquez_message.module.css'

export default function Velazquez_message() {
    return (
        <div className={style.message}>
            <div className={style.messageTop}>
                <img className={style.messageImg} src='https://media.istockphoto.com/photos/handsome-in-spectacles-picture-id656673020?k=20&m=656673020&s=612x612&w=0&h=kJ5fq_Exi0FG0yw7tqwTdfXuUPBac0o0eH3kSyQyxWs=' alt='photo' />
                <p className={style.messageText}>Quickly come to the meeting room 1B</p>
            </div>
            <div className={style.messageBottom}>3 hour ago</div>

        </div>
    )
}