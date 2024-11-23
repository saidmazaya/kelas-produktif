// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import "../styles/App.css";
// import Home from "./Home";
// import About from "./About";
// import Lampu from "./Lampu";
// import Product from "./Product";
// import FetchApi from "./FetchApi";
// import WithoutMemoization from "./WithutMemoization";
// import WithMemoization from "./WithMemoization";

// function App() {

// 	return (
// 		<BrowserRouter>
// 			<Routes>
// 				<Route path="/" element={<Home />} />
// 				<Route path="/about" element={<About />} />
// 				<Route path="/lampu" element={<Lampu />} />
// 				<Route path="/products/:id" element={<Product />} />
// 				<Route path="/api" element={<FetchApi />} />
// 				<Route path="/without-memo" element={<WithoutMemoization />} />
// 				<Route path="/with-memo" element={<WithMemoization />} />
// 			</Routes>
// 		</BrowserRouter>
// 	);
// }

// export default App;

// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import "../styles/App.css";
// import { lazy, Suspense } from "react";

// const Home = lazy(() => import("./Home"));
// const About = lazy(() => import("./About"));
// const Lampu = lazy(() => import("./Lampu"));
// const Product = lazy(() => import("./Product"));
// const FetchApi = lazy(() => import("./FetchApi"));
// const WithoutMemoization = lazy(() => import("./WithutMemoization"));
// const WithMemoization = lazy(() => import("./WithMemoization"));
// import { useEffect } from "react";

// function App() {
//   useEffect(() => {
//     console.time("Load With Lazy");
//   }, []);

//   useEffect(() => {
//     console.timeEnd("Load With Lazy");
//   });

//   return (
//     <BrowserRouter>
//       <Suspense fallback={<div>Loading...</div>}>
//         <Routes>
// 					<Route path="/" element={<Home />} />
// 					<Route path="/about" element={<About />} />
// 					<Route path="/lampu" element={<Lampu />} />
// 					<Route path="/products/:id" element={<Product />} />
// 					<Route path="/api" element={<FetchApi />} />
// 					<Route path="/without-memo" element={<WithoutMemoization />} />
// 					<Route path="/with-memo" element={<WithMemoization />} />
//         </Routes>
//       </Suspense>
//     </BrowserRouter>
//   );
// }

// export default App;

// import React, { useEffect } from "react";
// import HeavyComponent from "../components/HeavyComponent";

// function App() {
//   useEffect(() => {
//     console.time("Load Without Lazy");
//   }, []);

//   useEffect(() => {
//     console.timeEnd("Load Without Lazy");
//   });

//   return (
//     <div>
//       <h1>App Without Lazy Loading</h1>
// 				<h1>dsafkdsfjksdafjkdsafdsfsdfsdkfsdkafj</h1>
//       <HeavyComponent />
// 				<h1>dsafkdsfjksdafjkdsafdsfsdfsdkfsdkafj</h1>
// 				<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjYEeyclMEaFsZGeZ1UoRoQbQ7yS5W4xxsuA&s" alt="sadas" />
//     </div>
//   );
// }

// export default App;

import React, { Suspense, lazy, useEffect } from "react";

// // Lazy-load HeavyComponent
const HeavyComponent = lazy(() => import("../components/HeavyComponent"));

function App() {
  useEffect(() => {
    console.time("Load With Lazy");
  }, []);

  useEffect(() => {
    console.timeEnd("Load With Lazy");
  });

  return (
    <div>
      <h1>App With Lazy Loading</h1>
			<h1>dsafkdsfjksdafjkdsafdsfsdfsdkfsdkafj</h1>
      <Suspense fallback={<div>Loading Heavy Component...</div>}>
        <HeavyComponent />
      </Suspense>
			<h1>dsafkdsfjksdafjkdsafdsfsdfsdkfsdkafj</h1>
			<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjYEeyclMEaFsZGeZ1UoRoQbQ7yS5W4xxsuA&s" alt="sadas" />
    </div>
  );
}

export default App;
