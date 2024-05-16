import React from "react";

export default function DashboardDescription(props) {
  const { title, children, margin, size, textColor } = props;
  return (
    <>
      <div className="py-4">
        <h1
          className={`text-3xl justify-center text-center items-center font-bold  ${textColor} mb-5`}
        >
          {" "}
          {title}
        </h1>
        <p className={`mt-1 text-1xl text-black ${size} ${margin}`}>
          {" "}
          {children}
        </p>
      </div>
    </>
  );
}
