import React from "react";

const ConfirmeRide = (props) => {
  return (
    <div>
      <h5
        onClick={() => {
          props.setConfirmRidePannel(false);
        }}
        className="p-1 text-center w-[93%] absolute top-0 "
      >
        <i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-5 ">Confirm your Ride</h3>
      <div className="flex gap-2 flex-col justify-between items-center">
        <img
          className="h-20"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1652995234/assets/92/8d4288-e896-4333-9bc2-c60c49f2a095/original/UberXL_Black_v2.png"
          alt=""
        />
        <div className="w-full mt-5">
          <div className="flex items-center gap-5 p-3 border-b-2">
            <i className="text-lg  ri-map-pin-line"></i>
            <div>
              <h3 className="text-lg font-medium">562/11/A</h3>
              <p className="text-sm -mt-1 text-gray-600">Anna Nagar,Madurai</p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3 border-b-2 ">
            <i className="text-lg  ri-map-pin-add-fill"></i>
            <div>
              <h3 className="text-lg font-medium">35/7</h3>
              <p className="text-sm -mt-1 text-gray-600">
                Keelavasal Nagar,Madurai
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3 border-b-2">
            <i className="text-lg  ri-currency-line"></i>
            <div>
              <h3 className="text-lg font-medium">$60</h3>
              <p className="text-sm -mt-1 text-gray-600">Cash</p>
            </div>
          </div>
        </div>
        <button
          onClick={() => {
            props.setvehicleFound(true);
            props.setConfirmRidePannel(false);
          }}
          className="w-full mt-5 bg-green-600 text-white font-semibold p-2 rounded-lg"
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default ConfirmeRide;
