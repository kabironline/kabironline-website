import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { about, education, experience, skills } from "@/lib/constants";

const MobileResumeTabs = () => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-[30px] text-center xl:text-left">
        <h3 className="text-4xl font-bold">{about.title}</h3>
        <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
          {about.description}
        </p>
        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] gap-y-6 max-w-[620px] mx-auto xl:mx-0">
          {about.info.map((item, index) => (
            <li
              key={index}
              className="flex items-center justify-center xl:justify-start gap-4"
            >
              <span className="text-white/60">{item.fieldName}</span>
              <span className="text-xl">{item.value}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col gap-[30px] text-center xl:text-left">
        <h3 className="text-4xl font-bold">{experience.title}</h3>
        <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
          {experience.description}
        </p>
        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
          {experience.items.map((item, index) => (
            <li
              key={index}
              className="glass h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
            >
              <span className="text-accent">{item.duration}</span>
              <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                {item.position}
              </h3>
              <div className="flex items-center gap-3">
                <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                <p className="text-white/60">{item.company}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col gap-[30px] text-center xl:text-left">
        <h3 className="text-4xl font-bold">{education.title}</h3>
        <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
          {education.description}
        </p>
        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
          {education.items.map((item, index) => (
            <li
              key={index}
              className="glass h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
            >
              <span className="text-accent">{item.duration}</span>
              <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                {item.degree}
              </h3>
              <div className="flex items-center gap-3">
                <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                <p className="text-white/60">{item.institution}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col gap-[30px] text-center xl:text-left">
        <h3 className="text-4xl font-bold">{skills.title}</h3>
        <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
          {skills.description}
        </p>
        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-4">
          {skills.skillsList.map((item, index) => (
            <li key={index}>
              <TooltipProvider delayDuration={300}>
                <Tooltip>
                  <TooltipTrigger className="w-full h-[150px] glass flex items-center justify-center group rounded-xl">
                    <div className="text-6xl group-hover:text-accent transition-all duration-300">
                      {item.icon}
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="captialize">{item.title}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MobileResumeTabs;
