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
    overview:
      "As the first full stack engineer, I helped bring a digital asset management SaaS platform from concept to production.",
    experiences: [
      {
        project: "Booking System",
        achievement: [
          "Engineered scalable Django APIs for a high-load booking system (1M+ requests/day), supporting microservices architecture.",
          "Managed end-to-end containerization with Docker and Kubernetes, reducing infrastructure setup time by 50%.",
          "Implemented Redis-based job queues and smart caching, boosting performance and system resilience.",
          "Monitored and resolved bugs in the backend pipeline, and supported frontend fixes (Angular).",
          "Collaborated on building CI/CD pipelines using GitHub Actions, enabling automated testing, linting, and deployment across staging and production environments.",
        ],
      },
    ],
  },
  {
    img: crypto_hunters_logo,
    title: "Senior Frontend Developer",
    location: "Crypto Hunters",
    period: "2022 - 2024",
    overview:
      "At Crypto Hunters, I drove the entire frontend stack of a blockchain-integrated AR gaming platform, merging Web3, gaming, and real-world events.",
    experiences: [
      {
        project: "Marketing Website",
        achievement: [
          "Spearheaded the frontend architecture and implementation of a blockchain-integrated play-to-earn AR gaming platform, delivering seamless experiences across live events, CRH asset tracking, and player onboarding.",
          "Built and optimized a high-performance, SEO-compliant website using Next.js, TypeScript, and SCSS, ensuring cross-browser compatibility, accessibility (WCAG 2.1), and mobile-first responsiveness.",
          "Designed and maintained a scalable, reusable React component library, enabling rapid UI development and consistent UX across the company’s dApp and marketing interfaces.",
          "Integrated custom authentication flows and web3 wallet connectivity (MetaMask) to support secure user actions, including asset management and gameplay access.",
          "Collaborated closely with backend, blockchain, and product teams in agile sprints to deliver features on time and improve user engagement KPIs across multiple releases.",
          "Oversaw code quality through thorough code reviews, CI-integrated linting/testing, and adherence to scalable design principles and performance budgets.",
        ],
      },
    ],
  },
  {
    img: midas_logo,
    title: "Senior Frontend Developer | Problem Solver",
    location: "Midas Solutions LTD",
    period: "2020 - 2022",
    overview:
      "Led frontend development across multiple Web3 products including an NFT marketplace and a DeFi platform with CEX integration.",
    experiences: [
      {
        project: "NFT Marketplace",
        achievement: [
          "Led the frontend engineering of a high-traffic NFT marketplace using React.js, Typescript, and Web3.js, integrating fully with MetaMask for minting, bidding, and wallet-based authentication.",
          "Designed a smart contract data sync layer by integrating IPFS and on-chain metadata into MongoDB, drastically improving loading speed and platform responsiveness under heavy traffic.",
          "Built reusable UI components with React to support dynamic NFT listings, filtering, bidding logic, and user dashboards.",
          "Developed AWS Lambda functions to fetch, normalize, and expose NFT metadata via custom APIs for frontend consumption.",
          "Launched and scaled the platform to 50,000+ users in the first month, contributing to high user retention through performance-focused engineering and UX polish.",
        ],
      },
      {
        project: "DeFi Platform (CEX Integration)",
        achievement: [
          "Delivered core frontend architecture for a DeFi staking and yield farming platform supporting multiple EVM-compatible chains.",
          "Integrated secure wallet authentication and smart contract interactions using ethers.js, handling token swaps, LP staking, and reward withdrawals.",
          "Optimized Web3 data flow by batching on-chain calls and caching key contract states, improving dashboard performance by 40%.",
          "Set up and maintained a CI/CD pipeline using GitLab CI, automating test, build, and deployment flows for production releases across multiple environments.",
          "Collaborated with blockchain engineers and product teams to align UX design with DeFi mechanics and contract behavior.",
        ],
      },
    ],
  },
  {
    img: hilo_logo,
    title: "Full Stack Developer",
    location: "Hilo Labs",
    period: "2017 - 2020",
    overview:
      "As the first full stack engineer, I helped bring a digital asset management SaaS platform from concept to production.",
    experiences: [
      {
        project: "SaaS platform",
        achievement: [
          "Developed and launched a responsive web application from the ground up, working closely with designers and backend engineers to deliver a production-grade SaaS platform for managing digital assets.",
          "Engineered intuitive, conversion-oriented user flows for depositing and managing assets, conceptually similar to checkout and dashboard systems found in e-commerce platforms. ",
          "Implemented a scalable GraphQL data layer to efficiently query and render dynamic user data in real time, enhancing UX and reducing frontend load times.",
          "Built reusable UI components with React, integrating them with backend APIs and external data sources to ensure consistency and maintainability across the application.",
          "Contributed to both frontend development (React, Typescript, SCSS) and backend integration, bridging product logic with database interactions.",
          "Focused on performance optimization, accessibility, and mobile-first responsiveness, ensuring a seamless user experience across devices.",
        ],
      },
    ],
  },
  // {
  //   img: avant_logo,
  //   title: "Frontend Developer",
  //   location: "Avantgards Labs",
  //   period: "2017 - 2019",
  //   experiences: [
  //     "Frontend developer role focused on building responsive, user-friendly web applications using React, Redux, and JavaScript. Collaborated with designers and backend developers to create seamless user experiences and ensure high performance across devices.",
  //   ],
  // },
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
