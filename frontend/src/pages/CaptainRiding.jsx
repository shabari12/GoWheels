import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Ridepopup from "../components/Ridepopup";
import FinishRide from "../components/FinishRide";
const CaptainRiding = () => {
  const [finishRidePannel, setFinishRidePannel] = useState(false);

  const finishRidePannelRef = useRef(null);
  useGSAP(
    function () {
      if (finishRidePannel) {
        gsap.to(finishRidePannelRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(finishRidePannelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [finishRidePannel]
  );

  return (
    <div className="h-screen">
      <div className="fixed p-6 t-0 flex items-center justify-between w-full">
        <img
          className="w-16"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt=""
        />
        <Link
          to="/captain-login"
          className="   h-10 w-10 bg-white flex items-center justify-center rounded-full "
        >
          <i className="ri-logout-box-r-line"></i>
        </Link>
      </div>
      <div className="h-4/5">
        <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt=""
        />
      </div>
          <div onClick={() => {
              setFinishRidePannel(true)
      }} className="h-1/5 relative p-6 flex items-center justify-between bg-yellow-400">
        <h5
          onClick={() => {}}
          className="p-1 text-center w-[95%] absolute top-0 "
        >
          <i className="text-3xl text-black ri-arrow-up-wide-line"></i>
        </h5>
        <h4 className="text-xl font-semibold">4 km Away</h4>
        <button className=" bg-green-600 text-white font-semibold p-3 px-8 rounded-lg">
          Complete Ride
        </button>
      </div>
      <div
        ref={finishRidePannelRef}
        className="fixed w-full z-10 translate-y-full  bottom-0 bg-white p-3 py-6 pt-12"
      >
              <FinishRide setFinishRidePannel={setFinishRidePannel} />
      </div>
    </div>
  );
};

export default CaptainRiding;
