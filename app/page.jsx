"use client";

import Social from "@/components/Social";
import Photo from "@/components/Photos";
import Stats from "@/components/Stats";
import DownloadCV from "@/components/DownloadCV";
import { motion } from "framer-motion";

const Home = () => {
  const downloadCV = () => {
    window.open("/kabir_maniar.pdf");
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          duration: 0.4,
          delay: 1.4,
          ease: "easeIn",
        },
      }}
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24 gap-10">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Software Developer </span>
            <h1 className="h1 mb-6 leading-[1.25em] xl:leading-[1em]">
              Hello I&apos;m <br />
              <span className="bg-gradient-to-b from-accent to-blue-800 bg-clip-text text-transparent">
                Kabir Maniar
              </span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I excel at crafting elegant digital experiences and I am
              proficient in various programming languages and technologies. Be
              sure to come back and check out my latest projects and updates to
              this website
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <DownloadCV />
              <div className="mb-8 xl:mb-0 ">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-base text-accent hover:bg-accent hover:text-primary transition-all duration-500"
                />
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </motion.section>
  );
};

export default Home;
