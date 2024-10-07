import { useState } from "react";
import React from "react";
import styles from "./Navbar.module.css";
import { getImgUrl } from "../../functions";

export const Navbar = () => {
    
 const [openMenu,setopenMenu] = useState(false)   
    return (
      <nav className={styles.navbar}>
        <a className={styles.title} href="/">
          Portfo
        </a>

        <div className={styles.menu}>
          <img
            className={styles.menuBtn}
            src={openMenu ? "assets/loschen.png" : "assets/menu-burger.png"}
            alt="menu-button"
            onClick={() => setopenMenu(!openMenu)}
          />

          <ul
            className={`${styles.menuItems} ${openMenu && styles.openMenu}`}
            onClick={() => setopenMenu(false)}
          >
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#content">Content</a>
            </li>
          </ul>
        </div>
      </nav>
    );
    
};