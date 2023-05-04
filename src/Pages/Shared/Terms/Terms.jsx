import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
            <h2>Terms and conditions</h2>
            <p>Go back to register <Link to='register'>Register</Link></p>
        </div>
    );
};

export default Terms;