import React from 'react';
import CardBox from '../../components/CardBox';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import { connectToDatabase } from '../../utils/mongodb';
import Head from 'next/head';
import { APPNAME } from '../../lib/CONSTANTS';

// fetch the user data for display
export async function getServerSideProps(context) {
  const { client } = await connectToDatabase();

  const isConnected = await client.isConnected();

  //fetch data of a user
  const boxes = {};

  return {
    props: { isConnected, boxes },
  };
}

//Home page for a user after logged-in
export default function UserHome(props) {
  const { isConnected, boxes } = props;

  return (
    <div>
      <Head>
        <title key='title'>User Page of {APPNAME}</title>
        <meta
          property='og:title'
          content={'User Page of' + APPNAME}
          key='meta-title'
        />
      </Head>
      <h1>User: somename</h1>
      {isConnected ? null : (
        <h2 className='subtitle'>
          You are NOT connected to MongoDB. Check the <code>README.md</code> for
          instructions.
        </h2>
      )}
      <CardBox />

      <div className='flex justify-center'>
          <AddCircleOutlineIcon />
      </div>
    </div>
  );
}
