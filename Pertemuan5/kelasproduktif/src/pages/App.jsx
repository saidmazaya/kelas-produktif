import "../styles/App.css";
import Lampu from "./Lampu";
import Biodata from "../components/Biodata";
import Counter from "../components/Counter";

function App() {
	const biodata = {
		nama: "John Doe",
		usia: 25,
		alamat: "Jl. Merdeka No. 5, Jakarta",
		email: "john.doe@example.com",
		tinggi: 175,
	};

	return (
		<div className="App">
			<Lampu />

			{/* <Counter /> */}

			<Biodata nama={biodata.nama} usia={biodata.usia} alamat={biodata.alamat} email={biodata.email} />
		</div>
	);
}

export default App;
