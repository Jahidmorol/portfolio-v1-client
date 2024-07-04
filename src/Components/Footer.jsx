import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className=" px-10 pb-16 pt-24 bg-black text-base-content border-base-300">
      <div
        data-aos="fade-down"
        data-aos-duration="1500"
        className="md:flex justify-center items-center gap-7 "
      >
        <div>
          <h1 className="text-white text-center pt-1">Mehedi Hasan Foysal</h1>
          <p className="text-gray-400 text-center pt-1">
            All Rights Reserved @ Mehedi Hasan Foysal
          </p>
        </div>
        <div className="text-center">
          <h1 className="text-white md:text-left py-2 font-bold">Social</h1>
          <div className="flex space-x-4 items-center justify-center">
            <a
              href="https://www.linkedin.com/in/mehedihasanfoysal8"
              target="blank"
            >
              <FaLinkedin className="h-8 w-8 hover:text-sky-500 hover:-mt-2  text-white" />
            </a>
            <a href="https://github.com/mehedihasan8" target="blank">
              <FaGithub className="h-8 w-8 hover:text-sky-500  hover:-mt-2 text-white" />
            </a>
            <a
              href="https://www.facebook.com/mehedihasanfoysal8"
              target="blank"
            >
              <FaFacebook className="h-8 w-8  hover:text-sky-500  hover:-mt-2 text-white" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
