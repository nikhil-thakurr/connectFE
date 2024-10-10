
import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom';
import UserCard from './UserCard';
import axios from 'axios';
import { BASE_URL } from '../utils/constants';

const EditProfile = ({user}) => {


  const [firstName,setfirstName] =useState(user.firstName);
  const [lastName,setlastName]=useState(user.lastName);
  const [age,setage]=useState(user.age);
  const [gender,setgender]=useState(user.gender);
  const [about,setabout]=useState(user.about);
  const [photoUrl,setPhotoUrl]=useState(user.photoUrl);
  const [error,setError]=useState("");
  const dispatch= useDispatch();

  const saveBtn = async () => {
    try {
        const res = await axios.patch(BASE_URL + "profile/edit", {
            firstName,
            lastName,
            age,
            gender,
            about,
            photoUrl
        }, {
            withCredentials: true
        });

        // console.log(res.data); // Log the response for debugging
    } catch (err) {
        setError(err.response); // Set error message from the response
    }
};


  return (

    <div className='flex justify-evenly'>
    <div className='flex justify-center'>
    <div className="card bg-base-200 w-96 shadow-xl">
       <div className="card-body">
         <h2 className="card-title">Edit Profile</h2>
   
         <label className="form-control w-full max-w-xs">
     <div className="label">
       <span className="label-text my-2">First Name</span>
     </div>
     <input type="text" value={firstName} onChange={(e)=>setfirstName(e.target.value)} placeholder="" className="input input-bordered w-full max-w-xs" />

     <div className="label">
       <span className="label-text my-2">Last Name</span>
     </div>
     <input type="text" value={lastName} onChange={(e)=>setlastName(e.target.value)} placeholder="" className="input input-bordered w-full max-w-xs" />

     <div className="label">
       <span className="label-text my-2">Age</span>
     </div>
     <input type="text" value={age} onChange={(e)=>setage(e.target.value)} placeholder="" className="input input-bordered w-full max-w-xs" />

     <div className="label">
       <span className="label-text my-2">Gender</span>
     </div>
     <input type="text" value={gender} onChange={(e)=>setgender(e.target.value)} placeholder="" className="input input-bordered w-full max-w-xs" />

     <div className="label">
       <span className="label-text my-2">About</span>
     </div>
     <input type="text" value={about} onChange={(e)=>setabout(e.target.value)} placeholder="" className="input input-bordered w-full max-w-xs" />

     <div className="label">
       <span className="label-text my-2">Photo Url</span>
     </div>
     <input type="text" value={photoUrl} onChange={(e)=>setPhotoUrl(e.target.value)} placeholder="" className="input input-bordered w-full max-w-xs" />
   

   </label>
     {/* <p className='text-red-500'>{error}</p> */}
         <div className="card-actions  flex justify-center">
           <button onClick={saveBtn} className="btn btn-primary mt-5" >Save Changes</button>
         </div>
       </div>
     </div>
       </div>
        <UserCard user={{firstName,lastName,age,gender,about,photoUrl}}/>
       </div>
      
  )
}

export default EditProfile