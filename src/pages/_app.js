import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../theme';
import '../styles/normalize.css';
import '../styles/globals.css';
import 'semantic-ui-css/semantic.min.css';
import { APPNAME } from '../CONSTANTS';
import { Provider as ReduxProvider } from 'react-redux';
import { useStore } from '../store';
import { Provider as AuthProvider} from 'next-auth/client'

export default function MyApp(props) {
  const { Component, pageProps } = props;
  
  const store = useStore(pageProps.initialReduxState)

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <Head>
        <title key='title'>{APPNAME}</title>
        <meta
          property='og:title'
          content={APPNAME + '- drop your ideas and forget them'}
          key='meta-title'
        />
        <meta
          name='description'
          content={
            APPNAME +
            'is a web application for managing non-important information. It is like a online time capsule without a specific opening time.'
          }
        ></meta>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <ReduxProvider store={store}>
        <ThemeProvider theme={theme}>
          <AuthProvider session={pageProps.session}>
            <Component {...pageProps} />
          </AuthProvider>
        </ThemeProvider>
      </ReduxProvider>
    </>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
