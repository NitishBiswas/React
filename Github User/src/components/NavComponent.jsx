import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { VscGithub } from 'react-icons/vsc'
import { NavDropdown } from 'react-bootstrap';
import { MdDarkMode } from 'react-icons/md'
import { CiLight } from 'react-icons/ci';
import { CgDarkMode } from 'react-icons/cg';
import '../App.css';

const NavComponent = ({ mode, changeMode }) => {


    return (
        <Navbar bg={mode ? "dark" : "muted"} variant={mode ? "dark" : "light"} style={mode ? { boxShadow: '0px 1px 3px 0px #ffff' } : { boxShadow: '0px 1px 3px 0px #000000' }} expand="lg">
            <Container>
                <Navbar.Brand as={Link} to='/github-users' className='align-items-center'>
                    <VscGithub size={30} className='mx-2 align-self-center' />
                    <span>GitHub Users</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
                    <Nav>
                        <Nav.Link as={Link} to='/github-users'>Home</Nav.Link>
                        <Nav.Link as={Link} to='/github-users/favourites'>Favourites</Nav.Link>
                    </Nav>
                    <NavDropdown title="Theme" id="basic-nav-dropdown" className={mode ? 'dropdown-bg' : ''} style={mode ? { color: '#bfbfbf' } : { color: '#838485' }}>
                        <NavDropdown.Item onClick={() => changeMode(window.matchMedia('(prefers-color-scheme: dark)').matches ? true : false)}><CgDarkMode size={20} /> Default OS</NavDropdown.Item>
                        <NavDropdown.Item onClick={() => changeMode(true)}>
                            <MdDarkMode size={20} /> Dark
                        </NavDropdown.Item>
                        <NavDropdown.Item onClick={() => changeMode(false)}><CiLight size={20} /> Light</NavDropdown.Item>
                    </NavDropdown>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavComponent