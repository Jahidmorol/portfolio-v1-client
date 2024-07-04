import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-scroll";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Hero = () => {
  const [text] = useTypewriter({
    words: [
      "Mern Developer",
      "React.JS Developer",
      "Frontend Developer",
      "Backend Developer",
    ],
    loop: 0,
    typeSpeed: "140",
    deleteSpeed: "60",
    delaySpeed: "60",
  });
  return (
    <div
      id="home"
      className=" w-full bg-gradient-to-b from-black via-black to-gray-800 pt-8"
    >
      <div className="pt-10 lg:pt-20 max-w-screen-lg mx-auto flex flex-col justify-center items-center md:flex-row">
        <div className="flex flex-col justify-center flex-grow lg:mt-4 mb-0 md:mb-[14px]">
          <p className="uppercase font-bold mt-7 md:mt-0 pt-8 md:pt-0  text-center lg:text-left text-3xl lg:text-[35px] text-white leading-snug">
            Hi, I am{" "}
            <span className="text-[#0CB0D8] font-extrabold">
              Jahid Hasan Zarif
            </span>
          </p>
          <p
            data-aos="fade-down-right"
            data-aos-duration="1000"
            className="uppercase font-bold md:mt-0 mb-3  md:pt-0  text-center lg:text-left text-3xl lg:text-[45px] text-white leading-snug"
          >
            <span>A {text}</span>
            <Cursor cursorColor="#0CB0D8" />
          </p>
          <p
            data-aos="fade-down-left"
            data-aos-duration="1000"
            className="text-gray-400 hover:text-white text-center md:text-left max-w-lg px-4 md:px-0"
          >
            Hi there, I am Jahid Hasan Zarif. A junior web developer and
            Programmer. I love to explore new things. I am willing to accept
            challenges to improve myself more and more. Currently I love to work
            on web applications using technologies like React, Tailwind css etc.
          </p>
          <div
            data-aos="fade-down-right"
            data-aos-duration="1000"
            className="flex justify-center md:justify-start items-center my-4 lg:mt-4"
          >
            <div className="flex space-x-6">
              <div className="flex justify-center md:justify-start mb-3">
                <a
                  href="https://drive.google.com/file/d/1BwT6yQ6gkCSkkhSyp5G4-L1Ve5qbUNq-/view?usp=sharing"
                  target="blank"
                >
                  <button className="text-white  w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 hover:to-cyan-500 hover:from-blue-500 cursor-pointer">
                    My Resume
                    <span>
                      <BsFillPersonLinesFill size={25} className="ml-1" />
                    </span>
                  </button>
                </a>
              </div>
              <div className="flex justify-center md:justify-start mb-3">
                <Link
                  to="contact"
                  smooth
                  duration={500}
                  className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 hover:to-cyan-500 hover:from-blue-500 cursor-pointer"
                >
                  Hire Me
                  <span className="group-hover:rotate-90 duration-300">
                    <FaArrowRight size={25} className="ml-1" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div
          data-aos="zoom-in"
          data-aos-duration="2000"
          className="w-[22rem] lg:h-[28rem] lg:w-[28rem]"
        >
          <img
            src="https://i.ibb.co/CtjVFXW/jahid-prof.jpg"
            alt="Gif"
            className="rounded-2xl mx-auto md:w-full h-full object-cover md:pb-0"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
