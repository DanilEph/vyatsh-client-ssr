import React from "react";
import { makeStyles, Grid, IconButton, Icon } from "@material-ui/core";
import Image from "next/image";

//Image social media
import vk from "../public/img/social/vk.svg";
import odnoklassniki from "../public/img/social/odnoklassniki.svg";
import telegram from "../public/img/social/telegram.svg";
import youtube from "../public/img/social/youtube.svg";
import instagram from "../public/img/social/instagram.svg";


const SocialMedia = ({ size = "small" }) => {
  const useStyles = makeStyles((theme) => ({
    headerIcon: {
      fontSize: size == "small" ? 17 : null,
    },
    miniIconWrapp: {
      '& > *': {
        width: 10,
        height: 10,
        marginRight: theme.spacing(2),
        marginBottom: theme.spacing(0.3),
        marginTop: theme.spacing(0.3)
      }
    }
  }));
  const classes = useStyles();

  return (
    <Grid className={classes.miniIconWrapp}>
      <IconButton>
        <Icon fontSize={size} className={classes.headerIcon}>
          <Image src={vk} />
        </Icon>
      </IconButton>
      <IconButton>
        <Icon fontSize={size} className={classes.headerIcon}>
          <Image src={instagram} />
        </Icon>
      </IconButton>
      <IconButton>
        <Icon fontSize={size} className={classes.headerIcon}>
          <Image src={odnoklassniki} />
        </Icon>
      </IconButton>
      <IconButton>
        <Icon fontSize={size} className={classes.headerIcon}>
          <Image src={youtube} />
        </Icon>
      </IconButton>
      <IconButton>
        <Icon fontSize={size} className={classes.headerIcon}>
          <Image src={telegram} />
        </Icon>
      </IconButton>
    </Grid>
  );
};

export default SocialMedia;



