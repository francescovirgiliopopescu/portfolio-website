import ProfileSectoin from "@/components/sections/profile";
import ExperienceSection from "@/components/sections/experience";
import EducationSection from "@/components/sections/education";

export default function Home() {
  return (
    <div className="flex flex-col justify-start items-center w-full h-full overflow-auto font-[family-name:var(--font-geist-sans)] px-6">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start w-full max-w-3xl h-full mt-30">
        <ProfileSectoin />
        <ExperienceSection />
        {/* <EducationSection /> */}
      </main>
      <footer className="flex justify-center items-center w-full max-w-3xl border-t border-gray-200 p-8 mt-12">
        <span className="text-sm opacity-80">@2025 · All rights reserved.</span>
      </footer>
    </div>
  );
}
