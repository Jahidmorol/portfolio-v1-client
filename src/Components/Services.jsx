import {
  FaCode,
  FaJsSquare,
  FaLayerGroup,
  FaReact,
  FaServer,
} from "react-icons/fa";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const serviceIProvide = [
    {
      id: 1,
      title: "Full-Stack Development",
      description:
        "I'm a Full-Stack Developer .I can build your full stack website with MongoDB, ExpressJS, ReactJS, NodeJS. I can be your Mern Developer",
      icon: (
        <>
          {/* <i className="fa-solid fa-layer-group"></i> */}
          <FaLayerGroup />
        </>
      ),
    },
    {
      id: 2,
      title: "Frontend Development",
      description:
        "I'm A Frontend specialist. I have created many Website With Fancy Frontend. I can be your frontend Engineer.",
      icon: (
        <>
          {/* <i className="fa-solid fa-code"></i> */}
          <FaCode />
        </>
      ),
    },
    {
      id: 3,
      title: "Backend Development",
      description:
        "I'm A Backend Developer. I have created many projects Server Side Api Endpoint. I can be your Backend Developer.",
      icon: (
        <>
          {/* <i className="fa-solid fa-server"></i> */}
          <FaServer />
        </>
      ),
    },
    {
      id: 4,
      title: "React Development",
      description:
        "I'm A React Developer. I have created many single page application using React.JS. I can be your React Developer.",
      icon: (
        <>
          {/* <i className="fa-brands fa-react"></i> */}
          <FaReact />
        </>
      ),
    },
    {
      id: 5,
      title: "Javascript Development",
      description:
        "I'm a Javascript Developer. I have created many website using Javascript. I can be your Javascript Developer.",
      icon: (
        <>
          <FaJsSquare />
        </>
      ),
    },
    {
      id: 6,
      title: "Mern Development",
      description:
        "I'm a MERN Developer .I can build your full stack website with MongoDB, ExpressJS, ReactJS, NodeJS. I can be your Mern Developer",
      icon: (
        <>
          {/* <i className="fa-solid fa-layer-group"></i> */}
          <FaLayerGroup />
        </>
      ),
    },
  ];

  return (
    <div
      id="services"
      className="bg-gradient-to-b from-gray-800 to-black w-full"
    >
      <div className="max-w-screen-lg mx-auto p-4 md:p-0 md:pt-16 flex flex-col justify-center w-full  text-white">
        <p className="text-4xl font-bold inline  border-b-4 border-gray-500">
          What I Do{" "}
        </p>
        <p className="py-4 md:py-6">Services</p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 px-4 md:px-0 mt-4">
          {serviceIProvide.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
