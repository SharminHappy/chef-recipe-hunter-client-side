import React, { useContext, useState } from 'react';


import { AuthContext } from '../../../providers/AuthProvider';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import app from '../../../firebase/firebase.config';
// import { signInWithPopup } from 'firebase/auth';


const auth = getAuth(app);
const Login = () => {

    const { signIn } = useContext(AuthContext);

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const navigate = useNavigate();
    const location = useLocation();
    console.log('login page location', location);
    const from = location.state?.from?.pathname || '/'

    // google
    const provider = new GoogleAuthProvider();
    const handlerGoogleLogIn = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => {
                console.log('error', error.message)
            })
    }

    //  github
    const gitProvider=new GithubAuthProvider();
const handleGithubSignIn=()=>{

signInWithPopup(auth,gitProvider)
.then(result=>{
    const user=result.user;
    console.log(user);
})
.catch(error=>{
    console.log('error',error.message)
})
}

    const handlerLogin = event => {
        event.preventDefault();
        setError('');
        setSuccess('');
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        if (!/(?=.*[A-Z])/.test(password)) {
            setError('please add at least one uppercase');
            return;
        } else if (!/(?=.*[0-9])/.test(password)) {
            setError('please add at least one number')
            return;
        } else if (!/(?=.*[!@#$%^&*])/.test(password)) {
            setError('please add at least one special characters');
            return;

        } else if (password.length < 6) {
            setError('please add at least 6 characters in your password')
            return;
        }


        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.log(error);
            })

    }
    return (
        <Container className='mx-auto w-50 my-5'>
            <h3>Please Login</h3>
            <Form onSubmit={handlerLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                <p className="text-danger"> {error}</p>
                <Button variant="primary" type="submit">
                    Login
                </Button>
                <br></br>

                <Form.Text className="text-secondary">
                    Don't Have an Account! <Link to='register'>Register</Link>
                </Form.Text>
                <p className="text-success">
                    {success}
                </p>

            </Form>
            <div className='d-flex gap-5'>
                <Button onClick={handlerGoogleLogIn} variant="primary">
                    Google Login
                </Button>
                <Button onClick={handleGithubSignIn} variant="primary">
                    GitHub Login
                </Button>
            </div>
        </Container>
    )


};



export default Login;