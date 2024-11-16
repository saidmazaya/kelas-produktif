import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Counter from '../components/Counter';
import '../styles/App.css';
import UniversityList from './UniversityList';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Counter />} />
        <Route path='/api' element={<UniversityList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
