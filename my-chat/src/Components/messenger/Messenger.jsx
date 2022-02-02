import React from "react";
import Conversation from "../conversations/Conversation";
import style from './Messenger.module.css';
import Message from '../message/Message'

export default function Messenger() {
    return (
        <>
        <div className={style.messenger}>
            <div className={style.chatMenu}>
                <div className={style.chatMenuWrapper}>
                    <input placeholder="Search or start new chat" className={style.chatMenuInput} />
                    <Conversation />
                    <Conversation />
                    <Conversation />
                    <Conversation />
                    </div>
            </div>
            <div className={style.chatBox}>
            <div className={style.chatBoxWrapper}>
                <div className={style.chatBoxTop}>
                    <Message />
                    <Message own={true}/>
                    <Message />
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