import React from "react";
import skills from "../../data/exp.json"
import resum from "../../data/res.json"
import { getImgUrl } from "../../functions";
import styles from "./Experience.module.css"


export const Experience = () => {
    return <section className={styles.container} id="experience">
    
    <h2 className={styles.title}>Experience</h2>

    <div className={styles.content}>
        <div className={styles.skills}>
            {
                skills.map((skill,id) => {
                    return( <div key={id} className={styles.skill}>
                        <div className={styles.skillImgcon}><img src={getImgUrl(skill.imageSrc)} className={styles.skillImg}></img>
                        </div>
                        <p>
                            {skill.title}
                        </p>
                    </div>
                );

                })}
        </div>
        <ul className={styles.history}>
            {
                resum.map((res,id)=> {
                return (
                    
                    <li key={id} className={styles.historyItem}>
                    <img src={getImgUrl(res.imageSrc)}/>
                
                <div className={styles.details}>
                    <h3 style={{ whiteSpace: 'pre-wrap' }}>
                        {`${res.role},
${res.organisation}`} 
                    </h3>
                    <p>{`${res.startDate} - ${res.endDate}`}</p>
<ul>
    {res.experiences.map((experiences,id) => {
        return <li key={id}>{experiences}</li>
    })}
</ul>
                </div>
                
                </li>
                );
            })}

        </ul>
    </div>


    </section>
}