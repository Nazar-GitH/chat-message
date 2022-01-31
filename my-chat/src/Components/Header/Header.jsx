import React from "react";
import style from './Header.module.css'

const Header = () => {
    return (
        <header className={style.header}>
       <div className="image">
           <img src="https://upload.wikimedia.org/wikipedia/commons/9/96/User_icon-cp.png" alt="icon" width='30px' />
       </div>
        </header>
    )
}

export default Header