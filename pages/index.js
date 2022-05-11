import { useEffect, useState } from "react";
import Head from "next/head";

import { FeaturedPosts, Posts } from "../components";
import { getSortedPostsData } from "../lib/posts";

import styles from "../styles/Home.module.css";

export default function Home({ posts, featured }) {
	return (
		<>
			<Head>
				<title>Home | Alex Kimeu</title>
				<meta
					name="description"
					content="Software Developer | Limitless learner | Blogger"
				/>
				<meta name="keywords" content="Alex Kimeu, Software Developer" />
			</Head>
			<main className={styles.home}>
				<FeaturedPosts featured={featured} />
				<Posts posts={posts} />
			</main>
		</>
	);
}

// Fetch posts & projects
export async function getStaticProps() {
	const posts = getSortedPostsData()
		.filter((post) => !post.featured)
		.slice(0, 6);
	const featured = getSortedPostsData().filter((post) => post.featured);

	return {
		props: { posts, featured },
	};
}
