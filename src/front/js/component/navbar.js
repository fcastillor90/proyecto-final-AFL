import React from "react";
import { Link } from "react-router-dom";
import navbarBrandImg from "../../img/navbar-brand-img.png";
import PrimarySearchAppBar from "../component/primarySearchAppBar.js";


export const Navbar = () => {
	return (
		<nav className="navbar" style={{ backgroundColor: 'black' }}>
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1"><img src={navbarBrandImg} style={{ width: '130px' }} /></span>
				</Link>
				<div className="ml-auto">
					<Link to="/demo">
						<button className="btn btn-primary">Check the Context in action</button>
					</Link>
				</div>
				<PrimarySearchAppBar />
			</div>
		</nav>
	);
};
