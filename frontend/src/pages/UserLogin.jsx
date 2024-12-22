import React, { useState } from "react";
import { Link } from "react-router-dom";

const UserLogin = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [userData, setuserData] = useState({});
  const formSubmitHandler = (e) => {
    e.preventDefault();
    setuserData({
      email: email,
      password: password,
    });
    
    setemail("");
    setpassword("");
  };
  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <img
          className="w-16 mb-10 z-"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt="Uber Logo"
        />
        <form action="" onSubmit={formSubmitHandler}>
          <h3 className="text-lg mb-2 font-medium"> Whats your email?</h3>
          <input
            required
            value={email}
            onChange={(e) => {
              setemail(e.target.value);
            }}
            type="email"
            placeholder="email@example.com"
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
          />
          <h3 className="text-lg mb-2 font-medium">Enter your Password</h3>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => {
              setpassword(e.target.value);
            }}
            placeholder="password"
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
          />

          <button className="bg-[#111] mb-2 text-white rounded px-4 py-2  w-full text-lg placeholder:text-base">
            Login
          </button>
          <p className="text-center">
            New here?{" "}
            <Link to="/signup" className="text-blue-600">
              Create New Account
            </Link>
          </p>
        </form>
      </div>
      <div>
        <Link
          to="/captain-login"
          className="bg-[#10b461] flex items-center justify-center mb-5 text-white rounded px-4 py-2  w-full text-lg placeholder:text-base"
        >
          Sign in as Captain
        </Link>
      </div>
    </div>
  );
};

export default UserLogin;
