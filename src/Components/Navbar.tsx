import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleInfo,
  faCoffee,
  faGear,
  faHouse,
  faLink,
  faMessage,
  faPeopleArrows,
  faRightFromBracket,
  faWallet,
} from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  return (
    <div className="p-6">
      {/* Logo */}
      <div className="logo flex w-full bg-red-600 items-center ">
        <FontAwesomeIcon icon={faLink} className="text-2xl" />
        <h3 className="text-2xl ml-4">Lovelink</h3>
      </div>

      {/* Navlinks */}
      <div className="nav-one mt-8 mb-10 border-b border-gray-200">
        <div className="nav-three flex mb-4 items-center ">
          <FontAwesomeIcon icon={faHouse} className="text-secondary"/>
          <p className="ml-4 text-secondary">Discover</p>
        </div>
        <div className="nav-three flex mb-4 items-center ">
          <FontAwesomeIcon icon={faPeopleArrows} />
          <p className="ml-4">Matches</p>
        </div>
        <div className="nav-three flex mb-4 items-center ">
          <FontAwesomeIcon icon={faMessage} />
          <p className="ml-4">Chat Requests</p>
        </div>
        <div className="nav-three flex items-center mb-8">
          <FontAwesomeIcon icon={faWallet} />
          <p className="ml-4">Subscriptions</p>
        </div>
      </div>

      <div className="nav-two mb-8">
        <h4 className="mb-4 font-semibold text-zinc-700">Support</h4>
        <div className="flex mb-4 items-center ">
          <FontAwesomeIcon icon={faGear} />
          <p className="ml-4">Settings</p>
        </div>
        <div className="flex mb-4 items-center ">
          <FontAwesomeIcon icon={faCircleInfo} />
          <p className="ml-4">Help</p>
        </div>
      </div>

      <div className="nav-three flex items-center mt-6">
        <FontAwesomeIcon icon={faRightFromBracket} />
        <p className="ml-4">Logout</p>
      </div>
    </div>
  );
}

export default Navbar;
