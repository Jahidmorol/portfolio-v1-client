// import car_toy_img from "../assets/toy-car-ce3f5.web.app_ (1).png";
// import flex_code_img from "../assets/flex-code-6541d.web.app_.png";
// import yoga_img from "../assets/simple-firebase-project-a5441.web.app_.png";
import "./Protfoliol.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useGetProjectsQuery } from "../redux/api/apis";

const Protfolio = () => {
  const { data } = useGetProjectsQuery(undefined);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  // const portfolios = [
  //   {
  //     id: 1,
  //     src: flex_code_img,
  //     name: "Flex Code",
  //     scroll: "fade-down",
  //     liveLink: "https://flex-code-6541d.web.app/",
  //     code: "https://github.com/mehedihasan8/Food-lover-client",
  //   },
  //   {
  //     id: 2,
  //     src: car_toy_img,
  //     name: "CAR YOY",
  //     scroll: "fade-up",
  //     liveLink: "https://toy-car-ce3f5.web.app/",
  //     code: "https://github.com/mehedihasan8/Toy-car-world",
  //   },
  //   {
  //     id: 3,
  //     src: yoga_img,
  //     name: "YOGA",
  //     scroll: "fade-down",
  //     liveLink: "https://simple-firebase-project-a5441.web.app/",
  //     code: "https://github.com/mehedihasan8",
  //   },
  // ];
  return (
    <div
      id="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full   md:pt-0 text-white "
    >
      <div className="max-w-screen-lg p-4 md:p-0 md:pt-16 mx-auto flex flex-col justify-center w-full ">
        <p className="text-4xl font-bold inline  border-b-4 border-gray-500">
          Project
        </p>
        <p className="py-6">Check out some of my work right here</p>

        <div
          data-aos="zoom-in-right"
          data-aos-duration="1500"
          className="portfolio-car grid sm:grid-cols-2 md:grid-cols-3 gap-7 px-4 sm:px-0 md:mt-3"
        >
          {data?.data?.map((project) => (
            <div
              data-aos={scroll}
              data-aos-easing="linear"
              data-aos-duration="1500"
              key={project?._id}
              className="shadow-md shadow-sky-500 rounded-lg border-2 border-sky-500 overflow-hidden"
            >
              <div className="image-content  overflow-hidden">
                <img
                  src={project?.image}
                  alt=""
                  className="px-3 py-3 mt-2 duration-200 hover:scale-105"
                />
              </div>
              <p className="text-2xl text-bold pb-2 text-gray-400 ml-3">
                {project?.name}
              </p>
              <div className="flex items-center justify-center pb-4">
                <a
                  className="w-1/2 rounded border-2 text-center bg-cyan-500  border-sky-500 px-3 py-1 m-4 duration-200 hover:scale-105"
                  href={project?.liveLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  <button>VIEW LIVE</button>
                </a>
                <div className="w-1/2">
                  <Link to={`/project/${project?._id}`} smoth>
                    <button className=" px-2 border-2   rounded text-cyan-500 border-sky-500 py-1 duration-200 hover:scale-105 ">
                      VIEW DETAILS
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Protfolio;
