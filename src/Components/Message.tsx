import { faBell, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Profile } from "../types/types";
import FollowButton from "./FollowButton";
import '../styles/custom-styles.css'


function shuffleArray(array: Profile[]) {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = shuffledArray[i];
    shuffledArray[i] = shuffledArray[j];
    shuffledArray[j] = temp;
  }
  return shuffledArray;
}
interface MessageProps {
  profiles: Profile[];
}

function Message({ profiles }: MessageProps) {
  console.log(profiles);

  if (!Array.isArray(profiles)) {
    return <div>No profiles available.</div>;
  }

  const shuffledProfiles = shuffleArray(profiles)
  const randomRecommendations = shuffledProfiles.slice(0, 3)

  return (
    <div className="p-2 ">
      <div className="flex w-full  px-4 items-center justify-center">
        {/* notification icon */}
        <div className="w-1/5">
          <FontAwesomeIcon
            icon={faBell}
            className="text-2xl cursor-pointer text-secondary "
          />
        </div>
        {/*  profile */}
        <div className="flex items-center justify-between ml-8 w-4/5">
          <img
            src="https://images.pexels.com/photos/7275385/pexels-photo-7275385.jpeg?auto=compress&cs=tinysrgb&w=400"
            className="w-16 h-16 object-cover rounded-full cursor-pointer"
          />
          <div>
            <h3>Precious Omondi</h3>
            <p className="text-texts">@presho99</p>
          </div>
          <FontAwesomeIcon
            icon={faCaretDown}
            className="cursor-pointer text-secondary"
          />
        </div>
      </div>

      {/* You might like */}
      <div className="w-full  flex flex-col shadow-gray-400 mt-6 p-2 custom-shadow bg-white rounded-md" >
        <div className="flex mb-2">
          <h3 className="w-4/5 text-xl font-bold">Recommended</h3>
          <p className="font-semibold text-texts cursor-pointer">See all</p>
        </div>
        {randomRecommendations.map((profile) => (
          <div key={profile.id} className="flex mb-2 items-center justify-between">
            <div className="flex w-3/5 items-center ">
              <img
                src={profile.avatar}
                alt={profile.name}
              
                className="w-16 h-16 object-cover rounded-full cursor-pointer"
              />
              <h2 className="ml-2 cursor-pointer">{profile.name}</h2>
            </div>

            <div className="">
            <FollowButton />
            </div>

           
          </div>
        ))}
      </div>

      {/* Profile views */}
      <div className="flex flex-col">
          <h3>Profile views</h3>
          <div></div>
      </div>
    </div>
  );
}

export default Message;
