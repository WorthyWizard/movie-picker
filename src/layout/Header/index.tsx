import {
  MdAccountCircle,
  MdFavorite,
  MdFavoriteBorder,
  MdOutlineAccountCircle,
} from "react-icons/md";
import { NavLink } from "react-router-dom";
import { IconButton } from "@mui/material";

import { useAuthentication } from "@/features/firebase";

import s from "./styles.module.css";

export const Header = () => {
  const { isAuthenticated } = useAuthentication();

  const userAuth = (
    <>
      <nav>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? s.active : "")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/discover"
              className={({ isActive }) => (isActive ? s.active : "")}
            >
              Discover
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/search"
              className={({ isActive }) => (isActive ? s.active : "")}
            >
              Search
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className={s.HeaderUserBlock}>
        <div className={s.WatchlistIcon}>
          <NavLink to="/watchlist">
            {({ isActive }) => (
              <IconButton color="primary">
                {isActive ? (
                  <MdFavorite color="var(--accent)" />
                ) : (
                  <MdFavoriteBorder />
                )}
              </IconButton>
            )}
          </NavLink>
        </div>
        <div className={s.AccountIcon}>
          <NavLink to="/account">
            {({ isActive }) => (
              <IconButton color="primary">
                {isActive ? (
                  <MdAccountCircle color="var(--accent)" />
                ) : (
                  <MdOutlineAccountCircle />
                )}
              </IconButton>
            )}
          </NavLink>
        </div>
      </div>
    </>
  );

  return (
    <header className={`${s.Header} ${!isAuthenticated ? s.Guest : ""}`}>
      <div className={s.HeaderInner}>
        <div className={s.HeaderContent}>
          <h1 className={s.HeaderLogo}>
            <NavLink to="/">MoviePicker</NavLink>
          </h1>
          {isAuthenticated ? userAuth : ""}
        </div>
      </div>
    </header>
  );
};
