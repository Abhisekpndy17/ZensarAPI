import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Image from 'next/image';

export default function Home() {
  return (
    <div className={styles.main}>
      <Head>
        <title>iabhishek</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h2>This is Home page of Next js</h2>
      <div className={styles.container}>
        <div>
          <div>
            <h3>This is the heading</h3>
          </div>
          <Image src='/images/img-1.jpg' alt='img' height={300} width={500}/>
          <p>This is the text paragraph tag in the card of next demo</p>
        </div>

      </div>
    </div>
  )
}
