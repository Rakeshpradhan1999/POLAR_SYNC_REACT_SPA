import "./style.css";
import Image from "../../assets/images/about-image.png";
import ImageMobile from "../../assets/images/about-image-mobile.png";
import Image2 from "../../assets/images/about-btm-image2.png";
import Image3 from "../../assets/images/about-btm-image2-mobile.png";

const AboutSection = () => {
  return (
    <section className="about">
      <div className="container">
        <h2 className="about-title font-cursive font-black">
          BUILD and let us worry
          <span className="block title-text">about data, with paragraph</span>
        </h2>
        <p className="text-center text-lg md:mx-36 mt-8 leading-8 font-normal">
          Before Polar Sync, teams had to develop and operate proprietary
          indexing servers. This required significant engineering and hardware
          resources and broke the important security properties required for
          decentralization.
        </p>
        <picture>
          <source media="(min-width:768px)" srcSet={Image} />
          <img src={ImageMobile} alt="" className="w-full" />
        </picture>
        <div className="about-btm grid grid-cols-1 md:grid-cols-2 ">
          <div className="p-10 text-center md:text-left md:p-20 ">
            <h4 className="title-text font-cursive">Use cases</h4>
            <p className="text-lg lg:mr-14 mt-4">
              Decentralized applications are continuing to expand and impact
              existing markets dramatically.
            </p>
          </div>
          <div>
            <picture>
              <source media="(min-width:768px)" srcSet={Image2} />
              <img src={Image3} alt="" />
            </picture>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
