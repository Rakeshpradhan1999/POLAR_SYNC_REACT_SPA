/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import "./style.css";
import Tab1 from "../../assets/images/tab1-logo.png";
import Tab2 from "../../assets/images/tab2-logo.png";
import Tab3 from "../../assets/images/tab3-logo.png";
import TabImage from "../../assets/images/tabimage.png";
import globeImage from "../../assets/images/globeicon.png";
import { Title } from "../../components";

const data = [
  {
    tab: {
      logo: Tab1,
      title: "Unitrade",
      desc: "DeFi Trading Platform Built from Uniswap",
    },
    content: {
      image: TabImage,
      title: "Unitrade",
      site: "unitrade.app",
      desc: "Schedule Buys / Sells, No KYC or Limits, Professional Trading Tools, Completely Decentralized",
    },
  },
  {
    tab: {
      logo: Tab2,
      title: "PolarSync",
      desc: "Ever-expanding ecosystem of interconnected apps",
    },
    content: {
      image: TabImage,
      title: "PolarSync",
      site: "PolarSync.app",
      desc: "Schedule Buys / Sells, No KYC or Limits, Professional Trading Tools, Completely Decentralized",
    },
  },
  {
    tab: {
      logo: Tab3,
      title: "Decenterland",
      desc: "Create, explore and trade in the first-ever virtual world",
    },
    content: {
      image: TabImage,
      title: "Decenterland",
      site: "Decenterland.app",
      desc: "Schedule Buys / Sells, No KYC or Limits, Professional Trading Tools, Completely Decentralized",
    },
  },
];

const ProductSection = () => {
  const [currentActive, SetCurrentActive] = useState(0);

  const clickHandler = (i) => {
    SetCurrentActive(i);
  };

  return (
    <section className="product">
      <div className="container ">
        <div className="text-center">
          <Title
            title="Live Products"
            desc="Many of the best projects are using The Graph in production today."
          />
          <div className="grid grid-cols-1 md:grid-cols-12 mt-40 gap-10">
            <div className="md:col-span-5">
              {data.map((item, i) => (
                <div
                  className={`tab ${
                    currentActive === i ? "active" : ""
                  } p-6 py-4 rounded-2xl mb-4 cursor-pointer`}
                  key={i}
                  onClick={() => clickHandler(i)}
                >
                  <div className="flex items-center mb-2 ">
                    <img src={item.tab.logo} alt="" />
                    <h6 className="ml-2 text-2xl font-bold">
                      {item.tab.title}
                    </h6>
                  </div>
                  <p className="text-sm text-left">{item.tab.desc}</p>
                </div>
              ))}
            </div>
            <div className="md:col-span-7">
              {data.map((item, i) => (
                <div
                  className={`${currentActive === i ? "block" : "hidden"}`}
                  key={i}
                >
                  <div>
                    <img src={item.content.image} alt="" className="" />
                  </div>
                  <div className="mt-10">
                    <div className="flex mb-6 ">
                      <h6 className="text-2xl font-bold">
                        {item.content.title}
                      </h6>
                      <a href="#" className="flex items-center ml-10">
                        <img
                          src={globeImage}
                          alt=""
                          className="flex-shrink-0 mr-2"
                        />
                        <span style={{ color: "#7DCCF8" }}>
                          {item.content.site}
                        </span>
                      </a>
                    </div>
                    <p className="text-left font-normal text-sm md:mr-64">
                      Schedule Buys / Sells, No KYC or Limits, Professional
                      Trading Tools, Completely Decentralized
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
