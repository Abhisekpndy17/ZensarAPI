import styles from '../styles/Home.module.css';
import Head from 'next/head';

const about = () => {
    return (
        <div className={styles.container}>
            <Head>
        <title>iabhishek || About</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
            <h2>This is About Page</h2>
            <p>This is the about page from the next js router </p>
        </div>
    )
}

export default about