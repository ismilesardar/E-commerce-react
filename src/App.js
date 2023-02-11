import './App.css';
import {Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import {Toaster } from 'react-hot-toast'
import Register from './pages/auth/Register';
import { BrowserRouter } from 'react-router-dom';
import Login from './pages/auth/Login';
import Menu from './components/nav/Menu';

function App() {
  return (
    <>
      <BrowserRouter>
      <Menu />
      <Toaster />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
