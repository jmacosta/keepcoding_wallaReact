import { useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './Components/Layout/Layout';
import AdvertPage from './pages/AdvertPage';
import AdvertsPages from './pages/AdvertsPages';
import LoginPage from './pages/LoginPage/LoginPage';
import NewAdvertPage from './pages/NewAdvertPage';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Routes>
      <Route path='/login' element={<LoginPage />}></Route>
      <Route path='/adverts' element={<Layout />}>
        <Route index element={<AdvertsPages />} />
        <Route path=':adverId' element={<AdvertPage />} />
        <Route path='new' element={<NewAdvertPage />} />
      </Route>
      <Route path='/' element={<Navigate to='/adverts' />} />
      <Route path='/404' element={<div>404 | Not found</div>} />
      <Route path='*' element={<Navigate to='/404' />} />
    </Routes>
  );
}

export default App;
