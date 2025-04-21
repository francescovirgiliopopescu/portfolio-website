import Image from "next/image";
import { FC } from "react";

import { SlLocationPin } from "react-icons/sl";
import { MdOutlineEmail } from "react-icons/md";
import { FiGithub } from "react-icons/fi";
import { CiLinkedin } from "react-icons/ci";

// import photo from "@/public/assets/avatar.png";

const ProfileSectoin: FC = () => {
  return (
    <div>
      <div className="flex flex-row gap-8 items-center">
        {/* <Image
          alt="Avatar"
          src={photo.src}
          width={140}
          height={140}
          className="rounded-xl md:w-[140px] md:h-[140px] w-[120px] h-[120px]"
        /> */}
        {/* <div className="w-[140px] h-[140px] bg-amber-50 rounded-2xl"></div> */}
        <div className="flex flex-col gap-2 sm:gap-3">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
            Francesco Popescu
          </h1>
          <p className="flex items-center gap-2 text-base text-white opacity-80">
            <SlLocationPin size={20} />
            Rome, Italy
          </p>
          <div className="flex gap-4">
            <a href="mailto:francescovirgiliopopescu@gmail.com">
              <MdOutlineEmail
                size={24}
                className="hover:text-green-600 transition-all"
              />
            </a>
            <a href="https://github.com/francescovirgiliopopescu">
              {/* <a href="https://github.com/h0lme3"> */}
              <FiGithub
                size={22}
                className="hover:text-green-600 transition-all"
              />
            </a>
            {/* <a href="https://www.linkedin.com/in/francesco-popescu-19887435a/"> */}
            <a href="https://linkedin.com/in/popescu0400">
              <CiLinkedin
                size={24}
                className="hover:text-green-600 transition-all"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-col text-sm sm:text-base gap-4 mt-8">
        <p>
          Hi! there 👋 I'm Francesco Popescu, a Software Engineer from Rome,
          Italy.
        </p>
        <p>
          Since 2017, he has focused on creating superior React applications for
          high-traffic services using leading-edge solutions. <br />
          Most of my work consists of leading technical teams, creating an
          efficient development environment, fixing technical debts, providing
          best practices, and mentoring developers. <br />I have delivered a
          range of products, including front-end architecture for scalability,
          design systems for global branding across several apps, and launching
          new applications for startups.
        </p>
        <p>
          <b>Skills</b>: <br /> HTML, CSS, JavaScript, Typescript, Next.js,
          React, Redux, Tailwind, Node.js, NestJS, Python, GraphQL, CI/CD, Git
        </p>
      </div>
    </div>
  );
};

export default ProfileSectoin;
