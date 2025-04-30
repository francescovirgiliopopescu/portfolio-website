import { StaticImageData } from "next/image";
import { FC } from "react";
import NoticeBox from "../notice-box";

import university_img from "@/public/assets/logo/university.png";

const educationData = [
  {
    img: university_img,
    title: "Bachelor of Computer Science",
    location: "AIMST University",
    period: "2012 - 2016",
    experiences: [],
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
