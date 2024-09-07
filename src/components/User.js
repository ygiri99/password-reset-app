import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function User() {

    const [user, setUser] = useState([]);

    async function getUsers() {
        try {
            const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/user`, { withCredentials: true, credentials: 'include' });
            setUser(response.data);
            //console.log(document.cookie);

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
