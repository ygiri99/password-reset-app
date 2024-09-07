import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Signout() {

    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const signOutFun = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/signout`, { withCredentials: true, credentials: 'include' });
                console.log('signed Out', response.data.message); setMessage(response.data.message);
                navigate('/');
            } catch (error) {
                console.log(`Error while signOut: ${error}`);
            }
        }
        signOutFun();
    })
    return (
        <>
            <h3 className='text-success'>{message}</h3>
        </>
    )
}
