import axios from "axios";
import React, { useEffect } from "react";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addConnection } from "../utils/connectionSlice";
import { Link, useNavigate } from "react-router-dom";

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


  if (!selector) return;

  if (selector.length === 0) return <h1>No connections found !!</h1>;

  return (
    <div className="text-center">
      <div className="font-extrabold text-2xl text-center">
        <h1>Connections </h1>
      </div>

      {selector &&
        selector.map((u) => (
          <div className="bg-black-400 rounded-lg w-2/3  shadow-xl my-8 p-8 flex justify-center ml-60">
            <div>
              <img src={u.photoUrl} className="w-16 h-16" />
            </div>

            <div className="mx-10">
              <h1>Name : {u.firstName + "     " + u.lastName}</h1>
              <h2> About: {u.about}</h2>
              {u.age && <h2> Age :{u.age}</h2>}
              {u.skills && <h2> Skills :{u.skills}</h2>}
              {u.gender && <h2> Gender :{u.gender}</h2>}
              <p>{u.skills}</p>
            </div>
          <Link to={"/chat/"+u._id}>   <button  className="p-2 bg-slate-500 h-10 w-12 rounded-md">Chat</button></Link>
          </div>
        ))}
    </div>
  );
};

export default Connections;
