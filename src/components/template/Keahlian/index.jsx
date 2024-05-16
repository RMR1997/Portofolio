import React, { useRef } from "react";
import DashboardDescription from "../../molecules/DashboardDesc";
import Image from "../../atom/Image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Keahlian() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2, // Ubah threshold sesuai kebutuhan Anda
  });

  return (
    <div
      ref={ref}
      id="keahlian"
      className="w-screen h-auto bg-[#1428A0] bg-cover bg-center"
    >
      <div className="flex pt-10 px-10 mx-32">
        <motion.div
          className="w-2/3 items-center justify-center"
          initial={{ x: -100, opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <DashboardDescription margin="mt-10" textColor="text-[#e95756]">
            <h1 className="text-5xl font-bold p-2">
              <span className="text-[#ffffff]">Keahlian</span>
            </h1>
          </DashboardDescription>
        </motion.div>
      </div>
      <div className="m-10 flex justify-center items-center text-justify w-full pt-10 pb-20">
        <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-x-32 gap-y-52">
          {[
            { src: "/images/reactjs.png", title: "ReactJS" },
            { src: "/images/nodejs.png", title: "NodeJS" },
            { src: "/images/figma.png", title: "Figma" },
            { src: "/images/ps.png", title: "Photoshop" },
            { src: "/images/corel.png", title: "Coreldraw" },
            { src: "/images/elastic.png", title: "Elastic" },
            { src: "/images/appdy.png", title: "Appdynamic" },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="w-52 h-52 flex justify-center items-center bg-white rounded-full"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.div
                className="w-44 h-44 text-center pb-10 p-4 rounded-t-lg"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  image={item.src}
                  className="w-full h-full object-contain"
                />
                <DashboardDescription
                  textColor="mt-12 text-white"
                  title={item.title}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
