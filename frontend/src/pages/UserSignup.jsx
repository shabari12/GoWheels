import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

import { UserDataContext } from "../context/userContext";
const UserSignup = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const navigate = useNavigate();
  const { setUser } = React.useContext(UserDataContext);

  const formSubmitHandler = async (e) => {
    e.preventDefault();
    const newUser = {
      email: email,
      fullname: {
        firstname: firstName,
        lastname: lastName,
      },
      password: password,
    };
    /* console.log('====================================');
    console.log(newUser);
    console.log('===================================='); */
    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/users/register`,
      newUser
    );
    if (response.status == 201) {
      const data = response.data;
      setUser(data.user);
      navigate("/home");
    }

    setemail("");
    setFirstName("");
    setLastName("");
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
          <h3 className="text-lg mb-2 font-medium"> Whats your name?</h3>
          <div className="flex gap-4 mb-6">
            <input
              required
              type="text"
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
              placeholder="First Name"
              className="bg-[#eeeeee] w-1/2  rounded px-4 py-2 border  text-lg placeholder:text-base"
            />
            <input
              required
              type="text"
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
              placeholder="Last Name"
              className="bg-[#eeeeee] w-1/2  rounded px-4 py-2 border  text-lg placeholder:text-base"
            />
          </div>
          <h3 className="text-lg mb-2 font-medium"> Whats your email?</h3>
          <input
            required
            type="email"
            value={email}
            onChange={(e) => {
              setemail(e.target.value);
            }}
            placeholder="email@example.com"
            className="bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
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
            className="bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
          />

          <button className="bg-[#111] mb-2 text-white rounded px-4 py-2  w-full text-lg placeholder:text-base">
            Create Account
          </button>
          <p className="text-center">
            Already have an Account?{" "}
            <Link to="/login" className="text-blue-600">
              Login
            </Link>
          </p>
        </form>
      </div>
      <div>
        <p className="text-[10px] leading-tight">
          By proceeding, you consent to get calls ,whatsapp or sms
          messages,including by automated meand from Uber and its affiliates to
          the number provided.{" "}
        </p>
      </div>
    </div>
  );
};

export default UserSignup;
