import React from 'react';
import DisplayedCard from '../components/DisplayedCard';
import 'tailwindcss/tailwind.css';

export default {
  component: DisplayedCard,
  title: 'DisplayedCard',
};

const Template = (args) => <Tab {...args} />;

export const Card1 = Template.bind({});
Card1.args = {
  data: {
    _id: { $oid: '6052c9ad1b5100990457ef4e' },
    title: 'Once upon a time...',
    'created-date': { $date: { $numberLong: '1615779117132' } },
    'last-updated-date': { $date: { $numberLong: '1615779117132' } },
    'last-access-date': { $date: { $numberLong: '1615779117132' } },
    owner: { $oid: '603449406a2ed67286c5d810' },
    content: 'We had a hero',
  },
};

export const Card2 = Template.bind({});
Card2.args = {
  data: {
    _id: { $oid: '6070781ea93c42e5e4b87bb7' },
    title: 'DND',
    'created-date': { $date: { $numberLong: '1616038317132' } },
    'last-updated-date': { $date: { $numberLong: '1616038317132' } },
    'last-access-date': { $date: { $numberLong: '1616038317132' } },
    owner: { $oid: '603449406a2ed67286c5d810' },
    content: 'We had another hero',
  },
};

export const Card3 = Template.bind({});
Card3.args = {
};
