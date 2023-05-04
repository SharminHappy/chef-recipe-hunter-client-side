import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
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
                        <span className='fw-semibold'>K-</span><span style={{ color: 'greenyellow' }} className='fw-semibold'>RESTO</span>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto gap-3">
                            <Link to='/' className='text-decoration-none text-secondary fw-semibold'>Home</Link>
                            <Link to='/blog' className='text-decoration-none text-secondary fw-semibold'>Blog</Link>
                        </Nav>
                        <Nav>

                            <Nav.Link>
                                {
                                    user && <FaUserCircle style={{ fontSize: '2rem' }}></FaUserCircle>

                                }
                            </Nav.Link>

                            {
                                user ?
                                    <Button onClick={handleLogOut} variant='secondary' style={{ backgroundColor: 'greenyellow', border: 'none',width:'100' }} className='text-decoration-none text-center text-white fs-5 fw-semibold  rounded'>Logout</Button> :
                                    <Link to='/login'>
                                        <Button variant='secondary'style={{ backgroundColor: 'greenyellow', border: 'none',width:'100' }} className='text-decoration-none text-center text-white fs-5 fw-semibold   rounded'>Login</Button>
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