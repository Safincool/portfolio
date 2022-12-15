import React from 'react'
import styles from './home.module.scss'
import img from '../../images/codinglogo.png'


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
        
      <div className={styles.image}>
        <img src={img} alt="" width={500} height={500}/>   
      </div>
    </div>
    
  )
}

export default Home
