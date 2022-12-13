import React from 'react'
import { Link } from 'react-router-dom'
import styles from './navbar.module.scss'



type NavbarProps = {

}

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <div className={styles.container}> 

      <div className={styles.navleft}>
        <Link to="/home">Safin</Link>
      </div>

      <div className={styles.navright}>
        <Link to="/aboutMe">About Me</Link>
        <Link to="/experience">Experiences</Link>
        <Link to="/contact">Contact</Link>
      </div> 

      
    </div>
  )
}

export default Navbar
