"use client";
import ResumeTabs from "@/components/ResumeTabs";
import { motion } from "framer-motion";
import MobileResumeTabs from "@/components/MobileResumeTabs";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80px] flex flex-col w-full justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <div className="xl:hidden ">
          <MobileResumeTabs />
        </div>
        <div className="hidden xl:block">
          <ResumeTabs />
        </div>
      </div>
    </motion.div>
  );
};

export default Resume;
