import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

export default function ResetPassword() {
    const [newPassword, setNewPassword] = useState('');
    const [err, setErr] = useState('');
    let [resetQuery, setResetQuery] = useSearchParams();
    const navigate = useNavigate();

    const resetFun = async () => {
        setErr('');
        const userId = resetQuery.get("id");
        const token = resetQuery.get("token");
        const data = { userId, token, newPassword };
        try {
            const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/reset-password`, data);
            if (response) {
                window.alert(`Resetted successfully`);
                navigate("/signin")
            }
        } catch (error) {
            console.log(`Error while reset Password ${error}`);
            if (error.response.data.message === 'Invalid or expired token.') {
                window.alert('Token Expired')
            }
            else {
                setErr(error.response.data.message);
            }
        }
    }
    return (
        <div className='d-flex justify-content-center align-items-center flex-column vh-100 bg-secondary-subtle'>
            <label htmlFor="inputPassword5" className="form-label">new Password</label>
            <div className='col-10 col-md-5'>
                <input type="password" id="inputPassword5" onChange={(e) => setNewPassword(e.target.value)} className="form-control" aria-describedby="passwordHelpBlock" />
            </div>
            {
                err ? (setTimeout(() => {
                    setErr('');
                }, 5000), <p className='text-danger'>{err}</p>) :
                    <div id="passwordHelpBlock" className="form-text">
                        Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces,
                        special characters, or emoji.
                    </div>
            }
            <button className='btn btn-success mt-2' onClick={resetFun}>Reset</button>
        </div>
    )
}
