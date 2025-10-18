import './App.css';
import { Header } from './components/Header';
import { HomePage } from './components/HomePage';
import { CatPage } from './components/CatPage';
import { Routes, Route } from 'react-router-dom';
import { RandomCatPage } from './components/RandomCatPage';


function App() {
  return (
    <>
    <div className='body-container'>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catpage" element={<CatPage />} />
        <Route path="/randomCatPage" element={<RandomCatPage />} />
      </Routes>
      </div>
    </>
  );
}

export default App;
