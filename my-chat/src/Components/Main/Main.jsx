import React from "react";
import style from './Main.module.css'

const Main = () => {
    return (
        <>
        <div className={style.main}>
            <div className={style.user}>
                <img src='https://img.freepik.com/free-photo/pretty-smiling-joyfully-female-with-fair-hair-dressed-casually-looking-with-satisfaction_176420-15187.jpg?size=626&ext=jpg' alt='photo' width='75px'></img>
                <h5>Josefina</h5>
            </div>

            <div className={style.yourMessage}>
                <input type='text'></input>
                <button>send</button>
            </div>
          
        </div>
        </>
    )
} 

export default Main