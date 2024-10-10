import React, { useEffect } from "react";
import NavBar from "./NavBar";
import { Outlet, useNavigate } from "react-router-dom";
import Footer from "./Footer";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../utils/userSlice";

const Body = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector((store) => store.user);

  const fetchUser = async () => {

    if(userData)return ;
    try {
      const res = await axios.get(BASE_URL + "profile/view", {
        withCredentials: true,
      });

      dispatch(addUser(res.data));
    } catch (err) {
      if (err.status === 402) {
        navigate("/login");
      }
      console.log("ERROR IS : " + err);
    }
  };

  useEffect(() => {
    
      fetchUser();
    
  }, []);

  return (
    <>
      <NavBar />
      <Outlet />
      {/* <Footer /> */}
    </>
  );
};

export default Body;
