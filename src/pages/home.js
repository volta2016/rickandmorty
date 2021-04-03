import { data } from "data";
import CharaterList from "components/character/characterList";

const Home = (increment) => {
	return (
		<div>
			<CharaterList characters={data.results} />
		</div>
	);
};

export default Home;
