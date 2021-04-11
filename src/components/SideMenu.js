import React from 'react';
import { Menu } from 'semantic-ui-react';
import {background} from '../styles/palette';
import styled from 'styled-components';

const Aside = styled.aside`
  border-right: 1px solid #ccc;
  background: ${background};
`;

export function SideMenu() {
  return (
    <Aside id='sidebar' className='z-10 overflow-auto flex-initial'>
      <Menu fluid vertical tabular className='h-full'>
        <Menu.Item id='search' name='search'></Menu.Item>
        <Menu.Item id='settings' name='settings'></Menu.Item>
        <Menu.Item id='import' name='import'></Menu.Item>
        <Menu.Item id='trash' name='trash'></Menu.Item>
        <Menu.Item id='help' name='help'></Menu.Item>
      </Menu>
    </Aside>
  );
}
