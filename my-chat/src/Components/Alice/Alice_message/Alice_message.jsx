import React from "react";
import style from './Alice_message.module.css'

const DialogItem = (props) => {

return  <div className={style.messageTop}>
    <img className={style.messageImg} src={props.src} />
    <p className={style.messageText}>{props.text}</p>
<div className={style.messageBottom}>{props.data}</div>
</div>

}

function Alice_message(props) {

    return (
        <div className={style.message}>
           <DialogItem src='https://s1.1zoom.me/big0/700/Gray_background_Brunette_girl_Hair_Smile_Glance_563423_1280x872.jpg' text='You are the worst' data='1 hour ago'/>
        </div>
    )
}

export default Alice_message