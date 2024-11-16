// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { useEffect, useState } from 'react';

// const loadPages = () => {
//   const context = require.context('./pages', true, /\.jsx$/);
//   return context.keys().reduce((modules, path) => {
//     modules[path] = context(path);
//     return modules;
//   }, {});
// };

// function App() {
//   const [routes, setRoutes] = useState([]);

//   useEffect(() => {
//     const pages = loadPages();
//     const dynamicRoutes = [];

//     for (const path in pages) {
//       const name = path.split('/').pop().replace('.jsx', '');
//       const routePath = name === 'Home' ? '/' : `/${name.toLowerCase()}`;

//       dynamicRoutes.push({
//         path: routePath,
//         component: pages[path].default,
//         name,
//       });
//     }

//     setRoutes(dynamicRoutes);
//   }, []);

//   return (
//     <Router>
//       <Routes>
//         {routes.map(({ path, component: Component, name }) => (
//           <Route key={name} path={path} element={<Component />} />
//         ))}
//       </Routes>
//     </Router>
//   );
// }

// export default App;
