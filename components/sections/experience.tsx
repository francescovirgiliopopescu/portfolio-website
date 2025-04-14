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
    title: "Backend & DevOps Engineer",
    location: "Intelligems Technologies",
    period: "2024 - 2025",
    experiences: [
      "Designed and implemented RESTful APIs using Python, Django, and Django REST Framework, supporting scalable microservices architecture for high-load applications.",
      "Managed container orchestration via Docker and Kubernetes, achieving seamless deployments and cutting infrastructure setup time by 50%.",
      "Integrated Redis, PostgreSQL, and Celery for background processing and caching, resulting in faster response times and optimized resource usage.",
      "Collaborated with frontend and product teams to align backend architecture with business requirements, ensuring seamless data flow and consistent performance across environments.",
      "Led DevOps adoption initiatives across the team, introducing best practices in observability, infrastructure-as-code, and secure deployment strategies.",
    ],
  },
  {
    img: crypto_hunters_logo,
    title: "Frontend Lead",
    location: "Crypto Hunters",
    period: "2023 - 2024",
    experiences: [
      "Developed and maintained scalable, high-performance web applications using Next.js, leveraging SSR and SSG for optimal speed and SEO.",
      "Collaborated with cross-functional teams — designers, backend developers, and product managers — to deliver responsive, visually-rich UIs.",
      "Optimized frontend performance and UI/UX through iterative prototyping and testing, improving user engagement by 25%.",
      "Contributed to system architecture planning and caching strategies, helping reduce page load times by 40% across key user flows.",
      "Configured and optimized GitLab CI/CD pipelines for continuous integration, reducing manual intervention and accelerating the development cycle by 40%.",
    ],
  },
  {
    img: midas_logo,
    title: "Senior Frontend Developer | Problem Solver",
    location: "Midas Solutions",
    period: "2022 - 2023",
    experiences: [
      "Solved the problems and fixed some bugs in the NFT marketplace with ReactJS and Typescript.",
      "Built a set of components in React and documented them using Storybook.",
      "Implemented the CI/CD pipeline with Github Actions.",
      "Built React and JavaScript reusable components containing the latest accessibility and cross-browser compatibility standards with a focus on composability and performance.",
      "Championed the adoption of industry standards and best practices, improving accessible design compliance by 25%.",
      "Refactored the entire codebase, and reducing load times by 40% and improving SEO by 60%.",
    ],
  },
  {
    img: hilo_logo,
    title: "Frontend Web3 Developer",
    location: "Hilo Labs",
    period: "2019 - 2022",
    experiences: [
      "Developed and maintained responsive, user-friendly dApps using React, Next.js, and TypeScript, integrating seamlessly with EVM-compatible smart contracts via ethers.js and wagmi.",
      "Built custom Web3 components for wallet connection (MetaMask, WalletConnect), token balances, and transaction history with real-time updates using WebSockets and The Graph.",
      "Integrated decentralized protocols like Uniswap, Chainlink, and IPFS, enhancing user features such as token swaps, price oracles, and decentralized file storage.",
      "Implemented gas optimization strategies and loading states to improve UX during on-chain transactions, increasing successful transaction rate by 28%.",
      "Collaborated closely with smart contract engineers to test, debug, and deploy contract interactions on testnets and mainnet, reducing production bugs by 40%.",
      "Designed pixel-perfect UI components in Figma and translated them into performant, reusable frontend components with Tailwind CSS and Radix UI.",
      "Used Moralis, Alchemy, and Infura for blockchain data, improving data reliability and response time by 35%.",
    ],
  },
  {
    img: avant_logo,
    title: "Frontend Developer",
    location: "Avantgards Labs",
    period: "2017 - 2019",
    experiences: [
      "Built React and JavaScript reusable components containing the latest accessibility and cross-browser compatibility standards with a focus on composability and performance.",
      "Integrated Google Analytics into the web pages to monitor activity and guide business decisions.",
      "Slashed load times by 50% by optimizing the back-end architecture with Node.js and SQL.",
      "Optimized the performance using React libraries.",
      "Improved test coverage by 40% with Jest and React Testing Library.",
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
