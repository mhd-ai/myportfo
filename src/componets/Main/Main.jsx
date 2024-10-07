import React from "react"
import Styles from "./Main.module.css"


export const Main = () => {
return (
  <section className={Styles.container}>
    <div className={Styles.content}>
      <h1 className={Styles.title}>
        Hallo, Ich bin Mehdi
      </h1>
      <p className={Styles.desc}>I was a self-taught coder and designer .

Unfortunately, due to Family issues, I have been out of the market for the past three years and sadly everything i worked on are no longer exist anymore... 
While my knowledge may require updating, I am currently working on improving my skills by learning React and Node.js.

I am eager to join your team and believe that your mentorship and guidance will be invaluable in helping me stay up-to-date with the latest industry trends and technologies.

Thank you for considering my application. Im looking forward to work together as a family.</p>
    <a href="mailto:mhdi@gmail" className={Styles.contact}> contact me
    </a>
    </div>
    <img src="assets/laptop.png" alt="Main image" className={Styles.mainImg}></img>
    <div className={Styles.blurFirst}/>
    <div className={Styles.blurSecond}/>
  </section>
);

}

