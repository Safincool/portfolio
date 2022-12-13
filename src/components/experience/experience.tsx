import React from 'react'
import styles from './experience.module.scss'

type ExperienceProps = {

}

const Experience: React.FC<ExperienceProps> = () => {
  return (
    <div className={styles.container}>
       <h1 className={styles.header}>My experiences</h1>
        <h2 className={styles.header2left}>My programming experiences</h2>
        <h2 className={styles.header2right}>My other experiences</h2>
            <p>
                My coding language experiences are C+,
                Python, HTML, CSS, Java,
                JavaScript, TypeScript.
            </p>
   
            <p>
                I have worked at Restaurants,
                Markets and in a Daycare Club. 
                So I have a good experience of Customer Service.
            </p>
        <h1 className={styles.header}>My projects</h1>
            <p>
                
            </p>
    </div>
  )
}

export default Experience
