import React, { useState } from 'react'
import axios from 'axios';

export default function RegisterTest() {
    const [user, setUser] = useState({
        id: Date.now(),
        name: '',
        age: 0,
        email: ''  
    })

    const handleChange = e => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        axios.post('http://localhost:5000/api/friends',
        user, {
            headers: { authorization: localStorage.getItem("token") }
          }) .then(res => { 
            console.log(res);
        })
        .catch(err => console.log(err.response));
    }
    
    return (
        <div className="user-form">
            <h2>Add Friend!</h2>
            <form onSubmit={handleSubmit} className="register">
                <p>Name:</p>
                <input required type="text" name="name" placeholder="name" onChange={handleChange} />
                <p>Age:</p>
                <input required type="text" name="age" placeholder="age" onChange={handleChange} />
                <p>Email:</p>
                <input required type="text" name="email" placeholder="email" onChange={handleChange} />
                <div className="button"><button type="submit">Submit!</button></div>
            </form>
        </div>
    )
}