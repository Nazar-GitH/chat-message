import React from "react";
import style from './Josefina_message.module.css'
import DialogItem2 from '../DialogItem2/DialogItem2'


let dialogsData2 = [
    { src: 'https://media.istockphoto.com/photos/real-woman-picture-id1198027123?b=1&k=20&m=1198027123&s=170667a&w=0&h=aXmAB1C93akXzJlXQx6ldCVT3I3nUReQHT-myoCxmCI=', text: 'We are losing money! Quick', data: '2 hour ago' }
]

let dialogsElements2 = dialogsData2
    .map(dialog => <DialogItem2 src={dialog.src} text={dialog.text} data={dialog.data} />);


function Josefina_message(props) {
    return (
        <div className={style.message}>
            { dialogsElements2 }
        </div>
    )
}

export default Josefina_message