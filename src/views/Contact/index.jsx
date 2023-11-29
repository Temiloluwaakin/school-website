import React from "react";
import Layout from "../../components/layout";
import ContactHeader from "./components/ContactHeader";
import ContactSection from "./components/ContactSection";
import "./styles.css";
import Gtt from "../../components/Gtt";

const Contact = () => {
	return (
		<Layout>
			<ContactHeader />
			<ContactSection />
			<Gtt />
		</Layout>
	);
};

export default Contact;
