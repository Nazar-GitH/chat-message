import React from "react";
import style from './PageVelazquez.module.css';
import JosefinaMessage from "../../Josefina/JosefinaMessage/JosefinaMessage";

export default function PageVelazquez(props) {
    return (
        <>
        <div className={style.messenger}>
            <div className={style.chatMenu}>
                <div className={style.chatMenuWrapper}>
                    </div>
            </div>
            <div className={style.chatBox}>
            <div className={style.chatBoxWrapper}>
                <div className={style.chatBoxTop}>
                    <JosefinaMessage dialogsData2={props.dialogsData2}/>
                    <JosefinaMessage dialogsData2={props.dialogsData2}/>
                    <JosefinaMessage dialogsData2={props.dialogsData2}/>
                </div>
                <div className={style.chatBoxBottom}></div>
                <textarea className={style.chatMessageInput} placeholder="Type your message"></textarea>
                <button className={style.chatSubmitButton}>Send</button>
            </div>
            </div>
           
        </div>
        </>
    );
}