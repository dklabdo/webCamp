import React from "react";
import { useContext } from "react";
import { AppContext } from "../AppProvider";
import Code from "./Code";
import img from "../assets/logo.svg";
import { useNavigate } from "react-router-dom";
function SideBar() {
  console.log(useContext(AppContext));
  return (
    <>
      <div className="absolute md:relative bg-white flex flex-col min-w-72 h-screen p-4 border-r-4">
        <img src={img} className="mb-8 w-52   self-center" />
        <NavLinks location="chap1" content="Basics" />
        <NavLinks location="chap2" content="Typographie" />
        <NavLinks location="chap3" content="Global attribute" />
        <NavLinks location="chap4" content="Anchor" />
        <NavLinks location="chap5" content="Containers" />
        <NavLinks location="chap6" content="lists" />
        <NavLinks location="chap7" content="tables" />
        <NavLinks location="chap8" content="Media" />
        <NavLinks location="chap9" content="Forms" />
        <NavLinks location="chap10" content="Optimization" />
      </div>
    </>
  );
}

function NavLinks({ content, location }) {
  const navigate = useNavigate();

  function HandleClick(e) {
    navigate(`${location}`);
  }
  return (
    <button
      onClick={(e) => HandleClick(e)}
      className="text-start ml-6 px-2 py-2 my-1 appearance-none transition text-xl text-main font-medium hover:gradiant"
    >
      {content}
      {""}
    </button>
  );
}

export default SideBar;
