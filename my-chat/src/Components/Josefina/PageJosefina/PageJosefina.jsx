import React from "react";
import style from './PageJosefina.module.css';
import AliceMessage from "../../Alice/AliceMessage/AliceMessage";

export default function PageJosefina(props) {
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
                    <AliceMessage dialogsData={props.dialogsData}/>
                    <AliceMessage dialogsData={props.dialogsData}/>
                    <AliceMessage dialogsData={props.dialogsData}/>
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