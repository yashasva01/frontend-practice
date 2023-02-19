import * as React from 'react';
import Card from '../Card/card';
import cardData from './cardData';

export default function MainBody() {
  return (
    <div className='mainBody'>
      {cardData().map((data, key) => {
        console.log(data);
        return <Card key={key} data={data} />;
      })}
    </div>
  );
}
