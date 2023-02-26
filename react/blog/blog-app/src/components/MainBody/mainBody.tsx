import * as React from 'react';
import Card from '../Card/card';
//import cardData from './cardData';
import { BlogPostContext } from '../../contexts/blogPostContext';
import { GET_BLOG_DATA } from '../../constants/apiEndPoints';
// import { BlogData } from '../../types';
import makeRequest from '../../utils/makeRequest';
import { useNavigate } from 'react-router-dom';

export default function MainBody() {
  const { allBlogData, setAllBlogData } = React.useContext(BlogPostContext);
  //const [blogData, setBlogData] = React.useState<BlogData[]>();
  //const [error, setError] = React.useState(false);
  const navigate = useNavigate();

  React.useEffect(() => {
    makeRequest(GET_BLOG_DATA, {}, navigate).then((response) => {
      //setBlogData(response);
      setAllBlogData(response);
    });
    // .catch((error) => {
    //   setError(error);
    // });
  }, []);

  // if (error) {
  //   return (
  //     <div className='blogDataError'>
  //       <p>{error}</p>
  //     </div>
  //   );
  // }
  return allBlogData ? (
    <div className='mainBody'>
      {allBlogData.map((data) => {
        //console.log(data);
        return <Card key={data.id} data={data} index={data.id} />;
      })}
    </div>
  ) : (
    <div className='blogDataLoader'>
      <p>Loading...</p>
    </div>
  );
}
