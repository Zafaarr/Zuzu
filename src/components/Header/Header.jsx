import style from "./Header.module.scss";
import headerBar from "../imgs/menu.png";
import logo from "../imgs/Logo.png";
import login from "../imgs/Login.png";
import korzina from "../imgs/Korzina.png";
import language from "../imgs/Language.png";
import profil from "../imgs/Profil.png";
import { Link, NavLink } from "react-router-dom";
import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

export function Header() {
  const linkClass = ({ isActive }) =>
    isActive ? `${style.footer__link} ${style.active}` : style.footer__link;

  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 291 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {[
          <Link className={style.menu} to="/">
            Menu
          </Link>,
          <NavLink to="/branches" className={linkClass}>
            Филиалы
          </NavLink>,
          <NavLink to="/we" className={linkClass}>
            О нас
          </NavLink>,
          <NavLink to="/contacts" className={linkClass}>
            Контакты
          </NavLink>,
        ].map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );

  return (
    <>
      <header className={style.header}>
        <div className={style.header__container}>
          <div className={style.header__left}>
            <div className={style.headerBar}>
              {["left"].map((anchor) => (
                <React.Fragment key={anchor}>
                  <Button onClick={toggleDrawer(anchor, true)}>
                    <img src={headerBar} alt="headerBar" />
                  </Button>
                  <Drawer
                    anchor={anchor}
                    open={state[anchor]}
                    onClose={toggleDrawer(anchor, false)}
                  >
                    {list(anchor)}
                  </Drawer>
                </React.Fragment>
              ))}
            </div>
            <Link to="/">
              <img src={logo} className={style.headerLogo} alt="logo" />
            </Link>
            <Link to="map">
            <img src={login} className={style.header__login} alt="login" />
            </Link>
          </div>
          <div className={style.header__right}>
            <div className={style.header__korzina}>
              <Link to="/korzina">
                <img
                  src={korzina}
                  className={style.header__korzina}
                  alt="korzina"
                />
              </Link>
            </div>
            <div className={style.header__language}>
              <img src={language} alt="language" />
            </div>
            <div className={style.header__profil}>
              <img src={profil} alt="profil" />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
