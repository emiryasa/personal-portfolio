import { aboutData } from "@/utils/data/aboutData";
import Animation from "./Animation";

function About() {
  return (
    <div className="md:container md:mx-auto lg:px-20 overflow-hidden">
      <div className="py-10 text-2xl font-bold text-neutral-300 text-center">
        Resume
      </div>
      <div className="flex flex-col">
        {aboutData.map((item, index) => (
          <Animation
            key={item.id}
            data={item}
            index={index}
            isOdd={index % 2 === 0}
          />
        ))}
      </div>
    </div>
  );
}

export default About;
