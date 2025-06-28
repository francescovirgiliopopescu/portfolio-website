import Image, { StaticImageData } from "next/image";
import { FC } from "react";

interface NoticeBoxProps {
  //   img: StaticImageData; // Image URL
  img: StaticImageData; // Image URL
  title: string; // Title of the experience
  location: string; // Location of the experience
  period: string; // Period of the experience
  overview?: string; // Overview of the experience (optional)
  experiences: {
    // List of experiences
    project: string; // Project name
    achievement: string[]; // List of achievements in the project
  }[]; // Array of experiences
}

const NoticeBox: FC<NoticeBoxProps> = ({
  img,
  title,
  location,
  period,
  overview = "",
  experiences,
}) => {
  return (
    <div className="">
      <div className="flex justify-start gap-2">
        {/* <div className="w-14 h-14 rounded-md bg-amber-50"></div> */}
        <Image
          alt="logo"
          src={img.src}
          width={img.width}
          height={img.height}
          className="rounded-md w-[56px] h-[56px]"
        />
        <div className="flex flex-col gap-1">
          <h3 className="text-xl sm:text-2xl">{title}</h3>
          <p className="text-sm opacity-90">
            {location} · {period}
          </p>
        </div>
      </div>
      <p className="ml-16 mt-4">{overview}</p>
      {experiences.map((experience, index) => (
        <div key={index} className="flex flex-col gap-2 ml-16 mt-4">
          <p className="text-base opacity-90 italic">{experience.project}</p>
          <ul className="list-disc list-outside text-sm sm:text-base ml-6">
            {experience.achievement.map((item, idx) => (
              <li key={idx} className="text-gray-300">
                {item}
              </li>
            ))}{" "}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default NoticeBox;
