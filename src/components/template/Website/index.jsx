import React from "react";
import { motion } from "framer-motion";
import DashboardDescription from "../../molecules/DashboardDesc";
import Button from "../../atom/Button";
import CardMenu from "../../organism/CardMenu";

const data = [
  {
    id: 1,
    title: "Profile Website",
    as: "Portofolio",
    desc: "Membantu Teknisi Memelihara Jaringan, Menanggapi Keluhan Pelanggan, Memasang Jaringan Baru",
    image: "/images/profile.png",
    link: "https://rmr13.000webhostapp.com/index2.html",
  },
  {
    id: 2,
    title: "Crypto Website",
    as: "Heart of Hope Token",
    desc: "Membuat Laporan Keuangan, Mencatat Stok Barang, Membuat Desain untuk Menu & Banner",
    image: "/images/crypto.png",
    link: "https://rizkitesweb.000webhostapp.com/",
  },
  {
    id: 3,
    title: "Resto Website",
    as: "Kyodai Food",
    desc: "Membuat UI dan Mengintegrasikan data dengan database",
    image: "/images/kyodai.png",
    link: "https://rizkitesweb2.000webhostapp.com/",
  },
];

export default function Website() {
  return (
    <>
      <div id="website" className="flex pt-36 px-32">
        <div className="w-1/3 p-2 items-center justify-center">
          <DashboardDescription margin="mt-10" textColor="text-[#1428A0]">
            <h1 className="p-4 text-5xl font-bold text-[#1428A0]">Website</h1>
          </DashboardDescription>
        </div>
      </div>

      <div className="m-5 flex justify-center items-center text-justify w-full pt-20 bg-white">
        <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-32">
          {data.map((product) => (
            <motion.div
              key={product.id}
              className="p-3 rounded-lg p-1 shadow-2xl"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div
                className="h-full bg-[#1428A0] bg-cover bg-center rounded-lg"
                style={{ backgroundImage: `url(${product.image})` }}
              >
                <div className="p-2 w-full max-w-l rounded-lg bg-opacity-80 bg-[#1428A0]">
                  <div className="flex w-full justify-center items-center text-center p-6">
                    <div className="w-full h-96 flex justify-center items-center overflow-hidden">
                      <a href={product.link} target="__blank">
                        <img
                          className="p-4 rounded-t-lg w-full h-max"
                          src={product.image}
                          alt={product.title}
                        />
                      </a>
                    </div>
                  </div>
                  <div className="px-5 py-4">
                    <a href={product.link}>
                      <h5 className="mb-2 text-3xl font-bold text-white">
                        {product.title}
                      </h5>
                      <h5 className="mb-6 text-xl font-bold text-white">
                        {product.as}
                      </h5>
                      {/* <p className="mt-1 text-white text-base">
                        {product.desc}
                      </p> */}
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}
