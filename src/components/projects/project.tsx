import React from 'react'
import styles from './project.module.scss'
import img from '../../images/bunnyss.png'

type ProjectProps = {

}

const Project: React.FC<ProjectProps> = () => (
  <div className={styles.container}>
    
    <div className={styles.header}>
      <h1> My Projects</h1>
    </div>

    <div className={styles.box}>
      <img src={img} alt="" width={200}
      height={200}
      />

      <h2 className={styles.header2}> The Lost Bunny Game</h2>

      <h3 className={styles.header3}> This is a game I have created</h3>

    </div>
  </div>
)

export default Project
