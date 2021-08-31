import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MoreIcon from "@material-ui/icons/MoreVert";
import Head from "next/head";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Image from "next/image";
import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Grid,
  Icon,
} from "@material-ui/core";
import { Divider } from "@material-ui/core";
import theme from "../themes/theme";
import { makeStyles, alpha } from "@material-ui/core";
import { Paper } from "@material-ui/core";
import Footer from './Footer';
import Header from "./Header";

const useStyles = makeStyles((theme) => ({
  contentLayout: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
    minHeight: "calc(100vh - 139px)",
  },

}));

////////////////////////////////////////////////

export default function MainLayout({ children }) {
  const classes = useStyles();

  return (
    <>
      <div className={classes.grow}>
      
      <Header />
        <Container maxWidth="xl" className={classes.contentLayout}>
          {children}
        </Container>
        <Footer />
        
      </div>
    </>
  );
}
