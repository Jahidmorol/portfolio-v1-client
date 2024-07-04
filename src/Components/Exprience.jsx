/* eslint-disable react/no-unescaped-entities */
import { PiBriefcaseDuotone } from "react-icons/pi";
import { MdCastForEducation } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { useGetExperienceQuery, useGetSkillsQuery } from "../redux/api/apis";

const Exprience = () => {
  const { data } = useGetSkillsQuery(undefined);
  const { data: experienceData } = useGetExperienceQuery(undefined);
  return (
    <div>
      <div
        id="experience"
        className="bg-gradient-to-b from-gray-800 to-black w-full "
      >
        <div className="max-w-screen-lg mx-auto p-4 md:p-0 md:pt-16 flex flex-col justify-center w-full  text-white">
          <p className="text-4xl font-bold inline pt-0 md:pt-4  border-b-4 border-biol border-gray-500">
            Experience
          </p>
          <p className="py-2">These are the technologies I've worked with</p>

          <div className="flex justify-between gap-10 pt-10 flex-col md:flex-row">
            <div className="w-full md:w-2/4">
              <h1
                data-aos="zoom-in"
                data-aos-easing="ease-in-out"
                data-aos-duration="1500"
                className="text-2xl pb-3 font-semibold"
              >
                Front-End Skill
              </h1>
              {data?.data?.getFrontendSkill?.map((skill, i) => (
                <div
                  data-aos="zoom-in"
                  data-aos-easing="ease-in-out"
                  data-aos-duration="1500"
                  key={i}
                >
                  <div className="flex items-center justify-between">
                    <h1>{skill?.name}</h1>
                    <h1>{skill?.percentage}%</h1>
                  </div>
                  <progress
                    className="progress progress-primary"
                    value={skill?.percentage}
                    max="100"
                  ></progress>
                </div>
              ))}
            </div>
            <div className="w-full md:w-2/4">
              <h1
                data-aos="zoom-in"
                data-aos-easing="ease-in-out"
                data-aos-duration="1500"
                className="text-2xl pb-3 font-semibold"
              >
                Back-End Skill
              </h1>

              {data?.data?.getBackendSkill?.map((skill, i) => (
                <div
                  data-aos="zoom-in"
                  data-aos-easing="ease-in-out"
                  data-aos-duration="1500"
                  key={i}
                >
                  <div className="flex items-center justify-between">
                    <h1>{skill?.name}</h1>
                    <h1>{skill?.percentage}%</h1>
                  </div>
                  <progress
                    className="progress progress-primary"
                    value={skill?.percentage}
                    max="100"
                  ></progress>
                </div>
              ))}
            </div>
          </div>
          <h1
            data-aos="zoom-in"
            data-aos-easing="ease-in-out"
            data-aos-duration="1500"
            onClick={() => document.getElementById("my_modal_3").showModal()}
            className="px-5 border-2 cursor-pointer w-fit mx-auto mt-8 rounded text-cyan-500 border-sky-500 py-1 duration-200 font-semibold text-lg"
          >
            Experience & Education
          </h1>
        </div>
      </div>

      <dialog id="my_modal_3" className="modal">
        <div className="modal-box py-4 max-w-[90vw] h-full">
          <div className="flex items-center justify-between pt-2">
            <h3 className="font-bold text-lg">Experience & Education!</h3>
            <form method="dialog">
              <button>
                <RxCross2 size={26} />
              </button>
            </form>
          </div>
          <div className="flex justify-center flex-col md:flex-row gap-6 mt-6">
            <div className="w-full md:w-[40%]">
              {experienceData?.data?.map((experience, i) => (
                <div key={i} className="flex gap-4">
                  <PiBriefcaseDuotone className="mt-1" size={26} />
                  <div>
                    <h1>2024 - Present</h1>
                    <p className="text-lg font-semibold mt-2">
                      Web Application Developer - {experience?.name}
                    </p>
                    <p className="text-[17px] font-medium mt-2">
                      Work as a {experience?.position} at {experience?.name}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="w-full md:w-[60%]">
              <div className="flex gap-4">
                <MdCastForEducation className="mt-1" size={26} />
                <div>
                  <h1>Running</h1>
                  <p className="text-lg font-semibold mt-2">
                    CSE - University Of Scholars
                  </p>
                  <p className="text-[17px] font-medium mt-2">
                    Studying Computer Science and Engineering at University Of
                    Scholars
                  </p>
                </div>
              </div>
              <div className="flex gap-4 mt-5">
                <MdCastForEducation className="mt-1" size={26} />
                <div>
                  <h1>2019 - 2021</h1>
                  <p className="text-lg font-semibold mt-2">
                    HSC - Gazipur Mahanagar College (GMC)
                  </p>
                  <p className="text-[17px] font-medium mt-2">
                    Studied Higher Secondary School Certificate at Gazipur
                    Mahanagar College
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Exprience;
