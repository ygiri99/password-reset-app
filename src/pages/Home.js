import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link, Outlet } from 'react-router-dom'

export default function Home() {

    return (
        <>
            <Header />
            <div className='p-2 text-info-emphasis text-center
             d-flex  flex-column justify-content-center align-items-center bg-info-subtle border border-info-subtle h-75'>
                {//Handling login or logout condition
                    document.cookie !== '' ? <Outlet /> : <>
                        <h2 className='text-danger opacity-75'>WELCOME</h2>
                        <p><Link to={"/signin"} className='text-decoration-none'>Login</Link> to your account</p>
                        <p>New User ? <Link to={"/register"} className='text-decoration-none'>SignUp</Link></p>
                    </>}
            </div>
            <Footer />
        </>
    )
}
