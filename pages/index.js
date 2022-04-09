import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Post from "../components/Post";

export default function Home({ posts }) {
    function getPosts() {
        return [
            {
                maker: "maker1",
                title: "title1",
                content: "content1",
                hash: "abcde",
                id: "1",
                paid: false,
                post_date: "2020-01-01",
                reveal_date: "2020-02-01",
            },
            {
                maker: "maker2",
                title: "title2",
                content: "content2",
                hash: "fff",
                id: "2",
                paid: true,
                post_date: "2020-01-02",
                reveal_date: "2020-02-02",
            },
            {
                maker: "maker2",
                title: "title2",
                content: null,
                hash: "fff",
                id: "3",
                paid: false,
                post_date: "2020-01-02",
                reveal_date: "2020-02-02",
            },
        ];
    }
    return (
        <div className={styles.container}>
            <Head>
                <title>Create Next App</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                {posts.map((p) => (
                    <Post key={p.id} {...p}></Post>
                ))}
            </main>

            <footer className={styles.footer}></footer>
        </div>
    );
}

export async function getStaticProps(context) {
    const res = await fetch("http://localhost:5000/posts");
    const posts = await res.json();
    console.log(posts);

    return {
        props: { posts: posts }, // will be passed to the page component as props
    };
}
