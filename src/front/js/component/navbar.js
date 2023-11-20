import React from "react";
import { Link } from "react-router-dom";
import navbarBrandImg from "../../img/navbar-brand-img.png";
import PrimarySearchAppBar from "../component/primarySearchAppBar.js";


export const Navbar = () => {
	return (
		<nav className="navbar" style={{ backgroundColor: 'black' }}>
			<div className="container">
				<PrimarySearchAppBar />
			</div>
		</nav>
	);
};
