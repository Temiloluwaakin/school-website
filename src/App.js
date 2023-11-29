import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./views/About";
import Home from "./views/Home";
import "./App.css";
import Event from "./views/Event";
import Blog from "./views/Blog";
import Contact from "./views/Contact";
import Test from "./views/Test";
import img from './views/Home/img/schlbui1.png'
import PreparatoryClass from "./views/Home/components/PreparatoryClass";
import JuniorSec from "./views/Home/components/JuniorSec" 
import SeniorSec from "./views/Home/components/SeniorSec"
import Calendar from "./views/Calendar";


function App() {
	return (
		<Routes>
			<Route path="/" element={<Home />} exact />
			<Route path="/about" element={<About img={img} />} />
			<Route path="/events" element={<Event img={img} />} />
			<Route path="/calendar" element={<Calendar img={img} />} />
			<Route path="/classes/prog1" element={<PreparatoryClass/>} />
			<Route path="/classes/prog2" element={<JuniorSec />} />
			<Route path="/classes/prog3" element={<SeniorSec />} />
			<Route path="/blog" element={<Blog />} />
			<Route path="/contact" element={<Contact />} />
			<Route path="/test" element={<Test />} />
		</Routes>
	);
}

export default App;
