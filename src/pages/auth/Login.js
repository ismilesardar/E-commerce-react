import axios from 'axios';
import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import Jumbotron from '../../components/card/Jumbotron';
import { useAuth } from '../../context/auth';

const Login = () => {
  const [auth, setAuth] = useAuth();
  const [email, setEmail] = useState('test@gmail.com');
  const [password, setPassword] = useState('12345678');

  const handelLogin = async (e) => {
    e.preventDefault()
    try {
      const URL = `/login` 
      const {data} = await axios.post(
        URL,
        {
          email,
          password
        }
      );

      // console.log(data);

      if (data?.error) {
        toast.error(data.error);
      } else {
        localStorage.setItem("auth", JSON.stringify(data));
        setAuth({...auth,user:data.Customer,token:data.Token});
        toast.success("Login Success...");
      }

    } catch (error) {
      console.log(error);
      toast.error("Login failed. Try again...")
    }
  }

  return (
    <>
        <Jumbotron title="Login page" />

        <div className="container mt-5">
          <div className="row">
            <div className="col-md-6 offset-md-3">
              <form onSubmit={handelLogin}>
                <input 
                  type="email"
                  value={email}
                  placeholder="Enter your E-mail"
                  className="form-control mb-4 p-2"
                  onChange={(e)=> setEmail(e.target.value)}
                />
                <input 
                  type="password"
                  value={password}
                  placeholder="Password"
                  className="form-control mb-4 p-2"
                  onChange={(e)=> setPassword(e.target.value)}
                />
                <button type="submit" className="btn btn-primary">Login</button>
              </form>
            </div>
          </div>
        </div>
    </>
  )
}

export default Login