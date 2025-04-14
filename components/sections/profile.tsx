import Image from "next/image";
import { FC } from "react";

import { SlLocationPin } from "react-icons/sl";
import { MdOutlineEmail } from "react-icons/md";
import { FiGithub } from "react-icons/fi";
import { CiLinkedin } from "react-icons/ci";

import photo from "@/public/assets/avatar.png";

const ProfileSectoin: FC = () => {
  return (
    <div>
      <div className="flex flex-row gap-8 items-center">
        <Image
          alt="Avatar"
          src={photo.src}
          width={140}
          height={140}
          className="rounded-xl md:w-[140px] md:h-[140px] w-[120px] h-[120px]"
        />
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
            <a href="https://www.linkedin.com/in/francesco-popescu-19887435a/">
              {/* <a href="https://linkedin.com/in/popescu0400"> */}
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
          I ’m a Full Stack Developer and DevOps Engineer with 8+ years of
          experience delivering scalable, high performance applications across
          Web2 and Web3 ecosystems.
        </p>
        <p>
          I specialize in building robust backend systems with Python, Django,
          and REST APIs, while crafting modern, responsive UIs with React,
          Next.js, and TypeScript. My DevOps expertise spans CI/CD automation,
          Docker, Kubernetes, Redis, and cloud infrastructure — ensuring smooth
          deployments, optimized performance, and secure development lifecycles.
          Whether it's creating NFT marketplaces, dApps, or data-driven
          platforms, I bring a problem solving mindset, cross-functional
          collaboration, and a commitment to clean, maintainable code.
        </p>
        <p>
          <b>Skills</b>: <br /> HTML, CSS, JavaScript, Typescript, Next.js,
          React, React Native, Redux, Tailwind CSS, Node.js, NestJS,
          Python/Django, FastAPI, MongoDB, PostgreSQL, Firebase, CI/CD, Jest,
          Git, AWS, Docker, Kubernetes
        </p>
      </div>
    </div>
  );
};

export default ProfileSectoin;
