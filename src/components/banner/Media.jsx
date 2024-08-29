import React from "react";
import {
  FaCloudDownloadAlt,
  FaCss3,
  FaHtml5,
  FaLinkedinIn,
  FaReact,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { BsGithub } from "react-icons/bs";
const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
      <div>
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
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">
          BEST SKILL ON
        </h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <FaReact />
          </span>
          <span className="bannerIcon">
            <IoLogoJavascript />
          </span>
          <span className="bannerIcon">
            <FaHtml5 />
          </span>
          <span className="bannerIcon">
            <FaCss3 />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Media;
