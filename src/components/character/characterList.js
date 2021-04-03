import { Link } from "react-router-dom";
import "./character.css";
const CharacterList = ({ characters }) => {
	return (
		<div className="Characters">
			{characters.map((character) => (
				<CharacterCard key={character.id} {...character} />
			))}
		</div>
	);
};

const CharacterCard = ({ id, name, image }) => (
	<article className="Characters-item">
		<Link to={`/${id}`}>
			<img src={image} alt={name} />
			<h2>{name}</h2>
		</Link>
	</article>
);

export default CharacterList;
