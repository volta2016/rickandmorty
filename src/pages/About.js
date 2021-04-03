import React from "react";
import RickAndMorty from "assets/Rick_y_morty.png";
import "../styles/about.css";

const About = () => (
	<div className="grid">
		<div>
			<h2>Rick and Morty</h2>
			<p>
				Rick y Morty es una animación de ciencia ficción para adultos creada,
				producida y escrita por Justin Roiland (Hora de aventuras) y Dan Harmon
				(Community, Monster House) para Adult Swim. Justin Roiland's Solo Vanity
				Card Productions, Harmonious Claptrap y Williams Street son las empresas
				productoras junto a Starburns Industries (del año 2013 al 2014) y Rick
				and Morty, LLC. (de 2015 hasta el presente).
			</p>
			<p>
				Rick Sánchez es la definición exacta de "científico loco". Es
				alcohólico, es un genio, es irresponsable y está loco. Rick acaba de
				mudarse a casa de su hija Beth y allí recuerda que tiene un nieto
				llamado Morty. Sin preguntar a nadie, decide que va a obligarle a que le
				acompañe a todo tipo de aventuras para que el chico se vuelva
				inteligente como él y no se convierta en un idiota como Jerry, padre de
				Morty y yerno de Rick. Así, Rick y Morty comienzan a vivir aventuras
				intergalácticas a pesar de que la familia no quiere que lo sigan
				haciendo. Poco a poco tienen que intentar encontrar un equilibrio entre
				su vida familiar y sus viajes a través del espacio y por distintas
				realidades paralelas, algo que no es fácil para el pequeño Morty que es
				incapaz de tener una vida normal al margen de su abuelo.
			</p>
		</div>
		<div>
			<img src={RickAndMorty} alt="Rick and Morty profile" />
		</div>
	</div>
);

export default About;
