import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
const Footer = () => {
  return (
    <div className={styles.container} >
      <div>©2023 AshrafMania. All rights reserved. </div>
      <div className={styles.imageContainer}> 
        <Image src='/1.png'  width={25} height={25} className={styles.icon}  alt='facebook'   />
        <Image src='/2.png'  width={25} height={25} className={styles.icon} alt=''   />
        <Image src='/3.png'  width={25} height={25} className={styles.icon} alt=''   />
        <Image src='/4.png'  width={25} height={25} className={styles.icon} alt=''   />
      </div>
    </div>
  )
}

export default Footer
