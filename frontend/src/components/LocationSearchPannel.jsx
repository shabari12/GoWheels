import React from "react";

const LocationSearchPannel = (props) => {
  console.log(props);
  const locations = [
    "24B, Near Kappors Cafe,Sheryians Codin SChool,Bhopal",
    "241B, Near Vignesh Cafe,KVS SChool,Tamil Nadu",
    "2B, Near Vaisu Cafe,Mahatma  SChool,Tamil Nadu",
    "5B, Near Restro Cafe,MSP Park,Banglore",
  ];

  return (
    <div>
      {locations.map((elem, index) => (
        <div
          onClick={() => {
            props.setvehiclePannel(true);
            props.setPannelOpen(false)
          }}
          key={index}
          className="flex gap-4 border-2 p-3 border-gray-50 active:border-black rounded-xl items-center my-2 justify-start"
        >
          <h2 className="bg-[#eee] h-8 flex items-center justify-center w-12 rounded-full">
            <i className="ri-map-pin-line"></i>
          </h2>
          <h4 className="font-medium">{elem}</h4>
        </div>
      ))}
    </div>
  );
};

export default LocationSearchPannel;
