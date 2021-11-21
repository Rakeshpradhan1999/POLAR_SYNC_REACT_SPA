import { Title } from "../../components";
import {
  Uniswap,
  Aave,
  Synthetix,
  Decentraland,
  PolkaStarter,
  WrappedBnb,
  Husd,
  CoinToken,
} from "./Images";
import "./style.css";
import { Button } from "../../components";
import Image from "../../assets/images/contact-us-image.png";
import Image2 from "../../assets/images/contact-us-image-mobile.png";
const data = [
  {
    image: Uniswap,
    text: "Uniswap v2",
  },
  {
    image: Aave,
    text: "Aave",
  },
  {
    image: Synthetix,
    text: "Synthetix",
  },
  {
    image: Decentraland,
    text: "Decentraland",
  },
  {
    image: PolkaStarter,
    text: "Polkastarter",
  },
  {
    image: WrappedBnb,
    text: "Wrapped BNB ",
  },
  {
    image: Husd,
    text: "HUSD",
  },
  {
    image: CoinToken,
    text: "CoinEx Token",
  },
];

const PartnerSection = () => {
  return (
    <section className="partners">
      <div className="container">
        <Title
          title="Our partners"
          desc="We are proud to be working with leading institutions"
        />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 my-20">
          {data.map((v, i) => (
            <div className="text-center partner-card" key={i}>
              <div className="partner-logo-wrapper">
                <v.image />
              </div>
              <p className="mt-6">{v.text}</p>
            </div>
          ))}
        </div>
        <div className="partners-contact  grid grid-cols-1 md:grid-cols-2 items-center">
          <div className="pt-10 md:pl-8 xl:pl-20 text-center md:text-left">
            <h3 className="title-text font-cursive">Interested in</h3>
            <h3 className="title-text font-cursive">super fast data?</h3>
            <Button>Contact us</Button>
          </div>
          <div className="self-end">
            <picture>
              <source media="(min-width:768px)" srcSet={Image} />
              <img src={Image2} alt="" className="w-full" />
            </picture>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerSection;
