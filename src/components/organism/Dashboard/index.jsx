import React, { useState } from "react";
import { motion } from "framer-motion";
import DashboardDescription from "../../molecules/DashboardDesc";
import Image from "../../atom/Image";
import Button from "../../atom/Button";
import { useInView } from "react-intersection-observer";

export default function Dashboard() {
  const { ref: dashboardRef, inView: dashboardInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [isRotating, setIsRotating] = useState(false);

  const handleRotateClick = () => {
    setIsRotating(!isRotating);
  };

  return (
    <>
      <motion.div
        id="dashboard"
        className="flex flex-col items-center justify-center relative"
        ref={dashboardRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: dashboardInView ? 1 : 0 }}
        transition={{ duration: 1 }}
        style={{
          backgroundImage: "url('your-background-image.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex flex-col lg:flex-row bg-[#1428A0] justify-between w-full h-full pb-96 pt-28 gap-7 px-4 lg:px-0">
          <motion.div
            className="lg:ml-48 mt-10 p-4"
            initial={{ x: -100, opacity: 0 }}
            animate={{
              x: dashboardInView ? 0 : -100,
              opacity: dashboardInView ? 1 : 0,
            }}
            transition={{ duration: 1 }}
          >
            <DashboardDescription margin=" " textColor="p-2 text-[#ffffff]">
              <h1 className="p-2 text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-[#ffffff]">
                Portofolio
              </h1>
              <p className="p-2 text-lg md:text-xl w-full lg:w-96 text-white">
                Halo!. Perkenalkan nama saya Rizki Maulana Rajabi, Umur Saya 27
                Tahun, Berasal dari sukabumi. Saya Lulusan D3 Sistem Informasi
                di Univeristas BSI Sukabumi
              </p>
              <Button color="bg-[#ffffff]">
                <h1 className="text-black">Download CV</h1>
              </Button>
            </DashboardDescription>
          </motion.div>
          <motion.div
            className="w-64 h-64 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px] rounded-full bg-white flex items-center justify-center overflow-hidden mx-auto lg:mx-0"
            initial={{ scale: 0.8, opacity: 0, rotate: 0 }}
            animate={{
              scale: dashboardInView ? 1 : 0.8,
              opacity: dashboardInView ? 1 : 0,
              rotate: isRotating ? 360 : 0,
            }}
            transition={{ duration: 1 }}
          >
            <a href="#" onClick={handleRotateClick}>
              <img
                src="/images/rizki.jpeg"
                alt="Rizki Maulana Rajabi"
                className="w-full h-full object-cover"
              />
            </a>
          </motion.div>
          <div></div>
        </div>

        <motion.div
          className="w-full md:w-3/4 h-auto p-2 gap-4 shadow-2xl bg-white rounded-2xl absolute bottom-[-80px] md:bottom-[-120px] lg:bottom-[-80px]"
          initial={{ y: 50, opacity: 0 }}
          animate={{
            y: dashboardInView ? 0 : 50,
            opacity: dashboardInView ? 1 : 0,
          }}
          transition={{ duration: 1 }}
        >
          <div className="flex items-center justify-center text-center text-2xl mb-2 p-2">
            <h1 className="text-[#1428A0] text-3xl font-bold">Sosial Media</h1>
          </div>

          <div className="flex flex-wrap justify-center">
            {[
              {
                href: "https://github.com/RMR1997",
                image: "/images/github.png",
                title: "Github",
              },
              {
                href: "https://gitlab.com/rizkimaulanarajabi",
                image: "/images/gitlab.png",
                title: "Gitlab",
              },
              {
                href: "#",
                image: "/images/linkin.png",
                title: "Linkedin",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 p-2 flex flex-col items-center"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-20 h-20 rounded-full bg-white shadow-slate-400 shadow-2xl flex items-center justify-center mb-2">
                  <a href={item.href} target="__blank">
                    <Image size="w-28" align="flex" image={item.image} />
                  </a>
                </div>
                <div className="w-full text-center">
                  <DashboardDescription
                    title={item.title}
                    textColor="text-[#1428A0] text-lg md:text-xl"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </>
  );
}
