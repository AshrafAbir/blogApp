'use client'
import Link from 'next/link'
import React from 'react'
import styles from './page.module.css'
import Darkmodetoggle from '../Darkmodetoggle/Darkmodetoggle'
import { signOut, useSession } from 'next-auth/react'


const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Portfolio",
    url: "/portfolio",
  },
  {
    id: 3,
    title: "Blog",
    url: "/blog",
  },
  {
    id: 4,
    title: "About",
    url: "/about",
  },
  {
    id: 5,
    title: "Contact",
    url: "/contact",
  },
  {
    id: 6,
    title: "Dashboard",
    url: "/dashboard",
  },
];

const Navbar = () => {
   // to check if the user logged in or not 
    const session = useSession();

  return (
    <div className={styles.container}>
      <Link  className={styles.logo} href = '/' > AshrafMania </Link>
     
      <div className={styles.links}>
      <Darkmodetoggle/>
        {links.map(link => (
            <Link key= {link.id} href = {link.url} className={styles.link} >{link.title}</Link>
        ))}
        {/* if authenticated or log in then this button will show up */}
        {session.status === "authenticated" && (
        <button className={styles.logout} onClick={()=>signOut()} >
          Log out
        </button>
        )}

      </div>

    </div>
  )
}

export default Navbar
