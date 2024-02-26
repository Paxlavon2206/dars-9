import React from "react";
import HeroBg from "../../assets/hero-bg.png";
import BtnImg from "/btn.svg";
import "../header/header.css";
import { useState } from "react";
import { Modal } from "../../components/modal/modal";
import Logo from "/logo.svg";
import { headerData } from "../../data/data";
import search from "/search.svg";
import heart from "/heart.svg";


export const Header = () => {
  const [show, setShow] = useState(false);
  const showModal = () => {
    setShow(true);
  };
  return (
    <div>
      <div className="header__container">
        <div className="container">
          <div className="flex justify-between">
            <div className="">
              <img src={Logo} alt="logo" />
            </div>
            <div className="flex gap-x-[32px] items-center">
              {headerData.map((item) => (
                <ul key={item.path}>
                  <li>
                    <a href={item.path}>{item.text}</a>
                  </li>
                </ul>
              ))}
            </div>
            <div className="flex items-center justify-center gap-[25px]">
              <select
                className="bg-transparent outline-none"
                name="name"
                id="id"
              >
                <option value="Eng">Eng</option>
                <option value="Rus">Rus</option>
                <option value="UZB">UZB</option>
              </select>
              <div className="w-[24px] h-[24px] gap-5 flex">
                <img src={search} alt="icon" />
                <img src={heart} alt="icon" />
              </div>
              <button className="relative right-[-40px]" onClick={showModal}>
                <img src={BtnImg} alt="btn" />
              </button>
              <p className="relative right-[-40px]">Bag 0</p>
            </div>
          </div>
        </div>
        <span className="bg-white w-100% h-[0.5px] block"></span>
      </div>
      <img className="hero_bg" src={HeroBg} alt="bg" />
     
      <Modal show={show} setShow={setShow} />
    </div>
  );
};
