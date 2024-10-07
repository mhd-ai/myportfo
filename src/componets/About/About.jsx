import React from "react";
import styles from "./About.module.css"

export const About = () => {
    return ( 
    
    <section className={styles.container} id="about">
        <h2 className={styles.title}>
            About
        </h2>
        <div>
            <img src="assets/laptop3.png" className={styles.AboutImg}>
            </img>
        </div>

        <ul className={styles.aboutItems}>
            <li>

<img src="assets/codierung.png"></img>
<div className={styles.aboutItemDesc}>
    <h3>Developer</h3>
    <p>
   I have experience of full stack Mobile Apps and Website developping but with old methods.
    </p>
</div>
            </li>

            <li>

<img src="assets/ui.png"></img>
<div>
    <h3>UI Design</h3>
    <p>
    I used to design my Ideas with Adobe XD and then code them in xml and css.
     </p>
</div>
            </li>

            {/* <li>

<img src=""></img>
<div>
    <h3>Developer</h3>
    <p>
    dolor sit amet consectetur adipisicing elit.
     Accusantium ratione eum laudantium adipisci,
      quae autem.
    </p>
</div>
            </li> */}
            </ul>





    </section>
    );
}