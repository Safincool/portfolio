import React from 'react'
import styles from './experience.module.scss'

type ExperienceProps = {

}

const Experience: React.FC<ExperienceProps> = () => {
  return (
    <div className={styles.container}>
       <h1>My experiences</h1>
        <h2>My programming experiences</h2>
            <p>
                My coding language experiences are C+,
                Python, HTML, CSS, Java,
                JavaScript, TypeScript.
            </p>
        <h2>My other experiences</h2>
            <p>
                I have worked at Restaurants,
                Markets and in a Daycare Club. 
                So I have a good experience of Customer Service.
            </p>
        <h1>My projects</h1>
            <p>
                
            </p>
    </div>
  )
}

export default Experience
