import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2021 - 2024</p>
          <h2 className="text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Business Development Associate"
            subTitle="Byju's  - (Jan 2024 - Apr 2024)"
            result="Noida"
            des="Provided guidance and counseling to prospective students regarding various 4-12 & JEE/NEET/UPSC courses offered. 
            Advised students on specific degree programs, career opportunities, and educational pathways tailored to their interests and goals."
          />
          <ResumeCard
            title="Web Developer Executive"
            subTitle="Zenith Go Digital  - (Apr 2023 - Jun 2023)"
            result="Noida"
            des="Leverage strong problem-solving and analytical skills to quickly grasp and implement complex React.js concepts and technologies. Translate business requirements into technical specifications, ensuring alignment with React.js development standards."
          />
          <ResumeCard
            title="Junior Web Developer "
            subTitle="CodingExpo Technology  - (Jul 2021 - Apr 2023)"
            result="Noida"
            des="Developed user-friendly interfaces using React.js for web applications, ensuring high performance and responsiveness. Implemented Redux for state management, maintaining a centralized store for application data and improving scalability."
          />
          {/* <ResumeCard
            title=" Internship"
            subTitle="Codules Technologies - (Jul 2020 - Aug 2020)"
            result="Greater Noida "
            des="Chat Web is an innovative chatting website designed to facilitate
                seamless communication between users. Powered by Java
                technology, this platform enables real-time interactions and
                fosters engaging conversations in a user-friendly environment.
                "
          /> */}
        </div>
      </div>
      {/* <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2001 - 2020</p>
          <h2 className="text-4xl font-bold">Trainer Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Gym Instructor"
            subTitle="Rainbow Gym Center (2015 - 2020)"
            result="DHAKA"
            des="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
          />
          <ResumeCard
            title="Web Developer and Instructor"
            subTitle="SuperKing College (2010 - 2014)"
            result="CANADA"
            des="Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
          />
          <ResumeCard
            title="School Teacher"
            subTitle="Kingstar Secondary School (2001 - 2010)"
            result="NEVADA"
            des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
          />
        </div>
      </div> */}
    </motion.div>
  );
};

export default Experience;
