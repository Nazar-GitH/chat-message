import React from "react";
import JosefinaMessage from "../../Josefina/JosefinaMessage/JosefinaMessage";
import style from './PageAlice.module.css'

export default function PageAlice(props) {

    let newMessageText = React.useRef();

    let addMessage2 = () => {
        let text = newMessageText.current.value
        props.addMessage2(text)
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
                            <JosefinaMessage dialogsData2={props.dialogsData2} addMessage2={props.addMessage2} />
                        </div>
                        <div className={style.chatBoxBottom}></div>
                        <textarea ref={newMessageText} className={style.chatMessageInput} placeholder="Type your message"></textarea>
                        <button onClick={addMessage2} className={style.chatSubmitButton}>Send</button>
                    </div>
                </div>

            </div>
        </>
    );
}