// import Head from 'next/head';
import React, { useState } from 'react';
import Footer from '../components/Footer/Footer';
import Link from 'next/link';
import { APPNAME } from '../CONSTANTS';
import palette from '../styles/palette';
import { Button, Menu, Segment } from 'semantic-ui-react';
import { useSession, signIn, signOut, signout } from 'next-auth/client';

export default function Index() {
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const [session, loading] = useSession();

  function handleLogin() {}

  return (
    <div className='flex flex-col min-h-screen justify-center items-center'>
      <nav
        className='w-full flex p-4'
        style={{ backgroundColor: palette.primary }}
      >
        <i
          className='fas fa-bars flex-initial text-2xl'
          id='bar-icon'
          onClick={() => setIsMenuOpened(!isMenuOpened)}
        ></i>
        <p className='flex-auto text-center text-2xl'>HOME</p>
        <i
          className='fas fa-ellipsis-h flex-initial text-2xl'
          id='ellipsis-icon'
        ></i>
      </nav>
      <div className='flex flex-auto w-full'>
        {isMenuOpened ? (
          <aside id='sidebar' className='flex-initial'>
            <Menu fluid vertical tabular>
              <Menu.Item id='search' name='search'></Menu.Item>
              <Menu.Item id='settings' name='settings'></Menu.Item>
              <Menu.Item id='import' name='import'></Menu.Item>
              <Menu.Item id='trash' name='trash'></Menu.Item>
            </Menu>
          </aside>
        ) : null}
        <main className='flex-auto'>
          <header>
            <h1 className='title'>{APPNAME}</h1>
            <div className='m-auto'>
              <p>Drop your ideas in the box</p>
              <p>Draw your ideas for inspiration </p>
            </div>
          </header>
          <div className='mt-4'>
            {session ? (
              <>
                <Link href={`/user/${encodeURIComponent(session.user.email)}`}>
                  <Button>Go to User Page</Button>
                </Link>
                <Button onClick={() => signout()}>Logout</Button>
              </>
            ) : (
              <>
                <Button onClick={() => signIn()}>Login</Button>
                <Link href='/signup'>
                  <Button>Sign up</Button>
                </Link>
              </>
            )}
          </div>
        </main>
      </div>
      <Footer />

      <style jsx>{`
        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .subtitle {
          font-size: 2rem;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  );
}
