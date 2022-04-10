import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import Post from "../../components/Post";
import { useState, useEffect } from "react";
import Modal from "react-modal";
import MakePostButton from "../../components/MakePostButton";
import { useRouter } from "next/router";
import IndexPage from "../../components/IndexPage";

export default function Home({ posts_prop, filteruser }) {
    return (
        <IndexPage posts_prop={posts_prop} filteruser={filteruser}></IndexPage>
    );
}

Home.getInitialProps = async (context) => {
    const { filteruser } = context.query;
    //const res = await fetch(`http://localhost:5000/posts?byuser=${"sean"}`);
    const res = await fetch(
        `http://localhost:5000/posts?filteruser=${filteruser}`
    );

    const posts = await res.json();
    console.log(posts);

    console.log(filteruser);
    return {
        posts_prop: posts, // will be passed to the page component as props
        filteruser: filteruser,
    };
};
