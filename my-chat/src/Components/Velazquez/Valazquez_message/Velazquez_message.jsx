import React from "react";
import style from './Velazquez_message.module.css'
import DialogItem3 from '../DialogItem3/DialogItem3'



function Velazquez_message(props) {

    let dialogsElements3 = props.dialogsData3
        .map(dialog => <DialogItem3 src={dialog.src} text={dialog.text} data={dialog.data} />);
    return (
        <div className={style.message}>
            {dialogsElements3}
        </div>
    )
}

export default Velazquez_message