import { useSelector } from 'react-redux';

import { RootState } from '@reduxjs/toolkit/query';

import {  useAppSelector } from './redux/hooks';
import Auth from './views/Auth/index';

import './App.css';

function App() {

  const { error, isAuthenticated, user } = useAppSelector((state: RootState) => state.auth);
  if (!isAuthenticated)
    return <Auth />

  return (
    <>
      <h1>Hello World</h1>
    </>
  );
}

export default App;
