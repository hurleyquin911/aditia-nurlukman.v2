import React from "react";
import Link from "next/link";

import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
  FaLink,
} from "react-icons/fa";

const socials = [
  {
    icon: <FaGithub />,
    path: "",
  },
  {
    icon: <FaLinkedinIn />,
    path: "",
  },
  {
    icon: <FaInstagram />,
    path: "",
  },
  {
    icon: <FaTwitter />,
    path: "",
  },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
