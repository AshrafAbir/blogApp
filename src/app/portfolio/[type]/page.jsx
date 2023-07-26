import React from 'react'
import styles from './page.module.css'
import Button from '@/components/Button/Button'
import Image from 'next/image'
const Type = ({params}) => {
 
  return (
    <div className={styles.container}>
      <div className={styles.categoryTilte}>{params.type}</div>
      <div className={styles.item} >
        <div className={styles.content}>
            <h1 className={styles.title}>Title</h1>
            <p className={styles.desc}>dec</p>
            <Button text ={'See More'} url={"#"} />
        </div>
        <div className={styles.imgContainer} >
        <Image className={styles.img} 
               src = 'https://images.pexels.com/photos/17150259/pexels-photo-17150259/free-photo-of-city-road-traffic-businessman.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
               fill = {true}
               alt = ''
        ></Image>
        </div>
      </div>
      
      {/* 2nd Item */}

      <div className={styles.item} >
        <div className={styles.content}>
            <h1 className={styles.title}>Title</h1>
            <p className={styles.desc}>dec</p>
            <Button text ={'See More'} url={"#"} />
        </div>
        <div className={styles.imgContainer} >
        <Image className={styles.img} 
               src = 'https://images.pexels.com/photos/3581878/pexels-photo-3581878.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
               fill = {true}
               alt = ''
        ></Image>
        </div>
      </div>

    </div>
  )
}

export default Type
