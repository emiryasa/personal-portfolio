import { skillsImage } from "@/utils/data/skillsImage";
import { skillsData } from "@/utils/data/skillsData";
import Image from "next/image";

function Skills() {
  return (
    <div className="md:container pt-10 md:mx-auto lg:px-20">
      <div className="py-10 text-2xl font-bold text-center text-neutral-300">
        Skills
      </div>
      <div className="w-full flex">
        {/* {skillsData.map((skill, id) => (
          <div
            className="w-36 min-w-fit h-fit flex flex-col items-center justify-center transition-all duration-500 m-3 sm:m-5 rounded-lg group relative hover:scale-[1.15] cursor-pointer"
            key={id}
          >
            <div className="h-full w-full rounded-lg border border-[#656565] bg-[#A29F9E] shadow-none shadow-gray-50 group-hover:border-violet-500 transition-all duration-500">
              <div className="flex -translate-y-[1px] justify-center">
                <div className="w-3/4">
                  <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-gray-400 to-transparent" />
                </div>
              </div>
              <div className="flex flex-col items-center justify-center gap-3 p-6">
                <div className="h-8 sm:h-10">
                  <Image
                    src={skillsImage(skill)}
                    alt={skill}
                    width={40}
                    height={40}
                    className="h-full w-auto rounded-lg"
                  />
                </div>
                <p className="text-black text-sm sm:text-lg">{skill}</p>
              </div>
            </div>
          </div>
        ))} */}
      </div>
    </div>
  );
}

export default Skills;
