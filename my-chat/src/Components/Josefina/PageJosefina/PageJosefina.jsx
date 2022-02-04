import React from "react";
import style from './PageJosefina.module.css';
import AliceMessage from "../../Alice/AliceMessage/AliceMessage";

export default function PageJosefina(props) {

    let newMessageText = React.useRef();

    let addMessage = () => {
        let text = newMessageText.current.value
        props.addMessage(text)
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
                    <AliceMessage dialogsData={props.dialogsData} addMessage={props.addMessage} />
                </div>
                <div className={style.chatBoxBottom}></div>
                <textarea ref= {newMessageText} className={style.chatMessageInput} placeholder="Type your message"></textarea>
                <button onClick= {addMessage} className={style.chatSubmitButton}>Send</button>
            </div>
            </div>
           
        </div>
        </>
    );
}