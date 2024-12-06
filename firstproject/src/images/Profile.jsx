import style from "./profile.module.css";
 import React from 'react'
 import PIC from "./me_with_pic.jpg"
 
 export const Profile = () => {
   return (
     <section id ={style.card}>
        <img src={PIC} width={220}  height={250}/>
     </section  >)
 }
 