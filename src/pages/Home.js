import React from 'react'
import Jumbotron from '../components/card/Jumbotron'
import { useAuth } from '../context/auth'

const Home = () => {
  const [auth, setAuth] = useAuth();
  // console.log(auth);
  return (
    <div>
        <Jumbotron title="Home page" />
        <pre>{JSON.stringify(auth, null, 4)}</pre>
    </div>
  )
}

export default Home