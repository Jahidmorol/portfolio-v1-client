import contactsImg from "../assets/WhatsApp Image 2023-06-14 at 11.52.10 PM.jpeg";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

const Contacte = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_amgij98",
        "template_neyzmoc",
        form.current,
        "XrhvaKbA7J9V0BGwT"
      )
      .then(
        (result) => {
          // console.log(result.text, "and Message sent");
        },
        (error) => {
          // console.log(error.text);
        }
      );
  };

  return (
    <div
      id="contact"
      className="w-full bg-gradient-to-b from-black to-gray-800 p-4 pb-20 text-white"
    >
      <div
        data-aos="fade-up"
        data-aos-duration="1500"
        className="max-w-screen-lg mx-auto  md:p-0 flex flex-col justify-center w-full  text-white"
      >
        <p className="text-4xl font-bold inline pt-0 md:pt-12 w-full border-b-4 border-gray-500">
          Contact
        </p>
        <p className="py-4 md:py-5">
          Submit the form below to get in touch with me
        </p>

        <div className="md:flex px-4 md:p-0 md:pt-6 gap-12  items-center">
          <div className="md:w-2/4">
            <img
              className="h-[400px] w-full rounded-xl "
              src={contactsImg}
              alt=""
            />
          </div>
          <div className="flex justify-center items-center md:w-2/4 pt-4">
            <form
              ref={form}
              onSubmit={sendEmail}
              className=" flex flex-col w-full"
            >
              <input
                data-aos="zoom-in"
                data-aos-easing="ease-in-out"
                data-aos-duration="1500"
                type="text"
                name="user_name"
                placeholder="Enter your name"
                className="p-2 bg-transparent border-2 border-sky-500 rounded-md text-white focus:outline-none focus:border-sky-500"
                required
              />
              <input
                data-aos="zoom-in"
                data-aos-easing="ease-in-out"
                data-aos-duration="1500"
                type="text"
                name="user_email"
                placeholder="Enter your email"
                className="my-4 p-2 bg-transparent border-2 border-sky-500 rounded-md text-white focus:outline-none focus:border-sky-500"
                required
              />
              <textarea
                data-aos="zoom-in"
                data-aos-easing="ease-in-out"
                data-aos-duration="1500"
                name="message"
                placeholder="Your message...."
                rows="8"
                className="p-2 bg-transparent border-2 border-sky-500 rounded-md text-white focus:outline-none focus:border-sky-500"
                required
              ></textarea>

              <input
                data-aos="zoom-out"
                data-aos-easing="ease-in-out"
                data-aos-duration="1500"
                className="text-white bg-gradient-to-b cursor-pointer from-cyan-500 to-blue-500 px-6 py-3 mt-3 mx-auto flex items-center rounded-md hover:scale-110 duration-300"
                type="submit"
                value=" Let's talk"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacte;
