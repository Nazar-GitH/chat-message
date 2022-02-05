import React from "react";
import style from './Navbar.module.css'
import Alice from "../Alice/Alice";
import Josefina from "../Josefina/Josefina";
import Velazquez from "../Velazquez/Velazquez";
import { NavLink } from "react-router-dom";


const Navbar = () => {
    return (
    
         <div className={style.messages}>
             <div className={style.photo}>
                 <img src="https://socpartnerstvo.org/img/avatar_male.png" alt="photo"></img>
             </div>
             <div className={style.chat}>
                        <h5>Chats</h5>
                        </div>
                        <input placeholder="Search or start new chat" className={style.chatMenuInput} />
             <div className={style.item}>
             <NavLink to='/Alice'>{<Alice />} </NavLink>
             </div>
             <div className={style.item}>
             <NavLink to='/Josefina'>{<Josefina />}</NavLink>
             </div>
             <div className={style.item}>
             <NavLink to='/Velazquez'>{<Velazquez />}</NavLink>
             </div>
         </div >
    )
}

export default Navbar