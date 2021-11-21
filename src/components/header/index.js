import { useState } from "react";
import Logo from "../../assets/images/logo.png";
import { OutlineButton } from "../button";
import NavBtn from "../../assets/images/list-bullet.png";
import "./style.css";
const Index = () => {
  const [open, setOpen] = useState(false);
  const [activeNav, setActiveNav] = useState(false);
  const menuHandler = () => {
    setOpen((prev) => !prev);
  };

  const changeBackground = () => {
    if (window.scrollY >= 100) {
      setActiveNav(true);
    } else {
      setActiveNav(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  const menuData = [
    {
      item: "Explore",
      link: "#explore",
    },
    {
      item: "Insights",
      link: "#insights",
    },
    {
      item: "Docs",
      link: "#docs",
    },
    {
      item: "Jobs",
      link: "#jobs",
    },
    {
      item: "Support",
      link: "#support",
    },
  ];
  return (
    <>
      <header
        className={`${
          activeNav ? "activeNav" : null
        }  fixed top-0 left-0 w-full py-6`}
      >
        <div className="container p-4 flex items-center">
          <div className="flex-1 md:flex-none">
            <img src={Logo} alt="logo" />
          </div>
          <div className="flex-1 ml-10 hidden md:block">
            <ul className="flex navbar">
              {menuData.map((item, i) => (
                <li key={i}>
                  <a href={item.link}>{item.item}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="hidden md:block">
            <OutlineButton>Get Started</OutlineButton>
          </div>
          <button className="md:hidden" onClick={menuHandler}>
            <img src={NavBtn} alt="" />
          </button>
        </div>
      </header>
      <div className={`mobile-menu ${open ? "open" : null}`}>
        <div className="close">
          <button onClick={menuHandler}>
            <i className="fas fa-times"></i>
          </button>
        </div>
        <ul>
          {menuData.map((item, i) => (
            <li key={i} onClick={menuHandler}>
              <a href={item.link}>{item.item}</a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Index;
