import React from 'react';
import GlobalStyle from './GlobalStyle';
import Nav from './Components/layout/Nav';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <GlobalStyle />
      <Nav />
      <Routes>
        <Route path="/" element=""></Route>
      </Routes>
    </>
  );
}
export default App;
