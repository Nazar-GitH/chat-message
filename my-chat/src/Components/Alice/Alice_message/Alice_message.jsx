import React from "react";
import style from './Alice_message.module.css'
import DialogItem from '../DialogItem/DialogItem'


let dialogsData = [
    {src: 'https://s1.1zoom.me/big0/700/Gray_background_Brunette_girl_Hair_Smile_Glance_563423_1280x872.jpg', text: 'You are the worst', data: '1 hour ago' }
]

let dialogsElements = dialogsData
    .map( dialog => <DialogItem src={dialog.src} text={dialog.text} data={dialog.data}/> );


function Alice_message(props) {

    return (
        <div className={style.message}>
            { dialogsElements }
            </div>

    )
}

export default Alice_message