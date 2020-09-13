import * as React from "react";
import { useRouter } from "next/router";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Logo from "../../assets/logo";
import Search from "../../assets/search";
import styles from "./styles.module.css";

const PageNavBar = () => {
  const router = useRouter();

  return (
    // <NavBar>
    //   <NavBar.Brand>
    //     <Logo />
    //     &nbsp;SKILL TREE
    //   </NavBar.Brand>
    // </NavBar>
    <Navbar expand="md">
      <Navbar.Brand onClick={() => router.push("/")}>
        <Logo />
        &nbsp;SKILL TREE
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link className="mr-md-4" onClick={() => router.push("/")}>
            HOME
          </Nav.Link>
          <NavDropdown
            title="ROLES"
            id="basic-nav-dropdown"
            className={`mr-md-4 ${styles.navbarDropDown}`}
            renderMenuOnMount
          >
            <NavDropdown.Item
              onClick={() =>
                router.push("/roles/[role]", "/roles/product-manager")
              }
            >
              Product Manager
            </NavDropdown.Item>
            <NavDropdown.Item
              onClick={() =>
                router.push("/roles/[role]", "/roles/frontend-developer")
              }
            >
              Front-end Developer
            </NavDropdown.Item>
            <NavDropdown.Item
              onClick={() => router.push("/roles/[role]", "/roles/ux-designer")}
            >
              UX Designer
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link className="mr-md-4" onClick={() => router.push("/about")}>
            ABOUT
          </Nav.Link>
        </Nav>
        <form
          className={styles.searchWrapper}
          onSubmit={(e) => e.preventDefault()}
        >
          <input type="text" />
          <Search className={styles.search} />
        </form>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default PageNavBar;
