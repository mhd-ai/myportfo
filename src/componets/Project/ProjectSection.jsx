import React from "react";
import { getImgUrl } from "../../functions";
import styles from "./ProjectSec.module.css";


export const ProjectSection = ({
    
    project : {title,imageSrc,description ,skills,demo,source}}) => {

    return (
        
        <div className={styles.container}>

    <img src={getImgUrl(imageSrc)} className={styles.img}/>
    <h3>{title}</h3>
    <p>{description}</p>
    <ul>
        {skills.map((skill, id) => {
            return(
            <li key={id}>{skill}</li>
            );
    })}
    </ul>
    {/* <div className={link}>
        <a href={demo}>Demo</a>
        <a href={source}>Source</a>
    </div> */}
 </div>
    );
};