import React from 'react'

import { RootState } from '@reduxjs/toolkit/query';

import { logout } from '../../redux/auth/slice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

function Home() {
  const dispatch = useAppDispatch();

  const { user } = useAppSelector((state: RootState) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
  }
  return (
    <section className="navigation">
      <div className="nav-container">
        <div className="brand">
          <a href="#!">🍀 Welcome to the application.</a>
        </div>
        <nav>
          <div className="nav-mobile">
            <a id="nav-toggle" href="#!"><span></span></a>
          </div>
          <ul className="nav-list">

            <li><a >{user.name}</a></li>
            <li><a onClick={handleLogout}>Logout</a></li>
          </ul>
        </nav>
      </div>
    </section>
  )
}

export default Home