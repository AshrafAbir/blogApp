import React from 'react'
import styles from './page.module.css'
import Image from 'next/image';
import Button from '@/components/Button/Button';

export const metadata = { 
  title : "Ashraf Abir About",
  description : " Ashraf Abir about info"
}
const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src='https://images.pexels.com/photos/1432516/pexels-photo-1432516.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
         alt='' fill= {true} className={styles.img} />

         <div className={styles.imgText}>
          <h1 className={styles.imgTitle} >Digital Storytellers</h1>
          <h2 className={styles.imgDesc} >Handcrafting award winning digital experiences</h2>
         </div>

      </div>
      <div className={styles.textContainer}>
       <div className={styles.items} >
         <h1 className={styles.title}>
          Who Are We?
         </h1>
         <p className={styles.desc}>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          In tempora nobis Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
          sAdipisci eos assumenda dolore dicta dolorem quo illo sapiente ea nostrum sit? 
          Accusantium magnam rem delectus quisquam nam praesentium eum, fugiat facilis!
          <br />
          <br />
           quibusdam molestiae facilis quas quam,
          expedita aliquid dolore perspiciatis voluptatibus dolorem 
          repellat vitae reiciendis animi dolores amet placeat ut!Lorem ipsum dolor sit, 
          amet consectetur adipisicing elit.
          In tempora nobis Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
          sAdipisci eos assumenda dolore dicta dolorem quo illo sapiente ea nostrum sit?</p>
       </div>
       <div className={styles.items} >
         <h1 className={styles.title}>
         What We Do?
         </h1>
         <p className={styles.desc}>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          In tempora nobis quibusdam molestiae facilis quas quam,
          expedita aliquid dolore perspiciatis voluptatibus dolorem 
          repellat vitae reiciendis animi dolores amet placeat ut!
          <br />
            <br /> - Dynamic Websites
            <br />
            <br /> - Fast and Handy
            <br />
            <br /> - Mobile Apps
          
          </p>
          <Button url='./contact' text='Contact' />
       </div>
      </div>
    </div>
  )
}

export default About;
