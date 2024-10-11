import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom';
import { BASE_URL } from '../utils/constants';
import { removeUser } from '../utils/userSlice';
import axios from 'axios';

const NavBar = () => {

  const user =useSelector(store =>store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout =async ()=>{
    const res = await axios.post(BASE_URL + "logout",{},{
      withCredentials : true 
    })
    dispatch(removeUser());
    navigate("/login");
  }

  return (

    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Link to="/feed" className="btn btn-ghost text-xl">  Connect</Link>
      </div>
     {user&& <div className="flex-none gap-2 mx-5">
       <p>Welcome {user.firstName}</p>
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <li>
              <Link to="/profile" className="justify-between">
                Profile
                <span className="badge">New</span>
              </Link>
            </li>
            <li><Link to="/connections">connections</Link></li>
            <li><Link onClick={handleLogout}>Logout</Link></li>
          </ul>
        </div>
      </div>}
    </div>
  )
}

export default NavBar