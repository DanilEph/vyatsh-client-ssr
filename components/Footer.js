import { makeStyles } from "@material-ui/core";
import theme from '../themes/theme';
import { Box, Container, Grid, Typography,  } from "@material-ui/core";
import Image from "next/image";
import SocialMedia from "./SocialMedia";
import MainMenu from "./MainMenu";

//Logo
import logo from "../public/img/logo.svg";

const useStyles = makeStyles((theme) => ({
  //Footer -->
  footer: {
    backgroundColor: theme.palette.primary.main,
    boxShadow: "0px -1px 7px 0px rgba(50, 50, 50, 0.5)",
  },
  footerContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(4, 0),
    "& > *": {
      margin: theme.spacing(2, 0),
    },
  },
  footerText: {
    textAlign: "center",
    "& > *": {
      fontStyle: "italic",
      fontSize: theme.spacing(1.8),
    },
  },
  footerLogo: {
    width: 160,
  },
  footerNumber: {
    fontSize: theme.spacing(3),
    fontStyle: "normal",
  },
  // <--
}));


const Footer = () => {
  const classes = useStyles();

  return (
    <Box className={classes.footer}>
      <Container className={classes.footerContainer} maxWidth="xl">
        <Grid className={classes.footerLogo}>
          <Image src={logo} />
        </Grid>
        <SocialMedia size="large" className={classes.footerSocMedia} />
        <Grid className={classes.footerText}>
          <Typography className={classes.footerNumber}>
            +7 (905) 447-41-70
          </Typography>
          <Typography>Бесплатная консультация по телефону</Typography>
        </Grid>
        <Grid className={classes.footerMainMenu}>
          <MainMenu />
        </Grid>
        <Grid className={classes.footerText}>
          <Typography>
            © Все данные зарегистрированы. Ставрополь, 2021.
          </Typography>
          <Typography>danileph@bk.ru</Typography>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;