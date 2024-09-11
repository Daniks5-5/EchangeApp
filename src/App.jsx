import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePages from './pages/HomePages';
import LoginPages from './pages/LoginPages';
import AboutPages from './pages/AboutPages';
import RegisterPages from './pages/RegisterPages';
import MainPages from './pages/MainPages';

function App() {
  return (
    <Router>
      <MainPages />
      
      <Routes>
        <Route path='/' element={<HomePages />} />
        <Route path='/login' element={<LoginPages />} />
        <Route path='/register' element={<RegisterPages />} />
        <Route path='/about' element={<AboutPages />} />
      </Routes>
    </Router>
  );
}

export default App;
