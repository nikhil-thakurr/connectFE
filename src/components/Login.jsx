import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";

const Login = () => {
  const [emailId, setEmail] = useState("");
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(false);
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post(
        BASE_URL + "login",
        {
          emailId,
          password,
        },
        {
          withCredentials: true,
        }
      );
      dispatch(addUser(res.data));
      navigate("/feed");
    } catch (err) {
      setError(err.response.data);
      console.error(err);
    }
  };

  const handleSignUp=async()=>{

    try {
      const res = await axios.post(
        BASE_URL + "signup",
        {
          firstName,
          lastName,
          emailId,
          password,
        },
        {
          withCredentials: true,
        }
      );
      dispatch(addUser(res.data.data));
      navigate("/profile");
    } catch (err) {
      setError(err.response.data);
      console.error(err);
    }

  }

  return (
    <div className="flex justify-center">
      <div className="card bg-base-200 w-96 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Login</h2>

          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text my-2">First Name </span>
            </div>
            {!isLogin && (
              <>
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setfirstName(e.target.value)}
                  placeholder="John"
                  className="input input-bordered w-full max-w-xs"
                />
                <div className="label">
                  <span className="label-text my-2">Last Name</span>
                </div>
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setlastName(e.target.value)}
                  placeholder="Doe"
                  className="input input-bordered w-full max-w-xs"
                />
                <div className="label">
                  <span className="label-text my-2">Email Id </span>
                </div>
              </>
            )}
            <input
              type="text"
              value={emailId}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="simon@gmail.com"
              className="input input-bordered w-full max-w-xs"
            />

            <div className="label">
              <span className="label-text my-2 ">Password </span>
            </div>
            <input
              type="text"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="********"
              className="input input-bordered w-full max-w-xs"
            />
            <p className="text-red-500">{error}</p>
          </label>
          <p className="flex justify-center text-center text-purple-700 cursor-pointer mt-4" onClick={()=>setIsLogin(!isLogin)}>{isLogin?"New User ? SignUp Here":"Existing User ? Login"}</p>

          <div className="card-actions  flex justify-center">
            <button className="btn btn-primary mt-5" onClick={isLogin?handleLogin:handleSignUp}>
              {isLogin ?"Login":"SignUp"}
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Login;
