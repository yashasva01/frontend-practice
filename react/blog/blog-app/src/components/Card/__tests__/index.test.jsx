import * as React from 'react';
import Card from '../card';
import { fireEvent, render, waitFor } from '@testing-library/react';
//import CardData from '../../MainBody/cardData';

const mockProps = {
  id: 2,
  date: '2023-01-01T07:46:22.001Z',
  reading_time: '1 min',
  title: 'How painting outdoors can transform your ',
  description:
    'Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your readers for more. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc egestas laoreet nibh euismod vestibulum.',
  claps: 1,
  liked: true,
  image: 'https://i.ibb.co/8cDkQkS/outdoor.png',
};

jest.mock('../../../utils/MakeRequest', () => () => {
  return Promise.resolve(true);
});

describe('Card ', () => {
  it('should increade the number of claps when clap icon is clicked', async () => {
    const { queryByTestId } = render(<Card key={mockProps.id} data={mockProps} />);
    const clapper = queryByTestId('clapper');
    fireEvent.click(clapper);
    await waitFor(() => {
      expect(queryByTestId('clap-num')).toHaveTextContent(mockProps.claps + 1);
    });
  });

  it('should change into red heart when clicked on like button', async () => {
    const { queryByTestId } = render(<Card key={mockProps.id} data={mockProps} />);
    const liker = queryByTestId('liker');
    fireEvent.click(liker);
    await waitFor(() => {
      expect(liker).toHaveAttribute('src', 'heart-black.svg');
    });
  });

  // it('shourld render correctly', () => {
  //   const { asFragment } = render(<Card data={card} />);
  //   expect(asFragment()).toMatchSnapshot();
  // });

  // it('should render the title image', () => {
  //   const { queryByAltText } = render(<Card data={card} />);
  //   expect(queryByAltText('alt', 'CardImage'));
  // });
});
