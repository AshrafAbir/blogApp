import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import { notFound } from "next/navigation";

async function getData(ids) {
  const res = await fetch(
    `http://localhost:3000/api/posts/${ids}`,

    { cache: "no-store" }
  );

  if (!res.ok) {
    return notFound();

    // throw new Error('Failed to fetch data')
  }

  return res.json();
};

export async function generateMetadata({ params }) {
  const post = await getData(params.ids)
  return {
    title: post.title,
    description: post.desc,
  }
};

const BlogId = async ({ params }) => {
  const data = await getData(params.ids);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>{data.title}</h1>
          <p className={styles.desc}>{data.desc}</p>

          <div className={styles.author}>
            <Image
              src={data.image}
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            ></Image>
            <span className={styles.userName}>{data.username}</span>
          </div>
        </div>

        <div className={styles.imgContainer}>
          <Image className={styles.img} src={data.image} alt="" fill={true} />
        </div>
      </div>

      <div className={styles.content}>
        <p className={styles.text}>{data.content}</p>
      </div>
    </div>
  );
};

export default BlogId;
