import Layout from "../../components/layout";
import { Container } from "react-bootstrap";
import AboutHeader from "./components/AboutHeader";
import AboutSection from "./components/AboutSection";
import AboutTeam from "./components/AboutTeam";
import Gtt from "../../components/Gtt"

const About = ({img}) => {
	return (
		<Layout>
			<AboutHeader img={img} />
			<Container>
				<AboutSection />
			</Container>
			<AboutTeam />
			<Gtt />
		</Layout>
	);
};

export default About;
