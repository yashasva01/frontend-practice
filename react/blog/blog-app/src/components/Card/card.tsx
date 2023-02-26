import * as React from 'react';
//import imagecard from '../../Assets/Images/abstract.png';
import { BlogData } from '../../types';
import clap from '../../Assets/Icons/clapping.svg';
import heartBlack from '../../Assets/Icons/heart-black.svg';
import heartRed from '../../Assets/Icons/heart-red.svg';
import { UPDATE_BLOG_DATA } from '../../constants/apiEndPoints';
import { getFormattedDateFromUtcDate, updateBlogData } from '../../utils/common';
import { BlogPostContext } from '../../contexts/blogPostContext';
import makeRequest from '../../utils/makeRequest';

export default function Card({ index, data }: { index: number; data: BlogData }) {
  // const [isliked, setLiked] = React.useState(data.liked);    const [clapNum, setClapNum] = React.useState(data.claps);
  const { allBlogData, setAllBlogData } = React.useContext(BlogPostContext);
  // const handleClap = async () => {
  //   try {
  //     await makeRequest(UPDATE_BLOG_DATA(data.id), {
  //       data: { claps: clapNum + 1 },
  //     });
  //     setClapNum(clapNum + 1);
  //   } catch (e) {
  //     //TODO: Handle error
  //   }
  // };
  // const handleLike = async () => {
  //   try {
  //     await makeRequest(UPDATE_BLOG_DATA(data.id), {
  //       data: { liked: !isliked },
  //     });
  //     setLiked(!isliked);
  //   } catch (e) {
  //     //TODO: Handle error
  //   }
  // };
  const handleClap = async () => {
    if (allBlogData) {
      try {
        await makeRequest(UPDATE_BLOG_DATA(data.id), { data: { claps: data.claps + 1 } });
        updateBlogData(
          {
            ...data,
            claps: data.claps + 1,
          },
          allBlogData,
          setAllBlogData,
        );
      } catch (e) {
        //TODO: Handle error
      }
    }
  };
  const handleLike = async () => {
    if (allBlogData) {
      try {
        await makeRequest(UPDATE_BLOG_DATA(data.id), { data: { liked: !data.liked } });
        updateBlogData(
          {
            ...data,
            liked: !data.liked,
          },
          allBlogData,
          setAllBlogData,
        );
      } catch (e) {
        //TODO: Handle error
      }
    }
  };
  return (
    <div className='card' id={String(index)}>
      <div className='cardImage'>
        <img src={data.image} alt='CardImage' data-testid='titeImage' />
      </div>
      <div className='dateTime'>
        <p>{getFormattedDateFromUtcDate(data.date)}</p>
        <p>{data.readingTime}</p>
      </div>
      <div className='cardTitle'>
        <p> {data.title} </p>
      </div>
      <br />
      <div className='cardDescription'>
        <p>{data.description}</p>
      </div>
      <hr />
      <div className='cardFooter'>
        <div className='clapCounter'>
          <img data-testid='clapper' src={clap} onClick={handleClap} alt='clap-image' />
          <p data-testid='clap-num'>{data.claps}</p>
        </div>
        <img data-testid='liker' src={data.liked ? heartRed : heartBlack} onClick={handleLike} />
      </div>
    </div>
  );
}
