import { useState } from 'react'
import reactLogo from '/assets/react.svg'
import viteLogo from '/vite.svg'
import styles from './App.module.css'
import { Main } from './componets/Main/Main'
import { About } from './componets/About/About'
import { Navbar } from './componets/Navbar/Navbar'
import { Experience } from './componets/Experience/Experience'
import { Project } from './componets/Project/Project'
import { Contact } from './componets/Contact/Contact'


function App() {

  return (
  
      <div className={styles.App}>
        <Navbar/>
        <Main />
        <About/>
        <Experience/>
        <Project/>
        <Contact/>

      </div>
  
  )
}

export default App
