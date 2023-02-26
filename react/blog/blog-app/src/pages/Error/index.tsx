import * as React from 'react';
import { useParams } from 'react-router-dom';
import NavBar from '../../components/Navbar/navBar';
import Footer from '../../components/Footer/footer';

const Error: React.FC = (): JSX.Element => {
  const { statusCode } = useParams();
  return (
    <div className='body'>
      <NavBar />
      <div className='body'>
        <h2>something went wrong</h2>
        {statusCode && <p> HTTP Status Code: {statusCode}</p>}
      </div>
      <Footer />
    </div>
  );
};

export default Error;
