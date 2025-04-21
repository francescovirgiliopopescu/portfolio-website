import Image, { StaticImageData } from "next/image";
import { FC } from "react";

interface NoticeBoxProps {
  //   img: StaticImageData; // Image URL
  img: StaticImageData; // Image URL
  title: string; // Title of the experience
  location: string; // Location of the experience
  period: string; // Period of the experience
  experiences: string[]; // List of experiences
}

const NoticeBox: FC<NoticeBoxProps> = ({
  img,
  title,
  location,
  period,
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
      <div className="flex flex-col gap-2 ml-16 mt-4">
        {experiences.map((experience, index) => (
          <p key={index} className="text-base opacity-90">
            {experience}
          </p>
        ))}
      </div>
    </div>
  );
};

export default NoticeBox;
