import React from "react";
import Button from "../../atom/Button";
import { Link } from "react-router-dom";

// NESTED COMPONENT

export default function CardProduct(props) {
  const { children } = props;
  return (
    <>
      <div className=" p-3 rounded-lg p-1 shadow-xl">
        <div className="p-2 w-full max-w-xl bg-[#1428A0] rounded-lg">
          {" "}
          {children}{" "}
        </div>
      </div>
    </>
  );
}

const Header = (props) => {
  const { image } = props;
  return (
    <>
      <div className="flex w-full justify-center items-center text-center p-6 ">
        <div className=" w-40 h-40 flex justify-center items-center bg-white rounded-full ">
          {/* <div className='absolute top-[-70px] right-0 translate-x-16 bg-red-500 rounded-full'> */}
          <a href="#">
            <img src={image} alt="gambar" className="p-4 rounded-t-lg" />
          </a>
        </div>
      </div>
    </>
  );
};

const Body = (props) => {
  const { title, children } = props;
  return (
    <>
      <div className=" px-5 py-4">
        <a href="#">
          <h5 className="p-2 mb-2 text-3xl font-bold text-white"> {title}</h5>
          <p className="mt-1 text-white text-base"> {children}</p>
        </a>
      </div>
    </>
  );
};

const Footer = (props) => {
  const { tempat, children, tanggal } = props;
  return (
    <>
      <div className="px-5 py-4">
        <p className="pt-4 m-2 text-xl font-semibold text-white"> {tempat}</p>
        <p className="pt-4 m-2 text-xl font-semibold text-white"> {tanggal}</p>
      </div>
    </>
  );
};

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;
