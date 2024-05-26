import { useSelector } from 'react-redux';

import { RootState } from '@reduxjs/toolkit/query';

import { useAppSelector } from './redux/hooks';
import Auth from './views/Auth/index';
import Home from './views/Home';

import './App.css';

function App() {

  const { isAuthenticated } = useAppSelector((state: RootState) => state.auth);

  if (!isAuthenticated)
    return <Auth />

  return <Home />
}

export default App;
