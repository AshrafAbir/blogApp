import Image from "next/image";
import styles from './page.module.css'
import Hero from 'public/hero.png'
import Button from "@/components/Button/Button";

export default function Home() {
  return (
    <div className={styles.container} >

     <div className={styles.item}>
      <h1 className={styles.title} >Hello Visitors, <br/> Welcome to AshrafMania </h1>
      <p  className={styles.desc}>
        You can visit this website any time with all means <br/> try to use it for what is made for and feel free
      </p>
      <Button url = './portfolio'  text = 'See Our Work'/>
     </div>

      <div className={styles.item}>
      <Image src={Hero} className={styles.img} />
      {/* <Image  width={500} height={500} src='https://images.pexels.com/photos/14394469/pexels-photo-14394469.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' className={styles.image} / > */}

      </div>
    </div>
  )
}
