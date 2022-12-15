import React from 'react'
import styles from './experience.module.scss'

type ExperienceProps = {

}

const Experience: React.FC<ExperienceProps> = () => {
  return (
    <div className={styles.container}>
       <h1 className={styles.header}>My experiences</h1>
        <div className={styles.header2}>
            <h2>My coding experiences</h2>
            <h2>My other experiences</h2>
        </div>
        <div className={styles.header3}>
            <h3>
                My coding language experiences are C#,
                Python, HTML, CSS, Java,
                JavaScript, TypeScript etc.
            </h3>
            <h3>
                I have worked at Restaurants,
                Markets and in a Elementary After School Club. 
                So I have a good experience of Customer Service.
            </h3>
        </div> 
       
    </div>
  )
}

export default Experience
