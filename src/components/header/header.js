import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "assets/rick-and-morty-logo.png";
import "./header.css";

const Header = () => {
	const [isDark, setIsDark] = useState(false);

	const switchDark = () => {
		setIsDark(!isDark);
		console.log(!isDark, "ok");

		document.body.classList.toggle("dark");
	};

	return (
		<div className="Header">
			<Link to="/">
				<img src={Logo} alt="rick and morty logo" />
			</Link>
			<nav>
				<Link to="/about">About</Link>
				<i>Dark Mode</i>
				<input
					id="checkbox"
					type="checkbox"
					className="checkbox"
					onChange={switchDark}
					value={isDark}
				/>
				<label className="switch" htmlFor="checkbox"></label>
			</nav>
		</div>
	);
};

export default Header;
