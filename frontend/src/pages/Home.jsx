import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import LocationSearchPannel from "../components/LocationSearchPannel";
import VehiclePannel from "../components/VehiclePannel";
import ConfirmeRide from "../components/ConfirmeRide";
import WaitingForDriver from "../components/WaitingForDriver";
import LookingForDriver from "../components/LookingForDriver";
const Home = () => {
  const token = localStorage.getItem("token");
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [pannelOpen, setPannelOpen] = useState(false);
  const panelRef = useRef(null);
  const [vehiclePannel, setvehiclePannel] = useState(false);
  const [vehicleFound, setvehicleFound] = useState(false);
  const [confirmRidePannel, setConfirmRidePannel] = useState(false);
  const panelCloseRef = useRef(null);
  const vehiclePannelRef = useRef(null);
  const confirmRidePannelRef = useRef(null);
  const vehicleFoundRef = useRef(null);
  const waitingForDriverRef = useRef(null);
  const [waitingForDriver, setWaitingForDriver] = useState(false);
  const submitHandler = (e) => {
    e.preventDefault();
  };
  useGSAP(
    function () {
      if (pannelOpen) {
        gsap.to(panelRef.current, {
          height: "70%",
          opacity: 1,
          padding: 20,
        });
        gsap.to(panelCloseRef.current, {
          opacity: 1,
        });
      } else {
        gsap.to(panelRef.current, {
          height: "0%",
          opacity: 0,
          padding: 0,
        });
        gsap.to(panelCloseRef.current, {
          opacity: 0,
        });
      }
    },
    [pannelOpen]
  );
  useGSAP(
    function () {
      if (vehiclePannel) {
        gsap.to(vehiclePannelRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(vehiclePannelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [vehiclePannel]
  );
  useGSAP(
    function () {
      if (confirmRidePannel) {
        gsap.to(confirmRidePannelRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(confirmRidePannelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [confirmRidePannel]
  );

  useGSAP(
    function () {
      if (confirmRidePannel) {
        gsap.to(confirmRidePannelRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(confirmRidePannelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [confirmRidePannel]
  );
  useGSAP(
    function () {
      if (vehicleFound) {
        gsap.to(vehicleFoundRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(vehicleFoundRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [vehicleFound]
  );
  useGSAP(
    function () {
      if (waitingForDriver) {
        gsap.to(waitingForDriverRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(waitingForDriverRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [waitingForDriver]
  );
  return (
    <div className="h-screen relative overflow-hidden">
      <img
        className="w-16 absolute left-5 top-5"
        src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
      />
      <div className="h-screen w-screen">
        {/* Image for temp  */}
        <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt=""
        />
      </div>
      <div className=" flex flex-col justify-end h-screen absolute top-0  w-full ">
        <div className="h-[30%] p-6 bg-white relative">
          {" "}
          <h5
            ref={panelCloseRef}
            onClick={() => {
              setPannelOpen(false);
            }}
            className="absolute top-6 right-6 text-2xl opacity-0"
          >
            <i className="ri-arrow-down-wide-line"></i>
          </h5>
          <h4 className="text-2xl font-semibold">Find a trip</h4>
          <form
            onSubmit={(e) => {
              submitHandler(e);
            }}
          >
            <div className="line absolute h-16 w-1 top-[45%] left-10 bg-gray-900 rounded-full"></div>
            <input
              onClick={() => {
                setPannelOpen(true);
              }}
              className="bg-[#eee] px-12 py-3 text-base mt-5 rounded-lg w-full"
              type="text"
              value={pickup}
              onChange={(e) => {
                e.target.value;
              }}
              placeholder="Add a pick up location"
            />
            <input
              className="bg-[#eee] px-12 py-3 mt-3 text-base rounded-lg w-full"
              type="text"
              value={destination}
              onClick={() => {
                setPannelOpen(true);
              }}
              placeholder="Enter your destination"
              onChange={(e) => {
                e.target.value;
              }}
            />
          </form>
        </div>
        <div ref={panelRef} className="  bg-white h-0 ">
          <LocationSearchPannel
            setvehiclePannel={setvehiclePannel}
            setPannelOpen={setPannelOpen}
          />
        </div>
      </div>
      <div
        ref={vehiclePannelRef}
        className="fixed w-full z-10 translate-y-full bottom-0 bg-white p-3 py-6 pt-12"
      >
        <VehiclePannel
          setvehiclePannel={setvehiclePannel}
          setConfirmRidePannel={setConfirmRidePannel}
        />
      </div>
      <div
        ref={confirmRidePannelRef}
        className="fixed w-full z-10 translate-y-full bottom-0 bg-white p-3 py-6 pt-12"
      >
        <ConfirmeRide
          setvehicleFound={setvehicleFound}
          setConfirmRidePannel={setConfirmRidePannel}
        />
      </div>
      <div
        ref={vehicleFoundRef}
        className="fixed w-full z-10 translate-y-full bottom-0 bg-white p-3 py-6 pt-12"
      >
        <LookingForDriver
          setvehicleFound={setvehicleFound}
          setConfirmRidePannel={setConfirmRidePannel}
        />
      </div>
      <div
        ref={waitingForDriverRef}
        className="fixed w-full z-10  bottom-0 bg-white p-3 py-6 pt-12"
      >
        <WaitingForDriver waitingForDriver={waitingForDriver} />
      </div>
    </div>
  );
};

export default Home;
