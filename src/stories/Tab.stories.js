import React from 'react';
import Tab from '../components/Tab';

import 'tailwindcss/tailwind.css';

export default {
  component: Tab,
  title: 'Tab',
};

const Template = (args) => <Tab {...args} />;

export const Tab1 = Template.bind({});
Tab1.args = {
  type: 'box',
};

export const Tab2 = Template.bind({});
Tab2.args = {
  type: 'add',
};

export const Tab3 = Template.bind({});
Tab3.args = {
  type: 'board',
};

export const Tab2Active = Template.bind({});
Tab2Active.args = {
  type: 'add',
  active: true,
  text: 'changed text'
};