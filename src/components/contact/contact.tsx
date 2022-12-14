import React from 'react'
import styles from './contact.module.scss'


type ContactProps = {

}

const Contact: React.FC<ContactProps> = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Contact Me</h1>

      <div className={styles.header2}>
        <h2>My Social Medias</h2>
        <h2>My Contacts</h2>
      </div>

      <div className={styles.row1}>

        <div className={styles.row1a}>
         <img src="./images/instalogo.png" alt="" width={100} height={70}/>
         <h3> werfycool</h3>
         </div>

        <div className={styles.row1b}>
          <img src="./images/phonelogo.png" alt="" width={80} height={80} />
          <h3>+3584578370380</h3>
        </div>

      <div className={styles.row2}>

        <div className={styles.row2b}>
          <img src="./images/emaillogo.png" alt="" width={80} height={80}/>
          <h3>safin.work450@gmail.com</h3>
        </div>

        <div className={styles.row2a}>
          <img src="./images/discordlogo.png" alt="" width={80} height={80}/>
          <h3>Werfy#0070</h3>
        </div>

      </div>


      
      </div>
    </div>
  )
}

export default Contact
