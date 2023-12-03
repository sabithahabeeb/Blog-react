import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './Pages/Dashboard';
import Home from './Pages/Home';
import MyAccount from './Pages/MyAccount';
import Auth from './Components/Auth';
import Write from './Components/Write';

function App() {
  return (
    <>
    
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Auth />} />
        <Route path='/register' element={<Auth register />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/myaccount' element={<MyAccount />} />
        <Route path='/write' element={<Write/>} />

           </Routes>
    </>
  );
}

export default App;
