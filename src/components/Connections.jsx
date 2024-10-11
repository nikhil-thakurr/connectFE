import axios from "axios";
import React, { useEffect } from "react";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addConnection } from "../utils/connectionSlice";

const Connections = () => {
  const dispatch = useDispatch();
  const selector = useSelector((store) => store.connection);
  console.log(selector);

  const connectionData = async () => {
    const res = await axios.get(BASE_URL + "user/connections", {
      withCredentials: true,
    });

    console.log(res?.data?.data);
    dispatch(addConnection(res.data.data));
  };

  useEffect(() => {
    connectionData();
  }, []);

  if(!selector)return ;

  if(selector.length ===0 )return <h1>No connections found !!</h1>

  return (
    <>
      <div className="font-extrabold text-2xl text-center">
        <h1>Connections </h1>
      </div>

      {selector && (
        <div className="">
          {selector.map((u) => (
            <div className="card bg-base-200 w-96  shadow-xl my-8 ">
              <div>
                <img src={u.photoUrl} className="w-12 h-12" />
              </div>

              <div className="mx-10">
                <h1>
                 Name : {u.firstName + "     " + u.lastName}
                </h1>
               About: <h2>{u.about}</h2>
               {u.age && <h2> Age :{u.age}</h2>} 
                <p>{u.skills}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Connections;
