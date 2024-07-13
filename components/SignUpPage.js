import React, { useState } from 'react';
import './SignUpPage.css';

const SignUpPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignUp = () => {
        console.log('Signed up with', email, password);
    };

    return (
        <div className='sign-up-page'>
            <h2>Sign Up</h2>
            <input
                type="email"
                placeholder='Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder='Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleSignUp}>Sign Up</button>
        </div>
    );
};

export default SignUpPage;
