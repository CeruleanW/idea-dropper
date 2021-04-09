import React from 'react';
import CardBox from '../components/CardBox';
import 'tailwindcss/tailwind.css';

export default {
  component: CardBox,
  title: 'CardBox',
};

const Template = (args) => <CardBox {...args} />;

export const Box1 = Template.bind({});
Box1.args = {
  data: {
    _id: { $oid: '6024623f9eee9cc851375584' },
    name: 'Box1',
    tags: [],
    'created-date': '2021-02-10',
    'last-updated-date': { $date: { $numberLong: '1612933200000' } },
    'last-access-date': { $date: { $numberLong: '1612933200000' } },
    size: { $numberInt: '1' },
    cards: [
      { $oid: '6052c9ad1b5100990457ef4e' },
      { $oid: '6070781ea93c42e5e4b87bb7' },
      { $oid: '60707841a93c42e5e4b87bb8' },
    ],
    owner: { $oid: '602465fc9eee9cc851375586' },
    sharedWith: { $oid: '603449312aff097eabf3cf3c' },
    drawSequence: [{ $numberInt: '0' }],
  },
};
