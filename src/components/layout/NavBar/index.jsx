import React from "react";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
	return (
		<>
			<Navbar
				expand="lg"
				variant="dark"
				fixed="top"
				style={{
					background: "#1a434d",
				}}
			>
				<Container>
					<Link className="navbar-brand fw-bold" to="/">
						<h1>Darul Athar</h1>
					</Link>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="mx-auto">
							<NavLink className="nav-link" to="/">
								Home
							</NavLink>
							<NavLink className="nav-link" to="/blog">
								Blog
							</NavLink>
							<NavLink className="nav-link" to="/about">
								About
							</NavLink>
							<NavLink className="nav-link" to="/events">
								Events
							</NavLink>
							<NavLink className="nav-link" to="/calendar">
								Calendar
							</NavLink>
							<NavLink className="nav-link" to="/contact">
								Contact
							</NavLink>
						</Nav>
					</Navbar.Collapse>
					<Nav className="">
						<Button variant="outline-light" children="Enroll now" />
					</Nav>
				</Container>
			</Navbar>
		</>
	);
};

export default NavBar;
