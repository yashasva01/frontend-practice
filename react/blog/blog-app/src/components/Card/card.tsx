import * as React from 'react';
//import imagecard from '../../Assets/Images/abstract.png';
export default function Card({ key, data }) {
  const {
    image,
    date,
    readingTime,
    title,
    description,
    claps,
    liked,
    clapImg,
    likedHeart,
    unlikedHeart,
  } = data;

  const [isliked, setLiked] = React.useState(liked);
  const [clapNum, setClapNum] = React.useState(claps);

  function handleLike() {
    setLiked(!isliked);
  }

  function setLike() {
    return isliked ? likedHeart : unlikedHeart;
  }

  function handleclap() {
    setClapNum(clapNum + 1);
  }

  return (
    <div className='card' id={key}>
      <div className='cardImage'>
        <img src={image} alt='Card Image' />
      </div>
      <div className='dateTime'>
        <p>{date}</p>
        <p>{readingTime}</p>
      </div>
      <div className='cardTitle'>
        <p> {title} </p>
      </div>
      <br />
      <div className='cardDescription'>
        <p>{description}</p>
      </div>
      <hr />
      <div className='cardFooter'>
        <div className='clapCounter'>
          <img src={clapImg} onClick={handleclap} />
          <p>{clapNum}</p>
        </div>
        <img src={setLike()} onClick={handleLike} />
      </div>
    </div>
  );
}
