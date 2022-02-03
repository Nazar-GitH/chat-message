import React from "react";
import style from './Velazquez_message.module.css'

const DialogItem3 = (props) => {
    return <div className={style.messageTop}>
        <img className={style.messageImg} src={props.src} />
        <p className={style.messageText}>{props.text}</p>
        <div className={style.messageBottom}>{props.data}</div>
    </div>

}

function Velazquez_message(props) {
    return (
        <div className={style.message}>
            <DialogItem3 src='https://media.istockphoto.com/photos/handsome-in-spectacles-picture-id656673020?k=20&m=656673020&s=612x612&w=0&h=kJ5fq_Exi0FG0yw7tqwTdfXuUPBac0o0eH3kSyQyxWs=' text='Quickly come to the meeting room 1B' data='3 hour ago' />
        </div>
    )
}

export default Velazquez_message