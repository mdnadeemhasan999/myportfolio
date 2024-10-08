import React from "react";
import { FaCloudDownloadAlt, FaLinkedinIn } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { contactImg } from "../../assets/index";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Md Nadeem Hasan</h3>
        <p className="text-lg font-normal text-gray-400">
          Web Developer Executive
        </p>
        <p className="text-base text-gray-400 tracking-wide">
          Thank you for visiting! For any questions, opportunities, or
          collaborations, don't hesitate to reach out to me directly:
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+91 7678 402770</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email:{" "}
          <span className="text-lightText">mdnadeemhasan999@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
          <a
            href="https://www.linkedin.com/in/mdnadeemhasan/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="bannerIcon">
              <FaLinkedinIn />
            </span>
          </a>
          <a
            href="https://github.com/mdnadeemhasan999"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="bannerIcon">
              <BsGithub />
            </span>
          </a>
          <a
            href="https://drive.google.com/uc?export=download&id=1KbarthZFvz7kft-OjwcRzugtYLpIe3Df"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="bannerIcon">
              <FaCloudDownloadAlt />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactLeft;
