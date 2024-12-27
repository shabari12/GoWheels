import { data, Link } from "react-router-dom";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { CaptainDataContext } from "../context/CaptainContext";
const CaptainSignUp = () => {
  const navigate = useNavigate();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [captainData, setcaptainData] = useState({});
  const [vehicleColor, setVehicleColor] = useState("");
  const [vehiclePlate, setVehiclePlate] = useState("");
  const [vehicleCapacity, setVehicleCapacity] = useState("");
  const [vehicleType, setVehicleType] = useState("");
  const captainContext = useContext(CaptainDataContext);
  const formSubmitHandler = async (e) => {
    e.preventDefault();
    const captainData = {
      fullname: {
        firstname: firstName,
        lastname: lastName,
      },
      email: email,
      password: password,
      vehicle: {
        color: vehicleColor,
        plate: vehiclePlate,
        capacity: vehicleCapacity,
        vehicleType: vehicleType,
      },
    };
    console.log(captainData);
    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/captains/register`,
      captainData
    );

    
    if (response.status === 201) {
      const data = response.data;
      setcaptainData(data.capatain);
      localStorage.setItem("token", data.token);
      navigate("/captain-home");
    }

    setemail("");
    setFirstName("");
    setLastName("");
    setpassword("");
    setVehicleCapacity("");
    setVehicleColor("");
    setVehiclePlate("");
    setVehicleType("");
  };
  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <img
          className="w-16 mb-5 z-"
          src="https://www.svgrepo.com/show/505031/uber-driver.svg"
          alt="Uber Logo"
        />
        <form action="" onSubmit={formSubmitHandler}>
          <h3 className="text-lg mb-1 font-medium"> Whats your name?</h3>
          <div className="flex gap-4 mb-3">
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
          <h3 className="text-lg mb-1 font-medium"> Whats your email?</h3>
          <input
            required
            type="email"
            value={email}
            onChange={(e) => {
              setemail(e.target.value);
            }}
            placeholder="email@example.com"
            className="bg-[#eeeeee] mb-3 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
          />
          <h3 className="text-lg mb-1 font-medium">
            {" "}
            What's your Vehicle Color?
          </h3>
          <input
            required
            type="text"
            value={vehicleColor}
            onChange={(e) => {
              setVehicleColor(e.target.value);
            }}
            placeholder="Red"
            className="bg-[#eeeeee] mb-3 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
          />
          <h3 className="text-lg mb=1 font-medium">
            {" "}
            What's your Vehicle Plate ?
          </h3>
          <input
            required
            type="text"
            value={vehiclePlate}
            onChange={(e) => {
              setVehiclePlate(e.target.value);
            }}
            placeholder="TN 67 BS 0321"
            className="bg-[#eeeeee] mb-3 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
          />
          <h3 className="text-lg mb-1 font-medium">
            {" "}
            What's your Vehicle Capacity?
          </h3>
          <input
            required
            type="text"
            value={vehicleCapacity}
            onChange={(e) => {
              setVehicleCapacity(e.target.value);
            }}
            placeholder="5"
            className="bg-[#eeeeee] mb-3 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
          />
          <h3 className="text-lg mb-1 font-medium">
            {" "}
            What's your Vehicle Type?
          </h3>
          <input
            required
            type="text"
            value={vehicleType}
            onChange={(e) => {
              setVehicleType(e.target.value);
            }}
            placeholder="MPV"
            className="bg-[#eeeeee] mb-3 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
          />
          <h3 className="text-lg mb-1 font-medium">Enter your Password</h3>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => {
              setpassword(e.target.value);
            }}
            placeholder="password"
            className="bg-[#eeeeee] mb-3 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
          />

          <button className="bg-[#111] mb-2 text-white rounded px-4 py-2  w-full text-lg placeholder:text-base">
            Create Captain Account
          </button>
          <p className="text-center">
            Already have an Account?{" "}
            <Link to="/captain-login" className="text-blue-600">
              login
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

export default CaptainSignUp;
