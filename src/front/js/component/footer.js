import React, { Component } from "react";
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import navbarBrandImg from "../../img/navbar-brand-img.png";

export const Footer = () => (
	<footer>
		<div className="text-center" style={{ backgroundColor: 'black', color: 'white', marginBottom: 0, borderBottomLeftRadius: '10px', borderBottomRightRadius: '10px', padding: '1rem' }}>
			<p>Conoce más sobre OpenTech Insights</p>
			<p>
				<a href="https://www.instagram.com/tucuentadeinstagram">
					<InstagramIcon />
				</a>
				<a className="ms-3" href="https://twitter.com/tucuentadetwitter">
					<TwitterIcon />
				</a>
			</p>
		</div>
		<div className="text-center" style={{ backgroundColor: '#ba4ff8', color: 'black', marginTop: 0, borderTopLeftRadius: '10px', borderTopRightRadius: '10px', padding: '1rem' }}>
			<img src={navbarBrandImg} style={{ width: '130px' }} alt="Logo" />
			<p>
				<a style={{ color: 'black'}} href="#">Salarios</a>
			</p>
			<p>
				<a style={{ color: 'black'}} href="#">Empresas</a>
			</p>
			<p>
				<a style={{ color: 'black'}} href="#">Años de experiencia</a>
			</p>
		</div>
	</footer>
);
