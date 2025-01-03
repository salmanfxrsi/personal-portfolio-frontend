import { Link } from "react-router-dom";
import { LuFacebook } from "react-icons/lu";
import { VscGithub } from "react-icons/vsc";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { IoNewspaperOutline } from "react-icons/io5";

const Banner = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-6 lg:gap-0 justify-between items-center">
      {/* Details */}
      <div className="flex-1">
        {/* Greeting */}
        <div className="mb-16">
          <h5 className="font-medium mb-5 text-sm text-white">
            WELCOME TO MY CODING WORLD
          </h5>
          <h1 className="text-white text-6xl font-bold mb-[22px]">
            Hey, I&apos;m <span className="text-[#ff014f]">Salman Farsi</span>{" "}
            <br /> a Front End Developer
          </h1>
          <p className="text-opacity-90">
            As a MERN Stack Developer, I build dynamic and scalable web
            applications using MongoDB, Express.js, React, and Node.js. I create
            efficient, high-performance solutions with a focus on seamless user
            experiences, handling both front-end and back-end development.
          </p>
        </div>
        {/* Link and Button */}
        <div className="flex gap-24 items-center">
          {/* Link Section */}
          <div>
            <h5 className="uppercase text-white opacity-90">Find With Me</h5>
            {/* Social Links */}
            <div className="flex gap-5 mt-5">
              <Link className="w-[60px] h-[60px] text-sm rounded-md bg-[linear-gradient(to_right_bottom,#212428,#16181c)] hover:translate-y-[-6px] transition-transform duration-500 shadow-2xl font-black">
                <VscGithub className="text-3xl mt-[13px] ml-[14px]" />
              </Link>
              <Link className="w-[60px] h-[60px] text-sm rounded-md bg-[linear-gradient(to_right_bottom,#212428,#16181c)] hover:translate-y-[-6px] transition-transform duration-500 shadow-2xl font-black">
                <FaLinkedin className="text-3xl mt-[13px] ml-[14px]" />
              </Link>
              <Link className="w-[60px] h-[60px] text-sm rounded-md bg-[linear-gradient(to_right_bottom,#212428,#16181c)] hover:translate-y-[-6px] transition-transform duration-500 shadow-2xl font-black">
                <FaInstagram className="text-3xl mt-[13px] ml-[14px]" />
              </Link>
              <Link className="w-[60px] h-[60px] text-sm rounded-md bg-[linear-gradient(to_right_bottom,#212428,#16181c)] hover:translate-y-[-6px] transition-transform duration-500 shadow-2xl font-black">
                <LuFacebook className="text-3xl mt-[13px] ml-[14px]" />
              </Link>
              <Link className="w-[60px] h-[60px] text-sm rounded-md bg-[linear-gradient(to_right_bottom,#212428,#16181c)] hover:translate-y-[-6px] transition-transform duration-500 shadow-2xl font-black">
                <IoNewspaperOutline className="text-3xl mt-[13px] ml-[14px]" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Image */}
      <div className="flex-1">
        <img
          className="h-[600px] mx-auto rounded-3xl"
          src="https://i.ibb.co.com/1ZPb7CM/myself.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
