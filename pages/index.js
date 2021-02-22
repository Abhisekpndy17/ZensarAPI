import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.main}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h2>This is Home page of Next js</h2>
      <div className={styles.container}>
        <div>
          <div>
            <h3>This is the heading</h3>
          </div>
          <p>This is the text paragraph tag in the card of next demo</p>
        </div>
      </div>
    </div>
  )
}
