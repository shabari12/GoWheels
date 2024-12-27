import React from "react";

const VehiclePannel = (props) => {
  return (
    <div>
      <h5
        onClick={() => {
          props.setvehiclePannel(false);
        }}
        className="p-1 text-center w-[93%] absolute top-0 "
      >
        <i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-5 ">Choose a Vehicle</h3>
      <div
        onClick={() => {
          props.setConfirmRidePannel(true);
          props.setvehiclePannel(false);
        }}
        className="flex w-full border-2 active:border-black  mb-2 rounded-xl w-full p-3  items-center justify-between"
      >
        <img
          className=" h-10"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1652995234/assets/92/8d4288-e896-4333-9bc2-c60c49f2a095/original/UberXL_Black_v2.png"
          alt=""
        />
        <div className=" ml-2 w-1/2">
          <h4 className="font-medium text-base ">
            UberGo{" "}
            <span>
              <i className="ri-user-3-fill"></i>4
            </span>
          </h4>
          <h5 className="font-medium text-sm">2 mins away</h5>
          <p className="font-normal text-xs text-gray-600">
            Affordable, compact rides
          </p>
        </div>
        <h2 className="text-lg font-semibold">$100usd</h2>
      </div>
      <div
        onClick={() => {
          props.setConfirmRidePannel(true);
          props.setvehiclePannel(false);
        }}
        className="flex w-full border-2 active:border-black  mb-2 rounded-xl w-full p-3  items-center justify-between"
      >
        <img
          className=" h-10"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png"
          alt=""
        />
        <div className=" ml-2 w-1/2">
          <h4 className="font-medium text-base ">
            Uber Auto{" "}
            <span>
              <i className="ri-user-3-fill"></i>3
            </span>
          </h4>
          <h5 className="font-medium text-sm">2 mins away</h5>
          <p className="font-normal text-xs text-gray-600">
            Affordable, compact rides
          </p>
        </div>
        <h2 className="text-lg font-semibold">$60usd</h2>
      </div>
      <div
        onClick={() => {
          props.setConfirmRidePannel(true);
          props.setvehiclePannel(false);
        }}
        className=" flex w-full border-2 active:border-black  mb-2 rounded-xl w-full p-3  items-center justify-between"
      >
        <img
          className=" h-10"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png"
          alt=""
        />
        <div className=" ml-2 w-1/2">
          <h4 className="font-medium text-base ">
            Uber Bike{" "}
            <span>
              <i className="ri-user-3-fill"></i>1
            </span>
          </h4>
          <h5 className="font-medium text-sm">2 mins away</h5>
          <p className="font-normal text-xs text-gray-600">
            Affordable, Safe Bike rides
          </p>
        </div>
        <h2 className="text-lg font-semibold">$20usd</h2>
      </div>
    </div>
  );
};

export default VehiclePannel;
