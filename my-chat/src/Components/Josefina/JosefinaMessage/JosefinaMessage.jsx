import React from "react";
import style from './JosefinaMessage.module.css'
import DialogItem2 from '../DialogItem2/DialogItem2'



function JosefinaMessage(props) {

    let dialogsElements2 = props.dialogsData2
        .map(dialog => <DialogItem2 src={dialog.src} text={dialog.text} data={dialog.data} />);
    return (
        <div className={style.message}>
            {dialogsElements2}
        </div>
    )
}

export default JosefinaMessage