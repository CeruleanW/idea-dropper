import React from 'react';
import CardBox from '../../components/CardBox';
import { Button, Grid, Box, Typography } from '@material-ui/core';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import { connectToDatabase } from '../../util/mongodb';

// Fetch data on each request
export async function getServerSideProps(context) {
  const { client } = await connectToDatabase();

  const isConnected = await client.isConnected();

  //fetch data of a user
  const boxes = null;

  return {
    props: { isConnected, boxes },
  };
}

//Home page for a user after logged-in
export default function UserHome(props) {
  const {isConnected, boxes} = props;
  
  return (
    <div>
      {isConnected ? null : (
        <h2 className='subtitle'>
          You are NOT connected to MongoDB. Check the <code>README.md</code> for
          instructions.
        </h2>
      )}
      <CardBox />

      <Box display='flex' justifyContent='center'>
        <AddCircleOutlineIcon />
      </Box>
    </div>
  );
}


