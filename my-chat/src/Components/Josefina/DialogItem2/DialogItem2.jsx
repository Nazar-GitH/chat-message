import React from "react";
import style from './DialogItem2.module.css'

const DialogItem2 = (props) => {

    return <div className={style.messageTop}>
        <img className={style.messageImg} src={props.src} />
        <p className={style.messageText}>{props.text}</p>
        <div className={style.messageBottom}>{props.data}</div>
    </div>

}

export default DialogItem2