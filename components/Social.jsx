// "use client";

import Link from "next/link";
import { FaGithub, FaTwitter, FaYoutube, FaLinkedinIn } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, link: "" },
  { icon: <FaTwitter />, link: "" },
  { icon: <FaYoutube />, link: "" },
  { icon: <FaLinkedinIn />, link: "" },
];

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
