import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function User() {

    const [user, setUser] = useState([]);

    async function getUsers() {
        try {
            //Using token getting the user detail to display
            let authToken = localStorage.getItem('Token');

            if (authToken) {
                const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/user`, { authToken });
                setUser(response.data);
            }
            else {
                alert('signIn first');
            }
        } catch (error) {
            console.log(`Error while loading users: ${error}`);
        }
    }

    useEffect(() => {
        getUsers();
    }, [])

    return (
        <div className='container'>
            <div className="row justify-content-center">
                <div className="col col-md-6">
                    <div className='bg-warning boarder rounded'>
                        <h3>Name:{user.name}</h3>
                        <h5 className='text-break'>Email:{user.email}</h5>
                        <h5>City:{user.address}</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}
