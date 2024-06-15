"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
const DownloadCV = () => {
  return (
    <Button
      variant="outline"
      size="lg"
      className="uppercase flex items-center gap-2 "
      onClick={() => window.open("/kabir_maniar.pdf")}
    >
      <span>Download CV</span>
      <FiDownload className="text-xl" />
    </Button>
  );
};

export default DownloadCV;
