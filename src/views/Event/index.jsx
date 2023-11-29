import React from "react";
import Layout from "../../components/layout";
import OpeningPage from "./components/OpeningPage"; 
import './styles.css';
import Gtt from "../../components/Gtt";



const Event = ({img}) => {
	return (
	<Layout>
		<OpeningPage img={img} />
		<Gtt/>
	</Layout>
	)
};

export default Event;
