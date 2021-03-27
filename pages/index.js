import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.main}>
      <Head>
        <title>iabhishek</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className={styles.container}>
          <div className={styles.title}>For the <span>Zensar</span> API test Go to <span>/user</span></div>
          <p className={styles.description}>For the test of Zensar API go to the /user then it display the result</p>
      </div>
    </div>
  )
}
