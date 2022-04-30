import Head from "next/head";
import AOS from "aos";
import "aos/dist/aos.css";

import {
	Contact,
	Hero,
	Posts,
	Projects,
	Services,
	Skills,
} from "../components";
import { getSortedPostsData } from "../lib/posts";
import { useEffect } from "react";

export default function Home({ posts, featured }) {
	useEffect(() => {
		AOS.init();
	});

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
			<main style={{ padding: "0 2rem" }}>
				<Hero />
				{/* <Services /> */}
				{/* <Projects /> */}
				{/* <Contact /> */}
				<Posts posts={posts} featured={featured} />
			</main>
		</>
	);
}

// Fetch posts & projects
export async function getStaticProps() {
	const posts = getSortedPostsData().slice(0, 6);
	const featured = getSortedPostsData().filter((post) => post.featured);

	return {
		props: { posts, featured },
	};
}