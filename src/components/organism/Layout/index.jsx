import { Link } from "react-router-dom";
import Button from "../../atom/Button";
import Image from "../../atom/Image";
import { useState } from "react";

export default function Layout(props) {
  const { children } = props;

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
      <main className="flex-grow w-full h-fit pb-5 bg-gradient-to-b from-sky-blue to-[#a9a2fc]">
        {children}
      </main>
      <Footer />
    </div>
  );
}

const Header = ({ toggleMenu, isMenuOpen }) => {
  return (
    <header className="sticky top-0 flex justify-between items-center px-4 lg:px-10 w-full h-[75px] bg-[#1428A0] z-50">
      <div className="flex items-center">
        <a href="#">
          <Image
            size="w-12 md:w-16 lg:w-20"
            align="mt-1"
            image="/images/Rajabi.png"
          />
        </a>
        <h1 className="text-2xl md:text-3xl text-white font-bold ml-2 lg:ml-4">
          Rajabi
        </h1>
      </div>
      <nav className="hidden md:flex flex-row text-white font-medium gap-4 lg:gap-10">
        <ul className="hover:text-white p-2">
          <a
            href="#dashboard"
            className="p-1 font-bold text-lg lg:text-xl hover:text-blue-100"
          >
            Beranda
          </a>
        </ul>
        <ul className="hover:text-white p-2">
          <a
            href="#pengalaman"
            className="p-1 font-bold text-lg lg:text-xl hover:text-blue-100"
          >
            Pengalaman Kerja
          </a>
        </ul>
        <ul className="hover:text-white p-2">
          <a
            href="#keahlian"
            className="p-1 font-bold text-lg lg:text-xl hover:text-blue-100"
          >
            Keahlian
          </a>
        </ul>
        <ul className="hover:text-white p-2">
          <a
            href="#website"
            className="p-1 font-bold text-lg lg:text-xl hover:text-blue-100"
          >
            Website
          </a>
        </ul>
      </nav>
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="text-white focus:outline-none">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>
      <div
        className={`${
          isMenuOpen ? "flex bg-white text-[#1428A0]" : "hidden"
        } md:hidden absolute top-[75px] left-0 w-full flex-col items-center`}
      >
        <ul className="hover:text-blue-700 p-2">
          <a
            href="#dashboard"
            className="block p-1 font-bold text-lg hover:text-blue-500"
          >
            Beranda
          </a>
        </ul>
        <ul className="hover:text-blue-700 p-2">
          <a
            href="#pengalaman"
            className="block p-1 font-bold text-lg hover:text-blue-500"
          >
            Pengalaman Kerja
          </a>
        </ul>
        <ul className="hover:text-blue-700 p-2">
          <a
            href="#keahlian"
            className="block p-1 font-bold text-lg hover:text-blue-500"
          >
            Keahlian
          </a>
        </ul>
        <ul className="hover:text-blue-700 p-2">
          <a
            href="#website"
            className="block p-1 font-bold text-lg hover:text-blue-500"
          >
            Website
          </a>
        </ul>
      </div>
    </header>
  );
};
const Footer = () => {
  return (
    <footer className="bg-[#1428A0] border-t text-center text-white py-6">
      <div className="container mx-auto flex flex-col justify-center md:flex-row md:text-center items-center px-4">
        <div className="flex justify-between w-1/2 justify-center items-center">
          <div className="mb-6 md:mb-0">
            <div className="">
              <h3 className="text-2xl font-semibold">Follow me on</h3>
              <div className="flex justify-center md:justify-start gap-3 mt-2">
                <div className="w-14 h-14 text-gray-500 filter invert-[100%]">
                  <a
                    href="https://www.instagram.com/rizkimaulanarajabi/"
                    target="__blank"
                  >
                    <Image size="" image="/images/instagram.png" />
                  </a>
                </div>
                <div className="w-14 h-14 text-gray-500 filter invert-[100%]">
                  <a href="https://twitter.com/rizkimr__" target="__blank">
                    <Image size="" image="/images/twitter2.png" />
                  </a>
                </div>
                <div className="w-14 h-14 text-gray-500 filter invert-[100%]">
                  <a href="https://www.facebook.com/khiie71" target="__blank">
                    <Image size="" image="/images/facebook.png" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-6 md:mb-0">
            <div className="">
              <h3 className="text-2xl font-semibold">Contact me on</h3>
              <div className="flex justify-center md:justify-start gap-3 mt-2">
                <div className="w-14 h-14 text-white filter invert-[100%]">
                  <a href="https://wa.me/6281380284207" target="__blank">
                    <Image size="" image="/images/whatsapp.png" />
                  </a>
                </div>
                <div className="w-14 h-14 text-gray-500 filter invert-[100%]">
                  <a
                    href="mailto:rizkimaulanarajabi13@gmail.com"
                    target="__blank"
                  >
                    <Image size="" image="/images/gmail.png" />
                  </a>
                </div>
                <div className="w-14 h-14 text-gray-500 filter invert-[100%]">
                  <a
                    href="https://www.linkedin.com/in/rizkimaulanarajabi/"
                    target="__blank"
                  >
                    <Image size="" image="/images/linkin.png" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h2 className="text-2xl font-semibold mt-10">
        Rajabi © {new Date().getFullYear()}
      </h2>
    </footer>
  );
};
