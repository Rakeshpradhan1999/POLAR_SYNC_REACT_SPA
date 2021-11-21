/* eslint-disable jsx-a11y/anchor-is-valid */
import "./style.css";
import { Button } from "../../components";
import Arrow from "../../assets/images/footer-arrow.png";
import Group from "../../assets/images/footer-team-group.png";
import Logo from "../../assets/images/footer-logo.png";

const linklist = [
  "Campaigns",
  "Email Marketing",
  "Branding",
  "Offline",
  "Contact",
  "FAQs",
];

const socialList = [
  "fab fa-telegram-plane",
  "fab fa-discord",
  "fab fa-twitter",
  "fab fa-reddit-alien",
];
const JoinSection = () => {
  return (
    <section className="join">
      <div className="container ">
        <h4 className="title-text font-cursive text-center">JOIN OUR TEAM</h4>
        <div className="join-content">
          <div>
            <p className="text-xl leading-8 ">
              You are the only one missing here.
            </p>
            <img src={Arrow} alt="" className="arrow" />
            <img src={Group} alt="" />
          </div>
          <Button>See Open Jobs</Button>
        </div>
        <footer className="text-center">
          <img src={Logo} alt="" className="mx-auto" />
          <p className="my-6  md:mx-40 lg:mx-80 text-gray-400 text-base">
            Polar Fox is an ever-expanding ecosystem of interconnected apps and
            services, built for a decentralized future
          </p>
          <ul className="flex items-center justify-center mt-10">
            {linklist.map((item, i) => (
              <li className="mx-8 text-sm" key={i}>
                <a href="#">{item}</a>
              </li>
            ))}
          </ul>

          <ul className="flex items-center justify-center mt-10">
            {socialList.map((item, i) => (
              <li className="mx-4 text-2xl" key={i}>
                <a href="#">
                  <i className={item}></i>
                </a>
              </li>
            ))}
          </ul>
        </footer>
      </div>
    </section>
  );
};

export default JoinSection;
