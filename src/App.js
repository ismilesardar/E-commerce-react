import './App.css';
import {Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import {Toaster } from 'react-hot-toast'
import Register from './pages/Register';
import Login from './pages/Login';
import Menu from './components/nav/Menu';


function App() {
  return (
    <div className="App">
      <Menu />
      <Toaster />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
