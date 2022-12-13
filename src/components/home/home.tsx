import React from 'react'
import styles from './home.module.scss'

type HomeProps = {

}

const Home: React.FC<HomeProps> = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Welcome to my portfolio!</h1>
      <h1 className={styles.header2}>About me </h1>
        <h2 className={styles.header3}>My name is Safin.
            I am a 19 year old student from Helsinki. 
            I am currently studying to become a programmer.
            I am studying programming at Varia Myyrmäki.              
        </h2>
        
        <img className={styles.image}
         src="https://o.remove.bg/downloads/729ecf07-3134-4c2d-9c74-0499a6acef89/coding-logo-design-template-free-vector-removebg-preview.png"
         width={500} height={500} />    

    </div>
    
  )
}

export default Home
