import axios from 'axios';
import React from 'react'
import { BASE_URL } from '../utils/constants';
import { removeConnections } from '../utils/connectionSlice';
import { useDispatch, useSelector } from 'react-redux';
import { removeFeed } from '../utils/feedSlice';

const UserCard = ({user}) => {
    const dispatch = useDispatch();
    
    const {_id,firstName,lastName,photoUrl,gender,age,about,skills} =user;

    const handleFeed =async (status,userId)=>{
        const res = await axios.post(BASE_URL+"request/send/" +status+"/"+userId,{},{
            withCredentials:true
        })

        dispatch(removeFeed(userId));
    }

  return (
    <div className="card bg-base-300 w-96 shadow-xl">
  <figure>
    <img
      src={photoUrl}
      alt="user Image" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{firstName}  {lastName} </h2>
    {((age || gender) && <h4>{age}  {gender}</h4>)}
    {(about !='This is a default !')?about:<p>Adding a bio can attract many people</p>}
    {skills && <p>{skills}</p>}
    <div className="card-actions justify-center">
      <button className="btn btn-primary" onClick={()=>handleFeed("ignored",_id)}>Ignore</button>
      <button className="btn btn-secondary" onClick={()=>handleFeed("interested",_id)}>Interested</button>
    </div>
  </div>
</div>
  )
}

export default UserCard