import { Link, withRouter } from "react-router-dom";
import { data } from "data";
import "components/character/character.css";

const CharacterDetails = ({ match }) => {
	const {
		name,
		image,
		episode,
		status,
		species,
		gender,
		origin,
		location,
	} = data.results.find(
		(character) => String(character.id) === match.params.id
	);

	return (
		<div className="Characters-inner">
			<article className="Characters-card">
				<img src={image} alt={name} />
				<h2>{name}</h2>
			</article>
			<article className="Character-card">
				<h3>
					span Episodes: <span>{episode.length}</span>
				</h3>
				<h3>
					Status: <span>{status}</span>
				</h3>
				<h3>
					Species: <span>{species}</span>
				</h3>
				<h3>
					Gender: <span>{gender}</span>
				</h3>
				<h3>
					Origin: <span>{origin.name}</span>
				</h3>
				<h3>
					Last Location: <span>{location.name}</span>
				</h3>
				<Link className="return" to="/">
					Volver
				</Link>
			</article>
		</div>
	);
};

export default withRouter(CharacterDetails);
