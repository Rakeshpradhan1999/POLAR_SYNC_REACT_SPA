import "./style.css";
import Image1 from "../../assets/images/network1.png";
import Image2 from "../../assets/images/network2.png";
import Image3 from "../../assets/images/network3.png";
import Image4 from "../../assets/images/network4.png";
import Image5 from "../../assets/images/network5.png";
import Image6 from "../../assets/images/network6.png";
import Image7 from "../../assets/images/network7.png";
import Image8 from "../../assets/images/network8.png";
import Deficode1 from "../../assets/images/defi-code.png";
import Deficode2 from "../../assets/images/defi-code-2.png";
import { Title } from "../../components";

const data = [
  {
    image: Image1,
    name: "Ethereum",
  },
  {
    image: Image2,
    name: "Tether",
  },
  {
    image: Image3,
    name: "Sandbox",
  },
  {
    image: Image4,
    name: "DAI",
  },
  {
    image: Image5,
    name: "Avalanche",
  },
  {
    image: Image6,
    name: "Polygon",
  },
  {
    image: Image7,
    name: "BSC",
  },
  {
    image: Image8,
    name: "CELO",
  },
];

const NetworkSection = () => {
  return (
    <section className="our-networks">
      <div className="container ">
        <h4 className="title-text font-cursive text-center">
          Supported networks
        </h4>
        <div className="networks mt-20 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8">
          {data.map((v, i) => (
            <div className="text-center my-4" key={i}>
              <div className="networks-imagewrapper mx-auto">
                <img src={v.image} alt={v.name} />
              </div>
              <p className="mt-4 font-bold">{v.name}</p>
            </div>
          ))}
        </div>
        <div>
          <div className="network-btm  grid grid-cols-1 md:grid-cols-2 mt-52 items-center">
            <div className="mb-20 md:mb-0">
              <Title
                title="Reliable. Fast. Data"
                desc="Polar Sync provides a highly robust, scalable infrastructure for developers to index, query and retrieve data at exceptionally fast speeds to build beautifully responive frontend applications for analtyics, tracking, stats, games, governance and more."
              />
            </div>
            <div>
              <picture>
                <source media="(min-width:640px)" srcSet={Deficode1} />
                <img src={Deficode2} alt="" />
              </picture>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NetworkSection;
