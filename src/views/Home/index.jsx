import React from "react";
//import { Container } from "react-bootstrap";
import Layout from "../../components/layout";
import AboutEnroll from "./components/AboutEnroll";
import ClassesOpeningPage from "./components/ClassesOpeningPage";
import HeadTeacher from "./components/HeadTeacher";
import Homeheader from "./components/Homeheader";
import LatestNews from "./components/LatestNews";
import StudentLife from "./components/StudentLife";
import UpcomingEvent from "./components/UpcomingEvent";
import "./style.css";
import Gtt from "../../components/Gtt";


const Home = () => {
	return (
		<Layout>
			<div className="homepage">
				<Homeheader />
				<ClassesOpeningPage/>
				<UpcomingEvent />
				<LatestNews />
				<AboutEnroll />
				<HeadTeacher />
				<StudentLife />
			</div>
			<Gtt/>
		</Layout>
	);
};

export default Home;
