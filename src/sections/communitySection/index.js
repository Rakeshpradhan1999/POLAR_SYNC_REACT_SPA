import "./style.css";

import Globe from "../../assets/images/hero-globe1.png";
import Globe2 from "../../assets/images/hero-globe2.png";
const linkData = [
  {
    title: "Telegram",
    icon: "fab fa-telegram-plane",
    desc: " Ask General questions and chat with the worldwide community",
    color: "#039BE5",
  },
  {
    title: "Discord",
    icon: "fab fa-discord",
    desc: " Have  a technical questions about Polarsync? Ask a developer",
    color: "#6278F8",
  },
  {
    title: "Twitter",
    icon: "fab fa-twitter",
    desc: "Get the latest news and updates from across the ecosystem",
    color: "#03A9F4",
  },
  {
    title: "Reddit",
    icon: "fab fa-reddit-alien",
    desc: " Read the stories of our users that will motivate you to invest",
    color: "#FF5722",
  },
];

const CommunitySection = () => {
  return (
    <section className="community">
      <div className="community-bg">
        <img src={Globe} alt="" className="globe globe1" />
        <img src={Globe2} alt="" className="globe globe2" />
        <div className="container ">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="text-center md:text-left">
              <h2 className="about-title font-cursive font-black">
                meet the worldwide
                <span className="block title-text">Community</span>
              </h2>
              <p className="mt-10 md:mr-20 lg:mr-56 text-xl">
                Join a fast-growing community of crypto-lovers and investors
                connected all over the world
              </p>
            </div>
            <div className="mt-8 md:mt-0">
              {linkData.map((item, i) => (
                <div className="link-item-wrapper" key={i}>
                  <div
                    className="flex items-center linkitem"
                    style={{ color: item.color }}
                  >
                    <i className={`${item.icon} text-2xl`}></i>
                    <p className="mx-3 text-2xl font-bold">{item.title}</p>
                    <i className="fas fa-arrow-right text-2xl"></i>
                  </div>
                  <p className="text-base my-4 mb-8">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
