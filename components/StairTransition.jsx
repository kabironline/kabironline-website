"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Stairs from "./Stairs";

const StairTransition = () => {
  const pathname = usePathname();
  return (
    <>
      <AnimatePresence mode="wait">
        <div key={pathname}>
          <div className="h-screen w-screen fixed top-0 left-0 right-0 pointer-events-none z-50 flex ">
            <Stairs />
          </div>
          <motion.div // Screen fade in after animation
            className="h-screen w-screen fixed top-0 pointer-events-none inset-0 -z-10  items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#3D1E8E_100%)]"
            initial={{ opacity: 1 }}
            animate={{
              opacity: 0,
              transition: { delay: 1, duration: 0.4, ease: "easeInOut" },
            }}
          />
        </div>
      </AnimatePresence>
    </>
  );
};

export default StairTransition;
