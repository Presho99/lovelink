import React from "react";
import { Profile } from "../types/types";

interface MainSectionProps {
  profiles: Profile[];
}

function MainSection({ profiles }: MainSectionProps) {
  console.log(profiles);

  if (!Array.isArray(profiles)) {
    return <div>No profiles available.</div>;
  }

  return (
    <div className="p-6 h-full">
      <div className="flex h-1/8">
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
      <div className="flex h-4/5 mt-6 bg-red-400 flex-wrap justify-center ">
        {profiles.map((person) => (
          <div
            key={person.id}
            className="w-60 h-60 m-2 relative rounded-md p-2"
            style={{ backgroundImage: `url(${person.avatar})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}
          >
            <div className="absolute">
              <h2>{person.name}</h2>
              <p>{person.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MainSection;
