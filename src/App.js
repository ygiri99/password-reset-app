import './App.css';
import { Route, Routes } from 'react-router-dom';
import ForgetPassword from './pages/ForgetPassword';
import ResetPassword from './pages/ResetPassword';
import Home from './pages/Home';
import Register from './pages/Register';
import User from './components/User';
import Signin from './pages/Signin';
import Signout from './components/Signout';

function App() {
  return (
    <div className='vh-100'>
      <Routes>
        <Route path="/" element={<Home />} >
          <Route path='/user' element={<User />} />
        </Route>
        <Route path='/signin' element={<Signin />} />
        <Route path='/signout' element={<Signout />} />
        <Route path='/register' element={<Register />} />
        <Route path="/forgot" element={<ForgetPassword />} />
        <Route path="/resetPassword?" element={<ResetPassword />} />
      </Routes>
    </div>
  );
}

export default App;
