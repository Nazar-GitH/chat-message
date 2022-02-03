import React from "react";
import Alice from "../../Alice/Alice";
import style from './PageJosefina.module.css';
import Josefina from "../Josefina";
import Velazquez from "../../Velazquez/Velazquez";
import Alice_message from "../../Alice/Alice_message/Alice_message";

export default function PageJosefina() {
    return (
        <>
        <div className={style.messenger}>
            <div className={style.chatMenu}>
                <div className={style.chatMenuWrapper}>
                    {/* <input placeholder="Search or start new chat" className={style.chatMenuInput} /> */}
                    {/* <Alice />
                    <Josefina />
                    <Velazquez />  */}
                    </div>
            </div>
            <div className={style.chatBox}>
            <div className={style.chatBoxWrapper}>
                <div className={style.chatBoxTop}>
                    <Alice_message />
                    <Alice_message />
                    <Alice_message />
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