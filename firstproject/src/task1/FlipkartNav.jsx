import React from "react";
import logo from "../images/images.jpg";
import style from "./filpkartnav.module.css";
import { FaRegUserCircle } from "react-icons/fa";
import { MdShoppingCart } from "react-icons/md";
import { CiShop } from "react-icons/ci";
import { IoMdMore } from "react-icons/io";
import { CiSearch } from "react-icons/ci";





export const FlipkartNav = () => {
  return (
    <nav>
      <aside className={style.logo}>
        <img src={logo} alt="aao meri lo logo ke sath" />
      </aside>

      <section className={style.searchContainer}>
        <div className={style.searchbar}><CiSearch/></div>
        {/* <div className={style.inSearcch}> */}
        <div className={style.inputbox}><input type="search"  placeholder='Search for More Products, Brands and More'/>


           </div>
      </section>
      <ul>
        <li><FaRegUserCircle />login</li>
        <li><MdShoppingCart/>cart</li>
        <li><CiShop/> become a seller</li>
        <li><IoMdMore/></li>
      </ul>
    </nav>
  );
};

// Amazon
