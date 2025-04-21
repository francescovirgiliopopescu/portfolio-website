import { StaticImageData } from "next/image";
import { FC } from "react";
import NoticeBox from "../notice-box";

import university_img from "@/public/assets/logo/university.png";

const educationData = [
  {
    img: university_img,
    title: "Bachelor of Computer Science",
    location: "University of Rome Tor Vergata",
    period: "2011 - 2015",
    experiences: [
      // "Gained a strong foundation in computer science principles, including algorithms, data structures, and software development.",
      // "Developed problem-solving and analytical skills through various projects and coursework.",
      // "Learned programming languages such as JavaScript, Python, and C/C++.",
      // "Collaborated with peers on team projects, enhancing communication and teamwork abilities.",
      // "Explored topics like artificial intelligence, databases, and web development.",
    ],
  },
];

const EducationSection: FC = () => {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl sm:text-3xl font-semibold">Education</h2>
      {educationData.map((education, index) => (
        <NoticeBox key={index} {...education} />
      ))}
    </div>
  );
};

export default EducationSection;
