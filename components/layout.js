import Head from 'next/head';
import styles from './layout.module.css';
import Link from 'next/link';
import React from 'react';

export const siteTitle = 'Next.js Sample Website';

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="../public/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle,
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <nav className={styles.navbar}>
        <Link href="/" className={styles.navLink}>Accueil</Link>
        <Link href="/post/mes_post" className={styles.navLink}>Blog</Link>
      </nav>
      <header className={styles.header}></header>
      <main>{children}</main>
      {!home && (
        <div className={styles.previousButton}>
          <Link href="javascript:history.back()" className={styles.navLink}>
            <button className="button">Précédent</button>
          </Link>
        </div>
      )}
      <footer></footer>
    </div>
  );
}
