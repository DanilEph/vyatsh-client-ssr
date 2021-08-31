import SocialMedia from "./SocialMedia";
import MainMenu from "./MainMenu";
import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import MoreIcon from "@material-ui/icons/MoreVert";
import Image from "next/image";
import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Grid,
  Icon,
  Menu,
  MenuItem,
} from "@material-ui/core";
import { Divider } from "@material-ui/core";
import theme from "../themes/theme";
import { makeStyles, alpha } from "@material-ui/core";
import { Paper } from "@material-ui/core";
import Footer from "./Footer";

//Logo
import logo from "../public/img/logo.svg";
import fullLogo from "../public/img/full-logo.svg";

const Header = () => {
  const useStyles = makeStyles(() => ({
    grow: {
      flexGrow: 1,
    },
    root: {
      paddingBottom: theme.spacing(1)
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      display: "none",
      [theme.breakpoints.up("sm")]: {
        display: "block",
      },
    },
    search: {
      position: "relative",
      borderRadius: theme.shape.borderRadius,
      backgroundColor: alpha(theme.palette.common.white, 0.15),
      "&:hover": {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
      },
      marginRight: theme.spacing(2),
      marginLeft: 0,
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(3),
        width: "auto",
      },
      display: "flex",
      flexDirection: "row-reverse",
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: "100%",
      position: "absolute",
      pointerEvents: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    inputRoot: {
      color: theme.palette.secondary,
    },
    inputInput: {
      padding: theme.spacing(1, 0, 1, 2),
      // vertical padding + font size from searchIcon
      paddingRight: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("md")]: {
        width: "20ch",
      },
    },
    sectionDesktop: {
      display: "none",
      [theme.breakpoints.up("md")]: {
        display: "flex",
      },
    },
    sectionMobile: {
      display: "flex",
      [theme.breakpoints.up("md")]: {
        display: "none",
      },
    },

    //Header -->
    fullLogo: {
      margin: theme.spacing(0, 2, 0, 0),
      width: 150,
    },
    miniHeader: {
      minHeight: "10px",
      display: "flexbox",
      justifyContent: "space-between",
    },
    miniText: {
      fontSize: theme.spacing(1.6),
      fontStyle: "italic",
      margin: 0,
    },
    headerMenu: {
      flexGrow: 1,
      display: "flex",
      justifyContent: "center",
    },
    headerLogo: {
      width: 80,
    },
    headerTital: {
      fontSize: theme.spacing(4),
      textTransform: "uppercase",
      marginLeft: theme.spacing(2),
    },
    headerDivider: {
      height: theme.spacing(0.15),
      backgroundColor: theme.palette.secondary.light,
      marginBottom: theme.spacing(1),
    },
    toolbarFix: {
      padding: 0,
    },
    // <--
  }));
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <>
      <AppBar position="static" className={classes.root}>
        <Container maxWidth="xl">
          <Toolbar className={`${classes.miniHeader} ${classes.toolbarFix}`}>
            <Grid>
              <Typography color="secondary" className={classes.miniText}>
                тел: +7-961-444-44-70
              </Typography>
            </Grid>
            <SocialMedia />
            <Grid>
              <Typography color="secondary" className={classes.miniText}>
                danileph@bk.ru
              </Typography>
            </Grid>
          </Toolbar>
          <Divider className={classes.headerDivider} />
          <Toolbar className={classes.toolbarFix}>
            <div className={classes.headerLogo}>
              <Image src={logo} />
            </div>
            <Typography color="secondary" className={classes.headerTital}>
              Vyatsh
            </Typography>
            <div className={classes.headerMenu}>
              <MainMenu />
            </div>

            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon color={"secondary"} />
              </div>
              <InputBase
                placeholder="Поиск..."
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ "aria-label": "search" }}
              />
            </div>
            <div className={classes.sectionDesktop}>
              <IconButton
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                color="secondary"
              >
                <ShoppingCartIcon />
              </IconButton>
              <IconButton
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="secondary"
              >
                <AccountCircle />
              </IconButton>
            </div>
            <div className={classes.sectionMobile}>
              <IconButton
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </div>
          </Toolbar>
        </Container>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </>
  );
};

export default Header;
