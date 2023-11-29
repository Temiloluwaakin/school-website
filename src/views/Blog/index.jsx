import React from "react";
import Layout from "../../components/layout";
import HeaderStory from "./components/HeaderStory";
import NewsHeader from "./components/NewsHeader";
import NewsMain from "./components/NewsMain";
import "./styles.css";
import Gtt from "../../components/Gtt";

const Blog = () => {
	return (
		<Layout>
			<NewsHeader />
			<HeaderStory />
			<NewsMain />
			<Gtt />
		</Layout>
	);
};

export default Blog;
