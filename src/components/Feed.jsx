import axios from "axios";
import React, { useEffect } from "react";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import UserCard from "./UserCard";
import { addFeed } from "../utils/feedSlice";

const Feed = () => {
  const dispatch = useDispatch();
  const feed = useSelector((store) => store.feed);

  const feedData = async () => {
    if (feed) return;

    try {
      const res = await axios.get(BASE_URL + "feed", { withCredentials: true });
    //   console.log(res.data);
      dispatch(addFeed(res?.data));
    } 
    catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    feedData();
  }, []);

  return (
    feed &&(
    <div className="flex justify-center my-12">
      <UserCard user={feed.users[0]} />
    </div>
    )
  );
};

export default Feed;
