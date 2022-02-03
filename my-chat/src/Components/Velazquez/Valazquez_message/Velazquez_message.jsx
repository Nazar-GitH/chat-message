import React from "react";
import style from './Velazquez_message.module.css'
import DialogItem3 from '../DialogItem3/DialogItem3'


let dialogsData3 = [
    {src: 'https://media.istockphoto.com/photos/handsome-in-spectacles-picture-id656673020?k=20&m=656673020&s=612x612&w=0&h=kJ5fq_Exi0FG0yw7tqwTdfXuUPBac0o0eH3kSyQyxWs=', text: 'Quickly come to the meeting room 1B', data: '3 hour ago' }
]

let dialogsElements3 = dialogsData3
    .map(dialog => <DialogItem3 src={dialog.src} text={dialog.text} data={dialog.data} /> );


function Velazquez_message(props) {
    return (
        <div className={style.message}>
            { dialogsElements3 }
        </div>
    )
}

export default Velazquez_message