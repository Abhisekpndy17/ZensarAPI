import style from '../../styles/Home.module.css';
import Head from 'next/head';

export const getStaticPaths = async () => {

    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();

    const paths = data.map(post => {
        return {
            params: { id: post.id.toString() }
        }
    })

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/' + id);
    const data = await res.json();

    return {
        props: { post: data }
    }
}


const Details = ({ post }) => {
    return (
        <div className={style.container}>
            <Head>
                <title>{post.title}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
        </div>
    )
}

export default Details