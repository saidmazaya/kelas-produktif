import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../styles/App.css";
import Home from "./Home";
import About from "./About";
import Lampu from "./Lampu";
import Product from "./Product";
import FetchApi from "./FetchApi";

function App() {

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/lampu" element={<Lampu />} />
				<Route path="/products/:id" element={<Product />} />
				<Route path="/api" element={<FetchApi />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
