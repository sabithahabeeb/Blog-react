import { Route, Routes } from 'react-router-dom';
import './App.css';
import Head from './Components/Head';
import Dashboard from './Pages/Dashboard';
import Home from './Pages/Home';
import MyAccount from './Pages/MyAccount';
import Footer from './Components/Footer';
import Auth from './Components/Auth';
import DetailsBlog from './Pages/DetailsBlog';
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
        <Route path='/blogdetails/id' element={<DetailsBlog/>} />
        <Route path='/write' element={<Write/>} />

           </Routes>
    </>
  );
}

export default App;
