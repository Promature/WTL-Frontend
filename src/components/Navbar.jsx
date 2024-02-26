import {CgProfile} from "react-icons/cg";
import { useNavigate } from "react-router-dom";

export default function Navbar() {

  const navigate = useNavigate();

  const Logout = () => {
    
    fetch('http://localhost:3001/logout', {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true,
      }
    }).then(function (response) {
      console.log(response);
      navigate('/');
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a href="/home">Homepage</a>
            </li>
            <li>
              <a href="/found-pet">Found Pet</a>
            </li>
            <li>
              <a href="/lost-pets">Lost Pet</a>
            </li>
            <li>
              <a href="/success-stories">Success Stories</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center flex items-center">
        <a href="/"><img src="/logo-no-background.svg" className="max-h-10"/></a>
        <a href="/" className="btn btn-ghost font-bold text-xl ml-[-96px]">Pet-Reunite</a>
      </div>
      
      <div className="navbar-end">
        
        <CgProfile className="btn-ghost mr-4 h-8 btn-circle" onClick={() => {navigate('/user')}}/>


        <button onClick={() => Logout()} className="btn btn-primary">Logout</button>

      </div>


    </div>
  );
}
