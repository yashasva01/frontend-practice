import abstract from '../../Assets/Images/abstract.png';
import inspired from '../../Assets/Images/inspired.png';
import outdoor from '../../Assets/Images/outdoor.png';
import perfectArt from '../../Assets/Images/perfect-art.png';
import reason from '../../Assets/Images/reason.png';
import youngPainter from '../../Assets/Images/young-painters.png';
import imgClap from '../../Assets/Icons/clapping.svg';
import likedHeart from '../../Assets/Icons/heart-black.svg';
import unlikedHeart from '../../Assets/Icons/heart-red.svg';

export default function CardData() {
  return [
    {
      date: '2nd Januray, 2018',
      readingTime: '2 mins',
      title: 'The future of abstract art and the culture ...',
      description:
        'Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your...',
      claps: 10,
      liked: false,
      image: abstract,
      clapImg: imgClap,
      likedHeart: likedHeart,
      unlikedHeart: unlikedHeart,
    },
    {
      date: '31st Januray, 2018',
      readingTime: '1 min',
      title: 'How painting outdoors can transform your ',
      description:
        'Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your...',
      claps: 1,
      liked: true,
      image: outdoor,
      clapImg: imgClap,
      likedHeart: likedHeart,
      unlikedHeart: unlikedHeart,
    },
    {
      date: '20th March, 2018',
      readingTime: '2 mins',
      title: '10 young painters you need to know',
      description:
        'Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your...',
      claps: 15,
      liked: false,
      image: youngPainter,
      clapImg: imgClap,
      likedHeart: likedHeart,
      unlikedHeart: unlikedHeart,
    },
    {
      date: '22nd June, 2018',
      readingTime: '5 mins',
      title: 'Tips for creating the perfect art',
      description:
        'Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your...',
      claps: 11,
      liked: false,
      image: perfectArt,
      clapImg: imgClap,
      likedHeart: likedHeart,
      unlikedHeart: unlikedHeart,
    },
    {
      date: '4th Feburary, 2019',
      readingTime: '9 mins',
      title: 'Stay inspired: top artists blog ...',
      description:
        'Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your...',
      claps: 45,
      liked: true,
      image: inspired,
      clapImg: imgClap,
      likedHeart: likedHeart,
      unlikedHeart: unlikedHeart,
    },
    {
      date: '10th Januray, 2019',
      readingTime: '2 mins',
      title: '5 reasons why everyone should try an...',
      description:
        'Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your...',
      claps: 11,
      liked: false,
      image: reason,
      clapImg: imgClap,
      likedHeart: likedHeart,
      unlikedHeart: unlikedHeart,
    },
  ];
}
