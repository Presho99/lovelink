import React from "react";
import { Profile } from "../types/types";
import "../styles/custom-styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

interface MainSectionProps {
  profiles: Profile[];
}

function MainSection({ profiles }: MainSectionProps) {
  console.log(profiles);

  if (!Array.isArray(profiles) || profiles.length === 0) {
    return (
      <div className="p-6 h-screen">
        
        <div className="flex mb-8">
        {/* search bar */}
        <div className="ui search w-4/5">
          <input
            className="prompt"
            type="text"
            placeholder="Search username..."
          />
        </div>
        {/* upgrade button */}
        <button className="w-1/5 bg-secondary rounded-full text-white">
          Upgrade Now
        </button>
      </div>
         
       <div className="ui three cards">
          {[...Array(12)].map((_, index) => (
            <div key={index} className="ui card">
              <div className="content">
                <div className="ui placeholder">
                  <div className="square image"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
    
      </div>
    );
  
  }

  return (
    <div className="p-6 h-screen">
      <div className="flex ">
        {/* search bar */}
        <div className="ui search w-4/5">
          <input
            className="prompt"
            type="text"
            placeholder="Search username..."
          />
        </div>
        {/* upgrade button */}
        <button className="w-1/5 bg-secondary rounded-full text-white">
          Upgrade Now
        </button>
      </div>

      {/* profiles */}
      <div className="flex h-full mt-6  flex-wrap justify-center  overflow-auto ">
        {profiles.map((person) => (
          <div
            key={person.id}
            className="w-60 h-72 m-2 relative  p-2 fixed inset-0 card-radius"
            style={{
              backgroundImage: `url(${person.avatar})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="absolute inset-0 bg-black opacity-20 card-radius"></div>
            <div className="absolute z-10 text-white flex w-full bottom-4 items-center">
              <div className="">
                <h2 className="font-semibold text-xl text-lighttext ">
                  {person.name},{" "}
                </h2>
                <p className="text-lighttext">{person.age}</p>
              </div>

              <div className="absolute right-5">
                <button className="bg-secondary p-2 rounded-full flex justify-center items-center">
                  <FontAwesomeIcon icon={faEye} className="text-xl text-lighttext"/>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MainSection;
