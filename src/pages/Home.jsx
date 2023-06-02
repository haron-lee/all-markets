import React from 'react';
import Nav from '../Components/common/Nav';
import Slide from '../Components/Slide/Slide';
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
