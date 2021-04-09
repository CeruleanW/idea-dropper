import React, { useState } from 'react';
import Footer from './Footer/Footer';
import { Nav, SideMenu } from '../pages/index';

export function FrameWrapper(props) {
  const { title } = props;
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  return (
    <>
      <header className='flex flex-col min-h-screen justify-center items-center'>
        <Nav
          isMenuOpened={isMenuOpened}
          setIsMenuOpened={setIsMenuOpened}
          title={title} />
        <div className='flex flex-auto w-full'>
          {isMenuOpened ? <SideMenu /> : null}
          {props.children}
        </div>
        <Footer />
      </header>
    </>
  );
}
