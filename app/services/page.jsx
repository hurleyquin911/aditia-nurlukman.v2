"use client";
import React from "react";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";

import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Web Development",
    description:
      "Saya siap untuk membangun situs web yang cepat, responsif, dan menarik untuk meningkatkan kehadiran online Anda",
    href: "",
  },
  {
    num: "02",
    title: "UI/UX",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad assumenda maiores ab cumque minus esse nulla. Sunt.",
    href: "",
  },
  {
    num: "03",
    title: "Data Science",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad assumenda maiores ab cumque minus esse nulla. Sunt.",
    href: "",
  },
  {
    num: "04",
    title: "SEO",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad assumenda maiores ab cumque minus esse nulla. Sunt.",
    href: "",
  },
];

const page = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              delay: 2.4,
              duration: 0.4,
              ease: "easeIn",
            },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((services, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                {/*Top Bar*/}
                <div className="w-full flex justify-between items-center">
                  <div
                    className="text-5xl font-extrabold text-outline text-transparent 
              group-hover:text-outline-hover transition-all duration-500"
                  >
                    {services.num}
                  </div>
                  <Link
                    href={services.href}
                    className="w-[70px] h-[70px] rounded-full bg-white 
                group-hover:bg-accent transition-all duration-500 
                flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>
                {/*Title*/}
                <h2
                  className="text-[42px] font-bold leading-none text-white 
            group-hover:text-accent transition-all duration-500"
                >
                  {services.title}
                </h2>
                {/*Description*/}
                <p className="text-white/60">{services.description}</p>
                {/*Border*/}
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default page;
