import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './Components/Layout/Layout';
import AdvertPage from './pages/AdvertPage';
import AdvertsPage from './pages/AdvertsPage/AdvertsPage';
import NewAdvertPage from './pages/NewAdvertPage';
import LoginPage from './pages/auth/LoginPage/LoginPage';

function App() {
  return (
    <Routes>
      <Route path='/login' element={<LoginPage className='login' />}></Route>
      <Route path='/adverts' element={<Layout />}>
        <Route index element={<AdvertsPage />} />
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
