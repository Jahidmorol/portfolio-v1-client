import {
  FaFacebook,
  FaGithub,
  FaJsSquare,
  FaLinkedinIn,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import { SiMongodb, SiNextdotjs } from "react-icons/si";

const About = () => {
  return (
    <div
      id="about"
      className="w-full bg-gradient-to-b from-gray-900 to-gray-800 text-white"
    >
      <div className="pt-28">
        <div className="max-w-screen-lg mx-auto">
          <div className="flex flex-col lg:flex-row p-8 justify-center items-center gap-8 w-full pb-16">
            {/* <div className="lg:w-2/4 h-full">
              <img className="h-full rounded-lg" src={profile} alt="" />
            </div> */}
            <div className="h-full lg:h-[28rem] lg:w-[28rem]">
              <img
                src="https://i.ibb.co/CtjVFXW/jahid-prof.jpg"
                alt="Gif"
                className="h-full rounded-lg"
              />
            </div>
            <div className="flex flex-col items-start lg:w-2/4 mt-6 lg:mt-0">
              <h2 className="lg:text-4xl text-3xl text-[#0CB0D8] font-bold ">
                Jahid Hasan Zarif
              </h2>
              <p className=" text-sm">Web Developer</p>
              <div className="text-center lg:text-left w-full my-4">
                <p
                  //
                  className="text-left text-base text-gray-300 w-full "
                >
                  Hi I am a Web Stack developer And I can build your website as
                  you want.
                  <br />
                  <br />
                  Creative problem solver with demonstrated ability to work on
                  multiple projects simultaneously.Positive driven and confident
                  individual with an apt for learning new technology.{" "}
                </p>
              </div>
              <div className="mb-3">
                <h2 className="text-2xl font-semibold text-[#0CB0D8]">
                  Contact Information
                </h2>
                <div className="text-gray-300">
                  Email : jahidmorol2@gmail.com <br /> Phone : +88 01719064743{" "}
                  <br /> Address : Dhaka, Bangladesh
                </div>
              </div>
              <div className="flex flex-col lg:flex-row gap-10 lg:gap-10 justify-between pr-0 lg:pr-36 mt-3">
                <div>
                  <h5 className="text-left mb-3 uppercase tracking-wide">
                    Find Me
                  </h5>
                  <div className="flex gap-3">
                    <a
                      href="https://github.com/mehedihasan8"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="shadow-2xl bg-black p-2 rounded-md hover:bg-white hover:text-black">
                        <FaGithub fontSize={20} />
                      </div>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/mehedihasanfoysal8/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="shadow-2xl bg-black p-2 rounded-md hover:bg-white hover:text-black">
                        <FaLinkedinIn fontSize={20} />
                      </div>
                    </a>
                    <a
                      href="https://www.facebook.com/mehedihasanfoysal8/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="shadow-2xl bg-black p-2 rounded-md hover:bg-white hover:text-black">
                        <FaFacebook fontSize={20} />
                      </div>
                    </a>
                  </div>
                </div>
                <div>
                  <h5 className="text-left mb-3 uppercase tracking-wide">
                    Best skills
                  </h5>
                  <div className="flex gap-5">
                    <div
                      className="shadow-2xl bg-black text-blue-500 p-2 rounded-md
                    hover:bg-white"
                    >
                      <i className="fa-brands fa-react"></i>
                      <FaReact fontSize={20} />
                    </div>

                    <div
                      className="shadow-2xl bg-black text-white p-2 rounded-md
                    hover:bg-white hover:text-black"
                    >
                      <SiNextdotjs fontSize={20} />
                    </div>
                    <div
                      className="shadow-2xl bg-black text-yellow-500 p-2 rounded-md
                    hover:bg-white hover:text-black"
                    >
                      <FaJsSquare fontSize={20} />
                    </div>

                    <div
                      className="shadow-2xl bg-black text-green-500 p-2 rounded-md
                    hover:bg-white hover:text-green-500"
                    >
                      <FaNodeJs fontSize={20} />
                    </div>
                    <div
                      className="shadow-2xl bg-black text-blue-500 p-2 rounded-md
                    hover:bg-white hover:text-blue-500"
                    >
                      <SiMongodb fontSize={20} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
