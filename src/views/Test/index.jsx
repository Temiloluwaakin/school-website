import React from "react";
import Layout from "../../components/layout";
import Wrapper from "./styles";

const Test = () => {
	return (
		<Layout>
			<Wrapper>
				<div className="first-div">
					<div className="first-div-nav">
						<div>Home</div>
						<div>contact</div>
					</div>
				</div>
			</Wrapper>
		</Layout>
	);
};

export default Test;
