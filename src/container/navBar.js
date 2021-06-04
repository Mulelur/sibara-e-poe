import React, { useState } from "react";
import { Link } from "react-router-dom";
import { NavBar } from "../components";
import { NavData } from "../data/navData";
import { MenuIcon } from "../icons/icons";

export default function NavBarContainer() {
  const [toggel, setToggel] = useState(false);
  return (
    <NavBar>
      <NavBar.Container>
        <NavBar.Link>
          {/* <NavBar.Image  /> */}
          <NavBar.Logo>Sibara</NavBar.Logo>
        </NavBar.Link>
        <NavBar.Menu>
          <MenuIcon />
        </NavBar.Menu>
        <NavBar.List>
          {NavData.map((item) => {
            return (
              !item.type && (
                <NavBar.ListItem>
                  <Link to={item.path}>{item.title}</Link>
                </NavBar.ListItem>
              )
            );
          })}
          <NavBar.ListItem
            onClick={(e) => {
              setToggel(!toggel);
            }}
          >
            More
          </NavBar.ListItem>
          {toggel && (
            <NavBar.DropDown>
              {NavData.map((item) => {
                return (
                  item.type === "more" && (
                    <NavBar.ListItem>
                      <Link to={item.path}>{item.title}</Link>
                    </NavBar.ListItem>
                  )
                );
              })}
            </NavBar.DropDown>
          )}
        </NavBar.List>
      </NavBar.Container>
    </NavBar>
  );
}
