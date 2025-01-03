import Marquee from "react-fast-marquee";
import { CgNpm } from "react-icons/cg";
import { DiMongodb } from "react-icons/di";
import { FaCss3, FaHtml5, FaJava, FaReact } from "react-icons/fa";
import { GiDaisy } from "react-icons/gi";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiAxios, SiReactrouter } from "react-icons/si";

const Tech = () => {
  return (
    <Marquee>
      <FaHtml5 className="text-8xl ml-8" />
      <FaCss3 className="text-8xl ml-16" />
      <RiTailwindCssFill className="text-8xl ml-16" />
      <GiDaisy className="text-8xl ml-16" />
      <FaJava className="text-8xl ml-16" />
      <FaReact className="text-8xl ml-16" />
      <CgNpm className="text-8xl ml-16" />
      <SiReactrouter className="text-8xl ml-16" />
      <SiAxios className="text-8xl ml-16" />
      <DiMongodb className="text-8xl ml-16" />
    </Marquee>
  );
};

export default Tech;
