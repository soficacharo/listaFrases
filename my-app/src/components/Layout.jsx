import React from "react";
import { Link, Outlet } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Layout = () => {
    return (
        <React.Fragment>
            <Navbar expand="lg" className="bg-body-tertiary fixed-top">
                <Container>
                    <Navbar.Brand className="espacio">Prueba</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Link to={' '} className='linkEstilo espacio posicionCorrecta'>Home</Link>
                            <Link to={'/GoalInput'} className='linkEstilo posicionCorrecta espacio'>GoalInput</Link>
                            <Link to={'/Instrucciones'} className='linkEstilo posicionCorrecta espacio'>Instrucciones</Link>
                            <Link to={'/Switches'} className='linkEstilo posicionCorrecta espacio'>Cambiar Color</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Outlet />
        </React.Fragment>
    )
}

export default Layout