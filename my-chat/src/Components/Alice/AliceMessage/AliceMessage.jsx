import React from "react";
import style from './AliceMessage.module.css'
import DialogItem from '../DialogItem/DialogItem'


function AliceMessage(props) {
    let dialogsElements = props.dialogsData
    .map( dialog => <DialogItem src={dialog.src} text={dialog.text} data={dialog.data}/> );
    return (
        <div className={style.message}>
            { dialogsElements }
            </div>

    )
}

export default AliceMessage