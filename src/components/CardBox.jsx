import React, { useState } from 'react';
// import BoxSvg from './box.svg';
import Image from 'next/image';
import { Menu, MenuItem } from '@material-ui/core';

export default function CardBox(props) {
  const [anchorEl, setAnchorEl] = useState(null);
  const {boxId} = props;
  const isEmpty = "";

  const handleClick = (event) => {
    //open a menu
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDraw = () => {
    //retrieve a card
    //display the card
  };
  const handleShake = () => {};
  const handleDelete = () => {
    //confirm before proceed
  };

  return (
    <div>
      <Image
        src={'/box.svg'}
        alt='Box'
        width={250}
        height={250}
        onClick={handleClick}
      />
      <Menu
        id='simple-menu'
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleDraw}>Draw</MenuItem>
        <MenuItem onClick={handleShake}>Shake</MenuItem>
        <MenuItem onClick={handleDelete}>Delete</MenuItem>
      </Menu>
    </div>
  );
}
