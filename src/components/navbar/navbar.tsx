import React from 'react'
import { Link } from 'react-router-dom'
import styles from './navbar.module.scss'



type NavbarProps = {

}

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <div className={styles.container}> 

      <div className={styles.navleft}>
        <Link to="/home">
          <h2 className={styles.S}>S</h2>
          <h2>afin</h2>
        </Link>
      </div>

      <div className={styles.navright}>
        <Link to="/home">Home</Link>
        <Link to="/experience">Experiences</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
        
      </div> 



      
    </div>
  )
}

export default Navbar
