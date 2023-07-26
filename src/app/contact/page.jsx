import React from 'react'
import styles from './page.module.css'
import Button from '@/components/Button/Button'
import Image from 'next/image'

export const metadata = {
  title: 'Ashraf Abir Contact info ',
  description: 'Description about contact',
}


const Contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Let's Keep in Touch</h1>
      <div className={styles.content}>
        <div className={styles.imgContainer} >
        
        <Image
        src = {'/contact.png'}
        alt = "Contact"
        fill = "true"
        className={styles.img}
        />
          
        
        </div>
        <form className={styles.form}>

          <input type="text " placeholder='name' className={styles.input} />
          <input type="email " placeholder='email' className={styles.input} />
          <textarea
           name="text" id="" cols="30" rows="10" 
           placeholder='text' className={styles.textArea}>
          </textarea>
          <Button url={""} text={"Send"} />
        </form>

      </div>
      
    </div>
  )
}

export default Contact

