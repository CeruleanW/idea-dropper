import React, { useState } from 'react';
// import BoxSvg from './box.svg';
import Image from 'next/image';
import { Box, Menu, MenuItem } from '@material-ui/core';

export default function CardBox() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    //open a menu
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDraw = () => {};
  const handleShake = () => {};
  const handleDelete = () => {
    //confirm before proceed
  };

  return (
    <Box>
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
    </Box>
  );
}
