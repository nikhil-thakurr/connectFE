import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BASE_URL } from '../utils/constants';
import { addrequests } from '../utils/requestsSlice';

const Requests = () => {
    const dipatch = useDispatch();
    const request = useSelector(store=>store.requests);

    const getRequests = async ()=>{
        const res =await axios.get(BASE_URL+"user/requests/recieved",{
            withCredentials:true
        })

       console.log(res.data.data)
        dipatch(addrequests(res.data.data));
    }

    useEffect(() => {
      getRequests();
    }, [])
    

  return (
    <div className="text-center">
      <div className="font-extrabold text-2xl text-center">
        <h1>Requests </h1>
      </div>

      {request &&
        request.map((u) => (
          <div className="bg-black-400 rounded-lg w-2/3  shadow-xl my-8 p-8 flex justify-evenly items-center ml-60">
            <div>
              <img src={u.fromUserId.photoUrl} className="w-16 h-16" />
            </div>

            <div className="mx-10">
              <h1>Name : {u.fromUserId.firstName + "     " + u.fromUserId.lastName}</h1>
              <h2> About: {u.fromUserId.about}</h2>
              {u.fromUserId.age && <h2> Age :{u.fromUserId.age}</h2>}
              {u.fromUserId.skills && <h2> Skills :{u.fromUserId.skills}</h2>}
              {u.fromUserId.gender && <h2> Gender :{u.fromUserId.gender}</h2>}
              <p>{u.skills}</p>
            </div>

            <div>

                <button className='btn btn-primary mx-4'>Reject</button>
                <button className='btn btn-secondary'>Accept</button>

            </div>
          </div>
        ))}
    </div>
  )
}

export default Requests