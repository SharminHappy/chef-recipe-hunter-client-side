import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import { FaUserCircle } from 'react-icons/fa';

const Header = () => {

    const { user,logOut } = useContext(AuthContext);
    const handleLogOut=()=>{
        logOut()
        .then()
        .catch(error=>console.log(error.message));
    }

    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">
                        <span className='fw-semibold fs-1'>K-</span><span style={{ color: 'greenyellow' }} className='fw-semibold fs-1'>RESTO</span>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto gap-3">
                            <NavLink to='/' className='text-decoration-none text-white fw-semibold fs-5 '>Home</NavLink>
                            <NavLink to='/blog' className='text-decoration-none text-white fw-semibold fs-5'>Blog</NavLink>
                        </Nav>
                        <Nav>

                            <Nav.Link className='d-flex'>
                                {
                                    user && <FaUserCircle style={{ fontSize: '2rem' }}></FaUserCircle>

                                }
                            </Nav.Link>

                            {
                                user ?
                                    <Button onClick={handleLogOut} variant='secondary' style={{ backgroundColor: 'greenyellow', border: 'none' }} className='text-decoration-none text-center text-white fs-5 fw-semibold   rounded py-0'>Logout</Button> :
                                    <Link to='/login'>
                                        <Button variant='secondary'style={{ backgroundColor: 'greenyellow', border: 'none' }} className='text-decoration-none text-center text-white fs-5 fw-semibold   rounded'>Login</Button>
                                    </Link>
                            }


                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;