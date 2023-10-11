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
      <div className="logo flex w-full items-center cursor-pointer">
        <FontAwesomeIcon icon={faLink} className="text-2xl bold" />
        <h3 className="text-2xl ml-4 bold">Lovelink</h3>
      </div>

      {/* Navlinks */}
      <div className="nav-one mt-8 mb-10 border-b border-gray-200">
        <div className="nav-three flex mb-4 items-center  cursor-pointer">
          <FontAwesomeIcon icon={faHouse} className="text-secondary"/>
          <p className="ml-4 text-secondary">Discover</p>
        </div>
        <div className="nav-three flex mb-4 items-center  cursor-pointer">
          <FontAwesomeIcon icon={faPeopleArrows} className="text-texts" />
          <p className="ml-4 text-texts font-semibold">Matches</p>
        </div>
        <div className="nav-three flex mb-4 items-center  cursor-pointer">
          <FontAwesomeIcon icon={faMessage} className="text-texts" />
          <p className="ml-4 text-texts font-semibold">Chat Requests</p>
        </div>
        <div className="nav-three flex items-center mb-8 cursor-pointer">
          <FontAwesomeIcon icon={faWallet} className="text-texts" />
          <p className="ml-4 text-texts font-semibold">Subscriptions</p>
        </div>
      </div>

      <div className="nav-two mb-8">
        <h4 className="mb-4 font-semibold text-zinc-700">Support</h4>
        <div className="flex mb-4 items-center cursor-pointer">
          <FontAwesomeIcon icon={faGear} className="text-texts" />
          <p className="ml-4 text-texts font-semibold">Settings</p>
        </div>
        <div className="flex mb-4 items-center cursor-pointer">
          <FontAwesomeIcon icon={faCircleInfo} className="text-texts" />
          <p className="ml-4 text-texts font-semibold">Help</p>
        </div>
      </div>

      <div className="nav-three flex items-center mt-6 cursor-pointer">
        <FontAwesomeIcon icon={faRightFromBracket} className="text-texts" />
        <p className="ml-4 text-texts font-semibold">Logout</p>
      </div>
    </div>
  );
}

export default Navbar;
