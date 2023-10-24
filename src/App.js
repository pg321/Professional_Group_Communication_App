import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './components/Header';
import { styled } from 'styled-components';
import SideBar from './SideBar';
import Chat from './Chat';
import { auth } from './firebase';
import { useAuthState } from "react-firebase-hooks/auth";
import Login from './Login';
import Spinner from "react-spinkit";

function App() {
  const [user, loading] = useAuthState(auth);
  if(loading) {
    return (
      <AppLoading>
        <AppLoadingContents>
          <img
          src="https://clipground.com/images/slack-clipart-logo-3.png"
          alt=""
          />
          <Spinner 
          name="ball-spin-fade-loader"
          color="purple"
          fadeIn="none"
          />
        </AppLoadingContents>
      </AppLoading>
    )
  }

  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login />
        ): (
          <>
          <Header />
          <AppBody>
            <SideBar />
          <Routes>
            <Route path="/" element={<Chat />}/>
          </Routes>
          </AppBody>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;

const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;

const AppLoading = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  width: 100%;
`;

const AppLoadingContents = styled.div`
  text-align: center;
  padding-bottom: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  >img {
    height: 100px;
    padding: 20px; 
    margin-bottom: 40px;
  }
`;
