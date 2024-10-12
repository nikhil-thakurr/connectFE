import axios from "axios";
import React, { useEffect } from "react";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import UserCard from "./UserCard";
import { addFeed } from "../utils/feedSlice";
import { useNavigate } from "react-router-dom";

const Feed = () => {
  const dispatch = useDispatch();
  const feed = useSelector((store) => store.feed);
  const navigate = useNavigate();

  const feedData = async () => {
    if (feed) return;

    try {
      const res = await axios.get(BASE_URL + "feed", { withCredentials: true });
      //console.log(res.data.users);
      dispatch(addFeed(res?.data.users));
    } 
    catch (err) {
      navigate("/login")
      console.log(err);
    }
  };

  useEffect(() => {
    feedData();
  }, []);



  if(!feed)return;
  if(feed.length<=0)return <h1 className='text-center font-bold'>No More person Nearby !  Come Back Later</h1>

  return (
    feed &&(
    <div className="flex justify-center my-12">
      <UserCard user={feed[0]} />
    </div>
    )
  );
};

export default Feed;
