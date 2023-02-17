import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Loading = () => {
    const [count, setCount] = useState(3);
    const navigate = useNavigate();

    useEffect(() => {
      let interval = setInterval(() => {
        setCount((preCount)=>--preCount);
      }, 1000);

      count===0 && navigate("/login");
    
      return () =>clearInterval(interval);
    }, [count]);    

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
        <h4>404!</h4>
        <h5>Redirecting in {count} seconds</h5>
    </div>
  )
}

export default Loading