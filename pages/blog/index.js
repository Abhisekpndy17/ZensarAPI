import styles from '../../styles/Home.module.css';
import Link from 'next/link'

export const getStaticProps = async () =>{

    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();

    return{
        props:{posts : data}
    }
}

const Blog = ({posts}) => {
    return (
        <div className={styles.main}>
            <h1>All Blogs Here Through Fake APIs</h1>
            <div className={styles.grid}>
            {posts.map(post =>(
                <Link href={'/blog/'+ post.id} key={post.id}>
                    <div className={styles.card}>
                    <h3 className={styles.code}>{post.title}</h3>
                    <p>{post.body}</p>
                    </div>
                </Link>
            ))}
            </div>
        </div>
    )
}

export default Blog