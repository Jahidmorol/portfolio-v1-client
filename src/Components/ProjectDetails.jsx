import { useEffect, useState } from "react";
import "./ProjectDetails.css";
import { useParams } from "react-router-dom";

const ProjectDetails = () => {
  const { id } = useParams();
  const [singleProjects, setSingleProjects] = useState();
  useEffect(() => {
    fetch(`http://localhost:5000/api/projects/${id}`)
      .then((res) => res.json())
      .then((data) => setSingleProjects(data?.data));
  }, [id]);
  const sentences = singleProjects?.description
    .split(".")
    .map((sentence) => sentence.trim())
    .filter((sentence) => sentence.length > 0);
  console.log(singleProjects);
  return (
    <div
      id="projectditails"
      className="detail-card w-full flex flex-col bg-gradient-to-b from-gray-700 via-black to-gray-800 pt-36"
    >
      <div
        data-aos="zoom-in-right"
        data-aos-duration="1500"
        className="inside-detail max-w-screen-lg mx-auto flex flex-col text-white lg:flex-row justify-center items-start gap-8 text-left mb-20"
      >
        <div className="image-detail w-full h-[35rem] lg:w-1/2 lg:h-full rounded-xl overflow-hidden">
          <img src={singleProjects?.image} alt="" />
        </div>
        <div className="w-full lg:w-1/2 flex flex-col  justify-center">
          <div>
            <div className="flex justify-evenly items-center">
              <h2 className="font-semibold text-base  text-secondary">
                {singleProjects?.title}
              </h2>
              <h1 className="font-bold text-2xl  text-[#0097e6] ">
                {singleProjects?.team}
              </h1>
            </div>
            <h2 className="project-title text-accent font-semibold text-xl my-4">
              {singleProjects?.name}
            </h2>
            <div className="my-4">
              <h3 className=" text-secondary">Project Overview</h3>
              {sentences?.map((point, index) => (
                <p key={index} className="text-accent">
                  {index + 1}. {point}
                </p>
              ))}
            </div>
            <div className="my-5">
              <h3 className=" text-secondary">Technology used</h3>
              <div className="flex flex-wrap gap-2">
                {singleProjects?.tech?.map((point, index) => (
                  <button
                    key={index}
                    data-aos="zoom-in"
                    data-aos-duration="1500"
                    className="bg-slate-500 hover:text-[#0097e6] text-white px-2 py-1 rounded shadow-2xl"
                  >
                    {point}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-duration="1500"
            className="button-content flex justify-between mt-5"
          >
            <a
              href={singleProjects?.liveLink}
              target="_blank"
              rel="noreferrer"
              className="project-button text-[10px] lg:text-[12px]"
            >
              <i className="text-sm text-secondary mr-2 fa-solid fa-circle-dot"></i>
              View Live
            </a>
            <a
              href={singleProjects?.githubClient}
              target="_blank"
              rel="noreferrer"
              className="project-button text-[10px] lg:text-[12px]"
            >
              <i className="text-sm text-secondary mr-2 fa-brands fa-github"></i>
              Client Code
            </a>
            <a
              href={singleProjects?.githubServer}
              target="_blank"
              rel="noreferrer"
              className="project-button text-[10px] lg:text-[12px]"
            >
              {" "}
              <i className="text-sm text-secondary mr-2 fa-brands fa-github"></i>
              Server Code
            </a>
          </div>
        </div>
      </div>

      {/* <div className=" max-w-screen-lg px-8 md:px-0 mb-20">
        <p className="text-white text-center font-bold text-xl lg:text-5xl mb-16 ">
          Project Screenshots
        </p>
        <div className="screenshot w-full grid grid-cols-1 lg:grid-cols-2 gap-6">
          {screenshots?.map((screenshot) => (
            <img
              key={screenshot.id}
              data-aos="zoom-in"
              data-aos-duration="1500"
              className="w-full rounded-2xl"
              src={screenshot}
              alt=""
            />
          ))}
        </div>
      </div> */}
    </div>
  );
};

export default ProjectDetails;
