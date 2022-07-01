import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import NavBarIcon from "../../assets/NavBarIcon";
import { logOut } from "../../store/reducers/AuthSlice";
import { useAppSelector } from "../../store/store";
import { INavLinks } from "../../types/INavLink";
import "./NavBar.css";

const navLinks: INavLinks[] = [
  {
    id: 1,
    path: "/",
    title: "Home",
  },
  {
    id: 2,
    path: "/users",
    title: "Users",
  },
  {
    id: 3,
    path: "/todos",
    title: "Todos",
  },
];

const NavBar = () => {
  const { isAuthed } = useAppSelector((store) => store.AuthReducer);
  const dispatch = useDispatch();
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  const createNavLink = (link: INavLinks) => {
    return (
      <li>
        <NavLink
          key={link.id}
          to={link.path}
          onClick={() => setIsNavExpanded(false)}
        >
          {link.title}
        </NavLink>
      </li>
    );
  };

  return (
    <nav className="navigation">
      <NavLink to="/" className="brand-name">
        React App
      </NavLink>
      <button
        className="hamburger"
        onClick={() => setIsNavExpanded((prev) => !prev)}
      >
        <NavBarIcon />
      </button>
      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      >
        <ul>
          {isAuthed && navLinks.map((link) => createNavLink(link))}
          {isAuthed && (
            <li>
              <NavLink to={"/auth"} onClick={() => dispatch(logOut())}>
                Log Out
              </NavLink>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
