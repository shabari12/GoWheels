import React, { useRef, useState } from "react";
import CaptainDetails from "../components/CaptainDetails";
import { Link } from "react-router-dom";
import Ridepopup from "../components/Ridepopup";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ConfirmRidePopup from "../components/ConfirmRidePopup";
const CaptainHome = () => {
  const [ridePopupPannel, setRidePopupPannel] = useState(true);
  const ridePopupPannelRef = useRef(null);
  const [confirmridePopupPannel, setConfirmridePopupPannel] = useState(false);
  const confirmridePopupPannelRef = useRef(null);
 
  useGSAP(
    function () {
      if (ridePopupPannel) {
        gsap.to(ridePopupPannelRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(ridePopupPannelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [ridePopupPannel]
  );
  useGSAP(
    function () {
      if (confirmridePopupPannel) {
        gsap.to(confirmridePopupPannelRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(confirmridePopupPannelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [confirmridePopupPannel]
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
      <div className="h-3/5">
        <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt=""
        />
      </div>
      <div className="h-2/5 p-6">
        <CaptainDetails />
      </div>
      <div
        ref={ridePopupPannelRef}
        className="fixed w-full z-10 translate-y-full  bottom-0 bg-white p-3 py-6 pt-12"
      >
        <Ridepopup
          setRidePopupPannel={setRidePopupPannel}
          setConfirmridePopupPannel={setConfirmridePopupPannel}
        />
      </div>
      <div
        ref={confirmridePopupPannelRef}
        className="fixed w-full h-screen z-10 translate-y-full  bottom-0 bg-white p-3 py-6 pt-12"
      >
        <ConfirmRidePopup
          setConfirmridePopupPannel={setConfirmridePopupPannel}
          setRidePopupPannel={setRidePopupPannel}
        />
      </div>
      
    </div>
  );
};

export default CaptainHome;
