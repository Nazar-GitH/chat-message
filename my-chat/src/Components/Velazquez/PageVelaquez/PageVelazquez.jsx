import React from "react";
import Alice from "../../Alice/Alice";
import style from './PageVelazquez.module.css';
import Josefina from "../../Josefina/Josefina";
import Velazquez from "../Velazquez";
import Josefina_message from "../../Josefina/Josefina_message/Josefina_message";

export default function PageVelazquez() {
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
                    <Josefina_message />
                    <Josefina_message />
                    <Josefina_message />
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