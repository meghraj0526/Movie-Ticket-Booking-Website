import React from "react";
import { assets } from "../assets/assets";
import {
  ArrowRight,
  Calendar,
  CalendarIcon,
  Clock,
  ClockIcon,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <div className='flex flex-col items-start justify-center gap-4 px-6 md:px-16 lg:px-36 bg-[url("/batman.jpg")] bg-cover bg-center h-screen'>
      <img src={assets.Dclogo} alt="" className="max-h-11 lg:h-11 mt-20" />
      <h1 className="text-5xl md:text-[70px] md:leading-18 font-semibold max-w-110">
        BATMAN
      </h1>
      <div className="flex items-center gap-4 text-gray-300">
        <span>Action | Crime | Drama </span>
        <div className="flex items-center gap-1">
          <CalendarIcon className="w-4.5 h-4.5" /> 2022
        </div>
        <div className="flex items-center gap-1">
          <ClockIcon className="w-4.5 h-4.5" /> 2h 56m
        </div>
      </div>
      <p className="max-w-md text-gray-300">
        In a dark, crime-ridden Gotham, a reclusive vigilante investigates a
        series of brutal murders tied to a corrupt underworld. As he uncovers
        shocking secrets, Batman must confront a twisted conspiracy, test his
        limits, and face the shadowy figures controlling the city.
      </p>
      <button
        onClick={() => navigate("./Movies")}
        className="flex items-center gap-1 px-6 py-3 text-sm bg-primary hover:bg-primary-dull transition rounded-full font-medium cursor-pointer"
      >
        Explore Movies
        <ArrowRight className="w-5 h-5" />
      </button>
    </div>
  );
};

export default HeroSection;
