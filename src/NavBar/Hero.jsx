import React from 'react';
import '../styles/Hero.css';
import ButtonB from '../Buttons/ButtonB';
import Casa from "../assets/img/Casa.png";

const Hero = () => {
	return (
		<div className="custom__hero-container d-flex align-items-center">
			<div className="hero__bg" />
			<div className="container">
				<div className="row d-flex justify-content-center">
					<div className="hero__content col-lg-6 col-md-10 col-sm-12 text-center d-flex flex-column align-items-center">
						<h1 className="hero__h mb-4">Casa Cinema</h1>
						<p className="hero__p mb-4">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada, augue non auctor
							pellentesque, lectus nunc dignissim diam, non condimentum magna lorem vitae eros.
						</p>
						<ButtonB />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;