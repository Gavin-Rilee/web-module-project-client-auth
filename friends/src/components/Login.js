import React, { useState } from 'react';
import {axiosWithAuth} from '../utils/AxiosWithAuth';
// import {useHistory} from 'react-router-dom'

const Login = (props) => {

    const [credentials, setCredentials] = useState({
        username: "",
        password: "",
      });
    
    //   const push = useHistory();

      const handleChange = e => {
        setCredentials({
            ...credentials,
            [e.target.name]:e.target.value
        });
    }
    
    const handleSubmit = e => {
        e.preventDefault();
        axiosWithAuth().post('/api/login', credentials)
        .then(res =>{
            localStorage.setItem('token',res.data.payload);
            props.history.push('/protected')
        })
        .catch(err =>{
            console.log(err)
        })
    }
    // const [handleSubmit, handleChange, credentials] = useForm();

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Username:</label>
        <input value={credentials.username} name="username" type="text" onChange={handleChange} />
        <br></br>
        <label>Password:</label>
        <input value={credentials.password} name="password" type="password" onChange={handleChange} />
        <br></br>
        <button>Login</button>
      </form>
    </div>
  );
};

export default Login;