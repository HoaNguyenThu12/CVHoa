import React from 'react';
import { Navbar, Nav, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useDarkMode } from './DarkModeContext';

export default function Header() {
    const { isDarkMode, toggleDarkMode } = useDarkMode();

    return (
        <header className={`top-area app ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>

            <Navbar collapseOnSelect expand="lg" className="navbar-default bootsnav navbar-fixed dark no-background">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        My Profile
                    </Navbar.Brand>
                    <Form className="ml-lg-3">
                        <Form.Check
                            type="switch"
                            id="flexSwitchCheckDefault"
                            label="DarkMode"
                            checked={isDarkMode}
                            onChange={toggleDarkMode}
                            className="custom-switch"
                        />
                    </Form>
                    <Navbar.Toggle aria-controls="navbar-menu">
                        <i className="fa fa-bars"></i>
                    </Navbar.Toggle>

                    <Navbar.Collapse id="navbar-menu" className="menu-ui-design">
                        <Nav className="ml-auto" data-in="fadeInDown" data-out="fadeOutUp">
                            <Nav.Link as={Link} to="#" className="smooth-menu active"></Nav.Link>
                            <Nav.Link as={Link} to="#aboutme" className="smooth-menu">
                                About Me
                            </Nav.Link>
                            <Nav.Link as={Link} to="#skill" className="smooth-menu">
                                Skills
                            </Nav.Link>
                            <Nav.Link as={Link} to="#education" className="smooth-menu">
                                Education
                            </Nav.Link>
                            <Nav.Link as={Link} to="#experience" className="smooth-menu">
                                Experience
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
}
