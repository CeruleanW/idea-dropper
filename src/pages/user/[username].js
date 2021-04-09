import React from 'react';
import CardBox from '../../components/CardBox';
import { connectToDatabase } from '../../util/mongodb';
import Head from 'next/head';
import { APPNAME } from '../../CONSTANTS';

// fetch the user data for display
export async function getServerSideProps(context) {
  const { client } = await connectToDatabase();

  const isConnected = await client.isConnected();

  //fetch data of a user
  const boxes = null;

  return {
    props: { isConnected, boxes },
  };
}

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
      <header>
        <h1>User: somename</h1>
        {isConnected ? null : (
          <h2 className='subtitle'>
            You are NOT connected to MongoDB. Check the <code>README.md</code>{' '}
            for instructions.
          </h2>
        )}
      </header>
      <CardBox />

      <div className='flex justify-center'>
        {boxes.map((box, index) => (
          <CardBox key={`box-${index}`} data={box} />
        ))}
        <Tabs>
          <BoxTab/>
          <AddCardTab/>
          <BoardTab/>
        </Tabs>
      </div>
    </div>
  );
}
