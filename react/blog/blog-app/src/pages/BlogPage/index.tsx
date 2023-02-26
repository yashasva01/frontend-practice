import * as React from 'react';
import Header from '../../components/Header/header';
import Footer from '../../components/Footer/footer';
import Navbar from '../../components/Navbar/navBar';
import MainBody from '../../components/MainBody/mainBody';

const BlogPage = () => {
  return (
    <div>
      <div className='body'>
        <Header />
        <Navbar />
        <MainBody />
        <Footer />
      </div>
    </div>
  );
};

export default BlogPage;
