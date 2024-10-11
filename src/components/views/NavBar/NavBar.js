import styles from './NavBar.module.scss';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Container } from 'react-bootstrap';
import { NavLink, useLocation } from 'react-router-dom';
import clsx from 'clsx';

const NavBar = () => {
    const location = useLocation();
    return (
        <Navbar className={clsx(styles.navbar, "bg-body-tertiary")}>
        <Container>
          <Navbar.Brand><span className={styles.logo}>Waiters.app</span></Navbar.Brand>
          <Nav className={styles.nav}>
            <Nav.Link className={clsx(styles.link, location.pathname==="/"&& styles.linkActive)} as={NavLink} to="/">Home</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    );
  };

  export default NavBar;