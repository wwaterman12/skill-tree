import * as React from "react";
import BootStrapNavBar from "react-bootstrap/navbar";
import Logo from "../../assets/logo";

const NavBar = () => (
  <BootStrapNavBar>
    <BootStrapNavBar.Brand>
      <Logo />
      &nbsp;SKILL TREE
    </BootStrapNavBar.Brand>
  </BootStrapNavBar>
);

export default NavBar;
