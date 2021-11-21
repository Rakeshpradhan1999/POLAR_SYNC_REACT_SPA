// eslint-disable-next-line no-unused-vars
import { Button, Header } from "../../components";
import { GlassButton } from "../../components/button";
import Image from "../../assets/images/banner-triangle.png";
import Image2 from "../../assets/images/banner-triangle-mobile.png";
import Globe1 from "../../assets/images/hero-globe1.png";
import Globe2 from "../../assets/images/hero-globe2.png";
import Globe3 from "../../assets/images/hero-globe3.png";
import "./style.css";
const BannerSection = () => {
  return (
    <section className="banner pt-60 pb-0 lg:py-0 lg:pt-0 text-center lg:text-left overflow-hidden">
      <Header />
      <div className="container">
        <div className="grid grid-cols-1 gap-4 lg:pb-16 lg:gap-0  lg:grid-cols-12 items-center">
          <div className="lg:col-span-7 xl:col-span-6">
            <h2 className="title-text font-cursive">Big data</h2>
            <h3 className="title-text font-cursive">on the blockchain</h3>
            <p className="lg:pr-20 custom-text">
              Polar Fox is an ever-expanding ecosystem of interconnected apps
              and services, built for a decentralized future
            </p>
            <div className="banner-btn-group mt-8">
              <Button>Learn More</Button>
              <GlassButton>Read Docs</GlassButton>
            </div>
          </div>
          <div className="pt-0 lg:col-span-5 xl:col-span-6  banner-image">
            <picture>
              <source media="(min-width:1024px)" srcSet={Image} />
              <img src={Image2} alt="" />
            </picture>
          </div>
        </div>
      </div>
      <img src={Globe1} className="hero-globe globe1" alt="" />
      <img src={Globe2} className="hero-globe globe2" alt="" />
      <img src={Globe3} className="hero-globe globe3" alt="" />
    </section>
  );
};

export default BannerSection;
