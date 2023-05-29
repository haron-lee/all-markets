import React from 'react';
import Nav from '../Components/layout/Nav';
import Slide from '../Components/layout/Slide';
import Main from '../Components/layout/Main';
import Footer from '../Components/layout/Footer';

const Home = () => {
  return (
    <>
      <header>
        <Nav />
        <Slide />
      </header>
      <Main />
      <Footer />
    </>
  );
};

export default Home;
