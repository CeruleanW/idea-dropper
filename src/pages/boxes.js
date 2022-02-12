import { DisplayedCard } from './../components/DisplayedCard';
import React, { useState } from 'react';
import useSWR from 'swr';
import { FrameWrapper } from '../components/FrameWrapper';
import Head from 'next/head';
import { APPNAME } from '../lib/CONSTANTS';
import CardBox from '../components/CardBox';


export default function boxes(props) {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error } = useSWR('/api/box/all', fetcher);

  const [isDrawnCardDisplayed, setIsDrawnCardDisplayed] = useState(false);
  const [drawnCard, setDrawnCard] = useState(null);

  return (
    <>
      <Head>
        <title key='title'>User Page of {APPNAME}</title>
        <meta
          property='og:title'
          content={'User Page of' + APPNAME}
          key='meta-title'
        />
      </Head>
      <FrameWrapper title='Boxes' activeTab='box'>
        {/* <div className='mt-4 flex justify-center items-center'></div> */}
        <main className='max-w-full flex-auto flex flex-col justify-center'>
          {error ? <div>Error: failed to load</div> : null}
          {data ? (
            <>
              {data.map((box, index) => (
                <CardBox key={`box-${index}`} data={box} />
              ))}
            </>
          ) : (
            <div>loading...</div>
          )}
        </main>
      </FrameWrapper>
      {isDrawnCardDisplayed ? <DisplayedCard data={drawnCard} /> : null}
    </>
  );
}
