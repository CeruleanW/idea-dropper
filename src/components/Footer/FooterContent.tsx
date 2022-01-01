import React from "react";
import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  footerLink: {
    "&:visited": {
      color: "blueviolet",
    },
  },
});

const owner = 'Asher Yang';
const url = 'https://github.com/CeruleanW';

export default function FooterContent() {
  const classes = useStyles();
  return (
      <Box className={classes.footer} justifyContent={"center"}>
        <Typography align='center' >
          Copyright &copy; 2021 Developed with ❤️ by {' '}
          <a className={classes.footerLink}
            href={url}
          >
           {owner}
          </a>
        </Typography>
      </Box>
  );
}
