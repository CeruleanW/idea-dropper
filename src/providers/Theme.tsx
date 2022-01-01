import React from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import { palette, font, size } from '../styles';

const theme: DefaultTheme = {
  palette,
  font,
  size
};


export default function Theme(props) {
  const { children } = props;
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
