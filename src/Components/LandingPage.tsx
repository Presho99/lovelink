import React, { useState, useEffect } from "react";
import profileData from "../data/dataProfiles.json";
import Navbar from "./Navbar";
import MainSection from "./MainSection";
import Hamburger from "./Hamburger";
import Message from "./Message";
import MessageIcons from "./MessageIcons";

interface Profile {
  id: number;
  name: string;
  age: number;
  gender: string;
  location: string;
  avatar: string;
  bio: string;
}

function LandingPage() {
  const [profiles, setProfiles] = useState<Profile[]>([]);

  useEffect(() => {
    fetch("/data/dataProfiles.json")
      .then((response) => response.json())
      .then((data) => setProfiles(data));
  }, []);
  return (
    <div className=" flex flex-row">
      <div className="w-1/4 h-screen">
        <Navbar />
      </div>
      <div className="w-1/2 bg-mainsection">
        <MainSection />
      </div>
      <div className="w-1/4">
        <Message />
      </div>
    </div>
  );
}

export default LandingPage;
