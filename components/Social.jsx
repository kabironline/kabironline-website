// "use client";

import { socials } from "@/lib/constants";
import Link from "next/link";

const Social = ({ iconStyles, containerStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((socials, index) => (
        <Link key={index} href={socials.link} className={iconStyles}>
          {socials.icon}
        </Link>
      ))}
    </div>
  );
};

export default Social;
