import React, { useState } from 'react';
import useSWR from 'swr';
import { FrameWrapper } from '../components/FrameWrapper';
import Head from 'next/head';
import { APPNAME } from '../CONSTANTS';
import CardBox from '../components/CardBox';

function CardContent() {}
function SaveButton() {}
function CardContent() {}


function DisplayedCard(props) {
  const { data } = props;
  const [isEditing, setIsEditing] = useState(false);

  return (
    <>
      <EditIcon />
      <DeleteIcion />
      <CardContent />
      {isEditing ? (
        <>
          <SaveButton /> <CancelButton />
        </>
      ) : (
        <CloseButton />
      )}
    </>
  );
}

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
      <FrameWrapper title='Boxes'>
        <main>
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
        <Tabs>
          <BoxTab />
          <AddCardTab />
          <BoardTab />
        </Tabs>
      </FrameWrapper>
      {isDrawnCardDisplayed ? <DisplayedCard data={drawnCard} /> : null}
    </>
  );
}
