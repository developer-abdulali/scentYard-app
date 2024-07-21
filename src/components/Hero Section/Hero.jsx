import React from "react";
import HeroImg1 from "../../assets/heroImgs/1.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="w-full">
      <Link to="/products">
        <img
          src={HeroImg1}
          alt="Hero Banner"
          className="w-full h-auto lg:h-[52rem] object-cover object-center"
        />
      </Link>
    </div>
  );
};

export default Hero;
