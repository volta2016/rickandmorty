import Header from "components/header/header";
import Footer from "components/footer/footer";
import "./layout.css";

const Layout = ({ children }) => (
	<>
		<main className="Main">
			<Header />
			{children}
			<Footer />
		</main>
	</>
);

export default Layout;
