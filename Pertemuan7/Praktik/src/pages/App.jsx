import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Counter from '../components/Counter';
import '../styles/App.css';
import UniversityList from './UniversityList';
import TodoList from './TodoList';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<TodoList />} />
        <Route path='/counter' element={<Counter />} />
        <Route path='/api' element={<UniversityList />} />
        <Route path='*' element={<h1>Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
