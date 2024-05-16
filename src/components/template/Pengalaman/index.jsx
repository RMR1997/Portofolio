import React from "react";
import DashboardDescription from "../../molecules/DashboardDesc";
import Button from "../../atom/Button";
import CardMenu from "../../organism/CardMenu";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const data = [
  {
    id: 1,
    title: "Plaza Telkom Cicurug (Intern)",
    as: "Asisten Teknisi Lapangan",
    desc: "Membantu Teknisi Memelihara Jaringan, Menanggapi Keluhan Pelanggan, Memasang Jaringan Baru",
    image: "/images/telkom.png",
    tempat: "Cicurug - Sukabumi",
    tanggal: "Oktober 2017 - November 2017",
  },
  {
    id: 2,
    title: "Cafe",
    as: "Kasir",
    desc: "Membuat Laporan Keuangan, Mencatat Stok Barang, Membuat Desain untuk Menu & Banner",
    image: "/images/cafe.png",
    tempat: "Sukabumi",
    tanggal: "Maret 2019 - November 2019",
  },
  {
    id: 3,
    title: "PT Aigen Global Teknologi",
    as: "Frontend Developer",
    desc: "Membuat UI dan Mengintegrasikan data dengan database",
    image: "/images/aigen.png",
    tempat: "Ciputat - Tangerang Selatan",
    tanggal: "Juli 2023 - Sekarang",
  },
  {
    id: 4,
    title: "Bank Mandiri",
    as: "L1 ASP",
    desc: "Memonitoring Aplikasi Livin 24x7 Menggunakan Aplikasi Elastic & App Dynamic",
    image: "/images/mandiri.png",
    tempat: "Plaza Mandiri - Jakarta Selatan",
    tanggal: "Agustus 2023 - Januari 2024",
  },
  {
    id: 5,
    title: "Bank Indonesia",
    as: "L1 Support BIFAST",
    desc: "Membantu Development & Memonitoring BIFAST 24x7 Menggunakan API Manager & Data Power",
    image: "/images/bi.png",
    tempat: "Kebon Sirih - Jakarta Pusat",
    tanggal: "Januari 2024 - Sekarang",
  },
];

export default function Pengalaman() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2, // Sesuaikan threshold sesuai kebutuhan Anda
  });

  return (
    <>
      <div id="pengalaman" ref={ref} className="flex pt-36 px-32">
        <motion.div
          className="w-1/3 p-2 items-center justify-center "
          initial={{ x: -100, opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <DashboardDescription margin="mt-10 " textColor="text-[#1428A0]">
            <h1 className="p-4 text-5xl font-bold text-[#1428A0]">
              Pengalaman Kerja
            </h1>
          </DashboardDescription>
        </motion.div>
      </div>

      <div className="m-5 flex justify-center items-center text-justify w-full pt-20 bg-white">
        <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-32">
          {data.map((product) => (
            <motion.div
              key={product.id}
              className="p-3 rounded-lg p-1 shadow-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
            >
              <div
                className="h-full bg-[#1428A0] bg-cover bg-center rounded-lg"
                style={{ backgroundImage: `url(${product.image})` }}
              >
                <div className="p-2 w-full max-w-xl rounded-lg bg-opacity-80 bg-[#1428A0]">
                  <div className="flex w-full justify-center items-center text-center p-6 ">
                    <div className=" w-40 h-40 flex justify-center items-center bg-white rounded-full ">
                      <a href="#">
                        <img
                          className="p-4 rounded-t-lg"
                          src={product.image}
                          alt={product.title}
                        />
                      </a>
                    </div>
                  </div>
                  <div className="px-5 py-4">
                    <a href="#">
                      <h5 className=" mb-2 text-3xl font-bold text-white">
                        {product.title}
                      </h5>
                      <h5 className=" mb-6 text-xl font-bold text-white">
                        {product.as}
                      </h5>
                      <p className="mt-1 text-white text-base">
                        {product.desc}
                      </p>
                    </a>
                  </div>
                  <div className="px-5 py-4">
                    <p className="pt-4 m-2 text-xl font-semibold text-white">
                      {product.tempat}
                    </p>
                    <p className="pt-4 m-2 text-xl font-semibold text-white">
                      {product.tanggal}
                    </p>
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
