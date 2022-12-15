import React from 'react'
import styles from './contact.module.scss'
import img1 from '../../images/instalogo.png'
import img2 from '../../images/phonelogo.png'
import img3 from '../../images/emaillogo.png'
import img4 from '../../images/githublogo.png'


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
         <img src={img1} alt="" width={100} height={70}/>
         <h3> werfycool</h3>
         </div>

        <div className={styles.row1b}>
          <img src={img2} alt="" width={80} height={80} />
        </div>

      <div className={styles.row2}>

        <div className={styles.row2b}>
          <img src={img3} alt="" width={80} height={80}/>
          <h3>safin.work450@gmail.com</h3>
        </div>

        <div className={styles.row2a}>
          <img src={img4} alt="" width={80} height={80}/>
          <h3>Safincool</h3>
        </div>

      </div>


      
      </div>
    </div>
  )
}

export default Contact
