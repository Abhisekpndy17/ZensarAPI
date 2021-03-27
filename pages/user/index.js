import styles from '../../styles/Home.module.css';
import Link from 'next/link';
import Head from 'next/head'

export const getStaticProps = async () =>{

    const res = await fetch("https://s3-ap-southeast-1.amazonaws.com/he-public-data/users49b8675.json");
    const data = await res.json();
    return{
        props:{posts : data}
    }
}

const User = ({posts}) => {

    return (
        <div className={styles.main}>
            <Head>
        <title>iabhishek || Users</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
            <h1>All User Card Through Zenser APIs</h1>
            <div className={styles.grid}>
            {posts.map(post =>(
                <Link href={'/image/'+ post.id} key={post.id}>
                    <div className={styles.card}>
                    <h3 className={styles.title}>{post.name}</h3>
                    <img src={post.Image} alt="" srcset=""/>
                    </div>
                </Link>
            ))}
            </div>
        </div>
    )
}

export default User