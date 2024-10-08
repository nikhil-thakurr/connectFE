import axios from 'axios';
import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import { addUser } from '../utils/userSlice';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../utils/constants';

const Login = () => {

  const [emailId,setEmail] =useState("nikhil@gmail.com");
  const [password,setPassword]=useState("Password@123");
  const dispatch = useDispatch();
  const navigate= useNavigate();

  const handleLogin =async()=>{

    try{

      const res =await axios.post(BASE_URL+ "login",{
        emailId,password
      },{
        withCredentials:true
      })
      dispatch(addUser(res.data));
      navigate("/");
    }
    catch(err){
      console.log("ERROR is : "+err);
    }
   
  }

  return (
    <div className='flex justify-center'>
 <div className="card bg-base-200 w-96 shadow-xl">
    <div className="card-body">
      <h2 className="card-title">Login</h2>

      <label className="form-control w-full max-w-xs">
  <div className="label">
    <span className="label-text my-2">Email Id </span>
  </div>
  <input type="text" value={emailId} onChange={(e)=>setEmail(e.target.value)} placeholder="simon@gmail.com" className="input input-bordered w-full max-w-xs" />

  <div className="label">
    <span className="label-text my-2 ">Password </span>
  </div>
  <input type="text" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="********" className="input input-bordered w-full max-w-xs" />
  
</label>
      <div className="card-actions  flex justify-center">
        <button className="btn btn-primary mt-5" onClick={handleLogin}>Login</button>
      </div>
    </div>
  </div>
    </div>
   
  )
}

export default Login