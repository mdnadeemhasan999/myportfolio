import React from "react";
import Title from "../layouts/Title";
import { projectOne, projectTwo, projectThree } from "../../assets/index";
import ProjectsCard from "./ProjectsCard";

import { BsGithub } from "react-icons/bs";
import { FaGlobe } from "react-icons/fa";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="ZENITH GO DIGITAL"
          des=" A sleek and static WordPress website designed for an IT company, 
          offering state-of-the-art features, stunning visuals, 
          and a seamless user experience."
          src={projectOne}
          icongit={<BsGithub />}
          iconglob={
            <a
              href="https://zenithgodigital.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGlobe />
            </a>
          }
        />
        <ProjectsCard
          title="ZENITH HAJJ UMRAH"
          des=" Developed a dynamic WordPress website for Zenith Hajj Umrah, 
          a company with over 20 years of experience in Hajj and Umrah pilgrimage services."
          src={projectTwo}
          icongit={<BsGithub />}
          iconglob={
            <a
              href="https://zenithhajjumrah.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGlobe />
            </a>
          }
        />
        <ProjectsCard
          title="POORVIKA"
          des=" Poorvika is a dynamic and attractive e-commerce platform built with WordPress, 
          featuring a diverse selection of electronic products."
          src={projectThree}
          icongit={<BsGithub />}
          iconglob={
            <a
              href="https://www.poorvika.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGlobe />
            </a>
          }
        />
        {/* <ProjectsCard
          title="SOCIAL MEDIA CLONE"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectThree}
        />
        <ProjectsCard
          title="E-commerce Website"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectOne}
        />
        <ProjectsCard
          title="Chatting App"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectTwo}
        /> */}
      </div>
    </section>
  );
};

export default Projects;
