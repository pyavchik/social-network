import React, {Fragment, useState} from "react";
import axios from 'axios';

const Register = () => {
    const [formData, setFormData] = useState({
        id: 11,
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        password2: '',
        status: 'confirmed',
        role: 'user',
        disabled: 'false',
        birthdayDate: '1998-04-12T14:17:51.391Z',
        createdAt: '1998-04-12T14:17:51.391Z'
    });

    const {id, firstName, lastName, email, password, password2, status, role, disabled, birthdayDate, createdAt} = formData;
    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });
    const onSubmit = async e => {
        e.preventDefault();
        if(password !== password2){
            console.log('Passwords do not match')
        } else {
            const newUser = {
                id,
                firstName,
                lastName,
                email,
                password,
                status,
                role,
                disabled,
                birthdayDate,
                createdAt
            }
            try {
                const config = {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }

                const body = JSON.stringify(newUser)

                const res = await axios.post('/api/v1/users', body, config)
                console.log(res.data)
            } catch (error) {
                console.log(error.response.data)
            }
        }
    };

    return (
        <Fragment>
            <h1 className="large text-primary">Sign Up</h1>
            <p className="lead"><i className="fas fa-user"></i> Create Your Account</p>
            <form className="form" onSubmit={e => onSubmit(e)}>
                <div className="form-group">
                    <input
                        type="text"
                        placeholder="Name"
                        name="firstName"
                        value={firstName}
                        onChange={e => onChange(e)}
                        required
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        placeholder="Lastname"
                        name="lastName"
                        value={lastName}
                        onChange={e => onChange(e)}
                        required
                    />
                </div>
                <div className="form-group">
                    <input
                        type="email"
                        placeholder="Email Address"
                        name="email"
                        value={email}
                        onChange={e => onChange(e)}
                        required
                    />
                    <small className="form-text"
                    >This site uses Gravatar so if you want a profile image, use a
                        Gravatar email</small
                    >
                </div>
                <div className="form-group">
                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={password}
                        onChange={e => onChange(e)}
                        minLength="6"
                    />
                </div>
                <div className="form-group">
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        name="password2"
                        value={password2}
                        onChange={e => onChange(e)}
                        minLength="6"
                    />
                </div>
                <input type="submit" className="btn btn-primary" value="Register"/>
            </form>
            <p className="my-1">
                Already have an account? <a href="login.html">Sign In</a>
            </p>
        </Fragment>
    )
}

export default Register
