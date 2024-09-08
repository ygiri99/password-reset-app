import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Register() {

    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [mobile, setMobile] = useState('');
    const [role, setRole] = useState(undefined);
    const [address, setAddress] = useState('');

    async function submit(e) {
        e.preventDefault();
        let payload = { name, email, password, mobile, role, address };
        try {
            const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/register`, payload);
            if (response) {
                navigate(`/signin`);
            }
        } catch (error) {
            let mail = /email/.test(error.response.data);
            let mobile = /mobile/.test(error.response.data);
            if (mail) {
                alert('Email already exists');
            }
            else if (mobile) {
                alert('Mobile number already exists');
            }
            else
                alert(`Error while singUp ${error.response.data}`);
        }
    }

    return (
        <div className='container-fluid bg-info-subtle text-center'>
            <div className='row align-items-center h-100'>
                <h3 className=''>Registration Form</h3>
                <form>
                    <div className="row g-3 align-items-center justify-content-center mb-2">
                        <div className="col-sm-2">
                            <label htmlFor="inputName" className="col-form-label">Name</label>
                        </div>
                        <div className="col-sm-4">
                            <input type="text" id="inputName" name='inputName'
                                className="form-control" aria-describedby="nameInline"
                                onChange={(e) => setName(e.target.value)}
                                required />
                        </div>
                    </div>
                    <div className="row g-3 align-items-center justify-content-center mb-2">
                        <div className="col-sm-2">
                            <label htmlFor="inputEmail" className="col-form-label">Email</label>
                        </div>
                        <div className="col-sm-4">
                            <input type="email" id="inputEmail" className="form-control"
                                aria-describedby="emailInline"
                                onChange={(e) => setEmail(e.target.value)}
                                required />
                        </div>
                    </div>
                    <div className="row g-3 align-items-center justify-content-center mb-2">
                        <div className="col-sm-2">
                            <label htmlFor="inputPassword" className="col-form-label">Password</label>
                        </div>
                        <div className="col-sm-4">
                            <input type="password" id="inputPassword" className="form-control"
                                aria-describedby="passwordInline"
                                onChange={(e) => setPassword(e.target.value)}
                                required />
                        </div>
                    </div>
                    <div className="row g-3 align-items-center justify-content-center mb-2">
                        <div className="col-sm-2">
                            <label htmlFor="inputmobile" className="col-form-label">Mobile</label>
                        </div>
                        <div className="col-sm-4">
                            <input type="number" min={1000000000} max={9999999999}
                                id="inputmobile" className="form-control"
                                aria-describedby="mobileInline"
                                onChange={(e) => setMobile(e.target.value)}
                                required />
                        </div>
                    </div>
                    <div className="row g-3 align-items-center justify-content-center mb-2">
                        <div className="col-sm-2">
                            <label htmlFor="inputRole" className="col-form-label">Role</label>
                        </div>
                        <div className="col-sm-4">
                            <input type="Number" id="inputRole" className="form-control" min={1} max={2}
                                aria-describedby="roleInline"
                                onChange={(e) => setRole(e.target.value)} /><span>(1:admin or 2:user)</span>
                        </div>
                    </div>
                    <div className="row g-3 align-items-center justify-content-center mb-2">
                        <div className="col-sm-2">
                            <label htmlFor="inputAddress" className="col-form-label">Address</label>
                        </div>
                        <div className="col-sm-4">
                            <input type="text" id="inputAddress"
                                className="form-control" aria-describedby="addressInline"
                                onChange={(e) => setAddress(e.target.value)} />
                        </div>

                    </div>
                    <div className='row g-3 align-items-center justify-content-center mb-2'>
                        <div className='col-auto'>
                            <button type='submit' className='btn btn-outline-success' onClick={(e) => submit(e)}>Submit</button>
                            <Link to={"/"} className='text-decoration-none m-4 p-2 border rounded bg-warning'>Cancel</Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
