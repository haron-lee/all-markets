import React from 'react';
import GlobalStyle from './GlobalStyle';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <>
      <GlobalStyle />
      <Home />
      <Routes>
        <Route path="/"></Route>
      </Routes>
    </>
  );
}
export default App;
