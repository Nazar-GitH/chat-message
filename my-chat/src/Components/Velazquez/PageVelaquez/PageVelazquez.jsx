import React from "react";
import style from './PageVelazquez.module.css';
import JosefinaMessage from "../../Josefina/JosefinaMessage/JosefinaMessage";

export default function PageVelazquez(props) {

    let newMessageText = React.useRef();

    let addMessage3 = () => {
        let text = newMessageText.current.value
        props.addMessage3(text)
        newMessageText.current.value = ''
    }

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
                    <JosefinaMessage dialogsData2={props.dialogsData2} addMessage3={props.addMessage3}/>
                </div>
                <div className={style.chatBoxBottom}></div>
                <textarea ref= {newMessageText} className={style.chatMessageInput} placeholder="Type your message"></textarea>
                <button onClick= {addMessage3} className={style.chatSubmitButton}>Send</button>
            </div>
            </div>
           
        </div>
        </>
    );
}