import * as React from 'react';
import NavBar from '../../components/Navbar/navBar';
import Footer from '../../components/Footer/footer';

const PageNotFound: React.FC = (): JSX.Element => {
  return (
    <div className='body'>
      <NavBar />
      <div className='pageNotFound'>
        <h1> 404 </h1>
        <h2> Page Not Found </h2>
      </div>
      <Footer />
    </div>
  );
};

export default PageNotFound;
