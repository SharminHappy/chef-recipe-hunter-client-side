import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">
                        <span className='fw-semibold'>K-</span><span style={{ color: 'greenyellow' }} className='fw-semibold'>RESTO</span>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto gap-3">
                            <Link to='/home' className='text-decoration-none text-secondary fw-semibold'>Home</Link>
                            <Link to='/blog' className='text-decoration-none text-secondary fw-semibold'>Blog</Link>
                        </Nav>
                        <Nav>
                            <Button style={{ backgroundColor: 'greenyellow', border: 'none' }} className='fw-semibold px-4'>
                                <Link to='/login'>Login</Link>
                            </Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;