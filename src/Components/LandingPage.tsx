import React, { useState, useEffect } from "react";
// import {profileData} from "../data/dataProfiles.json";
import Navbar from "./Navbar";
import MainSection from "./MainSection";
import Hamburger from "./Hamburger";
import Message from "./Message";
import MessageIcons from "./MessageIcons";
import {Profile} from '../types/types'




function LandingPage() {
  const [profiles, setProfiles] = useState<Profile[]>([]);

  useEffect(() => {
    fetch('https://presho99.github.io/profiles/profiledata')
      .then((response) => response.json())
       .then((data) => {
        setProfiles(data.profileData);
      
      })
      .catch((error) => console.error('Error fetching data', error))
  }, []);
  return (
    <div className=" flex flex-row">
      <div className="w-1/6 h-screen">
        <Navbar />
      </div>
      <div className="w-7/12 bg-mainsection">
        <MainSection profiles={profiles} />
      </div>
      <div className="w-1/4 bg-mainsection">
        <Message profiles={profiles}/>
      </div>
    </div>
  );
}

export default LandingPage;
