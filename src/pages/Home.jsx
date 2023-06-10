import React from 'react';
import Nav from '../Components/common/Nav';
import Slide from '../Components/Slide/Slide';
import Main from '../Components/Main';
import Footer from '../Components/layout/Footer';
import { useLocation } from 'react-router-dom';

const Home = () => {
  const location = useLocation();
  const userCheck = location.state?.userCheck;
  const type = location.state?.type;

  return (
    <>
      <header>
        <Nav userCheck={userCheck} type={type} />
        <Slide />
      </header>
      <Main />
      <Footer />
    </>
  );
};

export default Home;
