import { StaticImageData } from "next/image";
import { FC } from "react";
import NoticeBox from "../notice-box";

import midas_logo from "@/public/assets/logo/midas.png";
import crypto_hunters_logo from "@/public/assets/logo/ch.png";
import intel_logo from "@/public/assets/logo/intel.png";
import hilo_logo from "@/public/assets/logo/hilo.png";
import avant_logo from "@/public/assets/logo/avant.png";

const experienceData = [
  {
    img: intel_logo,
    title: "Backend Engineer",
    location: "Intelligems Technologies",
    period: "2024 - 2025",
    experiences: [
      "I worked as an intermediate backend engineer closely with the development team to build high-performance, scalable applications using Python and Django, interacting with a custom REST API within the Next.js framework. I used a PostgreSQL database, Prisma for object-relational mapping (ORM), Next-Auth for authentication/authorization,",
      "Managed container orchestration via Docker and Kubernetes, achieving seamless deployments and cutting infrastructure setup time by 50%.",
      "Integrated Redis caching into GraphQL API architecture to improve data fetching efficiency and reduce server load. Implemented query-level and resolver-level caching strategies to store frequently accessed data, ensuring faster response times and a smoother user experience. Utilized cache invalidation techniques to keep data consistent, especially for mutations and time-sensitive queries. Worked closely with backend and DevOps teams to ensure proper Redis configuration and seamless deployment across environments and worked as a DevOps engineer myself.",
    ],
  },
  {
    img: crypto_hunters_logo,
    title: "Frontend Web3 Developer",
    location: "Crypto Hunters",
    period: "2022 - 2024",
    experiences: [
      "Developed a modern, responsive dApp for the Crypto Hunters using Next.js and SCSS, focusing on performance, SEO, and cross-device compatibility. Leveraged Next.js features such as static site generation (SSG) and image optimization to enhance load speed and search engine visibility. Structured styles using modular SCSS for maintainability and scalability, ensuring consistent design across components. Implemented animations, interactive sections, and reusable UI elements to improve user engagement and brand presentation. Collaborated closely with UI/UX designer and another frontend engineer to deliver a polished, user-friendly experience that aligns with the Cryto Hunters's branding and goals.",
    ],
  },
  {
    img: midas_logo,
    title: "Senior Frontend Developer | Problem Solver",
    location: "Midas Solutions LTD",
    period: "2020 - 2022",
    experiences: [
      "Worked as a senior frontend developer and debugging engineer, focusing on NFT marketplace using React, TypeScript, Tailwind CSS.",
      "After complete this NFT marketplace, I developed a Landing page with Next.js, Tailwind CSS and Typescript.",
    ],
  },
  {
    img: hilo_logo,
    title: "Frontend Web3 Developer",
    location: "Hilo Labs",
    period: "2017 - 2020",
    experiences: [
      "I was a team member(web3 engineer myself) of blockchaind development team, and developed and maintained responsive, user-friendly dApps using React, Next.js, and TypeScript, integrating seamlessly with EVM-compatible smart contracts via ethers.js and wagmi.",
    ],
  },
];

const ExperienceSection: FC = () => {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl sm:text-3xl font-semibold">
        Professional Experience
      </h2>
      {experienceData.map((experience, index) => (
        <NoticeBox key={index} {...experience} />
      ))}
    </div>
  );
};

export default ExperienceSection;
