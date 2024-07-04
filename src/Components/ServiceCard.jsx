/* eslint-disable react/prop-types */
import "./Service.css";
const ServiceCard = ({ service }) => {
  const { title, description, icon } = service;
  return (
    <div data-aos="fade-up" data-aos-duration="1500">
      <div className="service-card border hover:border-2 border-sky-500 text-slate-400 hover:text-white p-4 lg:px-6 h-[18rem]">
        <div className="text-left">
          <p className="text-5xl text-[#0095E6]">{icon}</p>
          <h2 className="font-semibold text-xl lg:text-2xl my-4">{title}</h2>
          <p className="text-sm lg:text-base">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
