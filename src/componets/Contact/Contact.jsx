import React from "react";
import { getImgUrl } from "../../functions";
import Styles from "./Contact.module.css";
export const Contact = () => {
    return (
    <footer id="contact" className={Styles.container}>
        <div className={Styles.txtt}>
            <h2>Contact</h2>
            <p>Feel free to reach out</p>
        </div>
        <ul className={Styles.links}>
            <li className={Styles.link}>
                <img src={getImgUrl("mail.png")} className={Styles.conImg}></img>
                <a href="mailto:mahdia932@gmail.com">mahdia932@gmail.com</a>
            </li>
            <li className={Styles.link}>
                <img src={getImgUrl("github.png")} className={Styles.conImg}></img>
                <a href="https://www.github.com/M4HD1i">github</a>
            </li>
        </ul>
    </footer>
);
};
