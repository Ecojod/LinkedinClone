import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import Feed from './components/appBody/feed/Feed';
import Sidebar from './components/appBody/sidebar/Sidebar';
import Header from './components/header/Header';
import { login, logout, selectUser } from './features/userSlice';
import Login from './components/loginLogout/Login';
import { auth } from './firebase';
import { useDispatch } from 'react-redux/es/exports';
import Widgets from './components/widgetNow/Widgets';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.profileUrl
          })
        );
      }
      else {
        dispatch(logout());
      }
    })
  }, []);
  return (
    <div className="app">
      <Header />
      {!user ? <Login /> :
        <div className="app-body">
          <Sidebar />
          <Feed />
          <Widgets />
        </div>
      }

    </div>
  );
}

export default App;
