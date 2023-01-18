import React from "react";
import "./Home.css";
import main from "../component/Images/main.jpeg" 
import main1 from "../component/Images/main1.png" 
import main3 from "../component/Images/main3.jpg" 
import ty from "../component/Images/ty.jpeg" 


export const Home = () => {
  return (
    <div className="home"   >
      <img src={main} alt="error" />
      <img src={main1} alt="error" />
      <img src={main3} alt="error" />
      <img src={ty} alt="error" />
       
    </div>
   
  );
};
