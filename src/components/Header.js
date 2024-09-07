import React from 'react'
import { Link } from 'react-router-dom';
import { RiAccountCircleLine } from 'react-icons/ri';

export default function Header() {

    return (
        <div className="text-center">
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <h3 className="navbar-brand">WELCOME</h3>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to={"/"} className="nav-link active">Home</Link>
                            </li>
                            <li className="nav-item">
                                <h5 className="nav-link">Link</h5>
                            </li>
                            <li className="nav-item dropdown">
                                <h5 className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </h5>
                                <ul className="dropdown-menu">
                                    <li><h5 className="dropdown-item">Action</h5></li>
                                    <li><h5 className="dropdown-item">Another action</h5></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><h5 className="dropdown-item">Something else here</h5></li>
                                </ul>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" id='header-search' type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                        {document.cookie === '' ? <Link to={"/register"}><h3><RiAccountCircleLine /></h3></Link> :
                            <div className="dropdown">
                                <div data-bs-toggle="dropdown" aria-expanded="false">
                                    <h3><RiAccountCircleLine /></h3></div>
                                <ul className="dropdown-menu">
                                    <li className='dropdown-item'><Link to={"/signout"} className='text-decoration-none'>Signout</Link></li>
                                </ul>
                            </div>}
                        {document.cookie === '' ? <Link to={"/signin"} className='nav-link'>Login</Link> :
                            <Link to={"/signout"} className='nav-link'>Logout</Link>}
                    </div>
                </div>
            </nav>
        </div>

    )
}
