import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import { updateProfile } from 'firebase/auth';


const Register = () => {
    const { createUser } = useContext(AuthContext)
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');


    const handleRegister = event => {
        event.preventDefault();
        setError('');
        setSuccess('');
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;

        console.log(name, photo, email, password)

        if (!/(?=.*[A-Z])/.test(password)) {
            setError('please add at least one uppercase');
            return;
        }else if(!/(?=.*[0-9])/.test(password)){
            setError('please add at least one number')
            return;
        }else if(!/(?=.*[!@#$%^&*])/.test(password)){
            setError('please add at least one special characters');
            return;

        }else if(password.length<6){
            setError('please add at least 6 characters in your password')
            return;
        }
        createUser(email, password)
            .then(result => {
                const createdUser = result.user;
                console.log(createdUser);
                setError('');
                event.target.reset();
                setSuccess('User Created Account Successfully');
                updateUserData(result.user,name,photo);
            })
            .catch(error => {
                console.log(error.message);
                setError(error.message);
                setSuccess('');
            })

const updateUserData=(user,name,photo)=>{
    updateProfile(user, {
        displayName: name,
        photoURL:photo
    })
    .then(()=>{
        console.log('user profile updated')
    })
    .catch(error=>{
        setError(error.message)
    })
    
}


    }

    return (
        <div>
            <Container className='mx-auto w-50 py-5'>
                <h3 className='text-center'>Register your account</h3>
                <Form onSubmit={handleRegister}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Your Name</Form.Label>
                        <Form.Control type="text" name='name' placeholder="Enter your name" required />

                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Photo URL </Form.Label>
                        <Form.Control type="text" name='photo' placeholder=" Photo URL" required />

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" name='email' placeholder="Enter your email" required />

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name='password' placeholder="Enter your Password" required />
                    </Form.Group>
                    <p className="text-danger"> {error}</p>
                    {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox"
                         name='accept'
                          label={<>Accept <Link to='/terms'>Terms and Conditions</Link></>} />
                    </Form.Group> */}

                    <Button variant="primary" type="submit">
                        Register
                    </Button>
                    <br></br>
                    <Form.Text className="text-secondary">
                        Already Have an Account! <Link to='/login'>Login</Link>
                    </Form.Text>
                    <br></br>
                    <p className="text-success">
                        {success}
                    </p>


                </Form>
            </Container>
        </div>
    );
};

export default Register;