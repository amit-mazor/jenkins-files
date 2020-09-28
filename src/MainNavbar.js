import React from 'react';
import logo from './nxrm-logo.png';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

class MainNavbar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            appName: "Nexus Uploader",
        };
    }

    render() {
        return(
            <Navbar bg="white">
                <Navbar.Brand href="/">
                    <img
                        alt=""
                        src={logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    {this.state.appName}
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Nav className="mr-sm-2">
                    <Nav.Link href='/upload'>UPLOAD</Nav.Link>
                    <Nav.Link href='/rest-api'>REST API</Nav.Link>
                </Nav>
            </Navbar>
        );
    }
}

export default MainNavbar;