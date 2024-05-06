import React from "react";
import { Link } from "react-router-dom";
// import { Outlet } from "react-router-dom";
import Header from "./Header";

function Login() {
    
      

  return (
    
    <div className="bg-black h-full">
      {/* <Outlet /> */}<Header/>
      <div className="h-[200px]  shadow-2xl">
        <div on className="bg-slate-800 h-[3000px]  text-white text-center border border-white font-bold ">
          Login
          <div className="mb-4 mt-4">
            <label>Email:</label>
            <input type="text" className='' />
          </div>
          <div className="mr-8">
            <label>
              Password:
              <input type="text" />
            </label>
          </div>
          <div className="space-x-4 ml-8">
            <button type="sumbit" className="bg-white text-black p-1 mt-4">
              Login
            </button>

            <Link to={"/"}>
              <button type="close" className="bg-white text-black p-1">
                Cancel
              </button>
            </Link>
          </div>
        </div>
      </div>
     
    </div>
  );
}

export default Login;
