/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import "./style.css";
import { Title } from "../../components";
import Team1 from "../../assets/images/team1.png";
import Team2 from "../../assets/images/team2.png";
import Team3 from "../../assets/images/team3.png";
import Team4 from "../../assets/images/team4.png";
import Modal from "./Modal";

const data = [
  {
    img: Team1,
    name: "Reborn",
    pos: "CEO & Founder",
    social: ["fab fa-github", "fab fa-twitter"],
  },
  {
    img: Team2,
    name: "Jaydon Dias",
    pos: "Senior Java Engineer",
    social: ["fab fa-github", "fab fa-twitter", "fab fa-codepen"],
  },
  {
    img: Team3,
    name: "Marilyn Westervelt",
    pos: "Marketing Specialist",
    social: ["fab fa-github", "fab fa-twitter", "fab fa-codepen"],
  },
  {
    img: Team4,
    name: "Tatiana Bergson",
    pos: "Key Account Manager",
    social: ["fab fa-github", "fab fa-twitter", "fab fa-codepen"],
  },
];

const TeamSection = () => {
  const [showModal, setShowModal] = useState(false);
  const [currentItem, setCurrentItem] = useState({});
  const clickHandler = (item) => {
    setCurrentItem(item);
    console.log(currentItem ? true : false);
    if (currentItem) {
      setShowModal((prev) => !prev);
    }
  };

  return (
    <section className="team">
      <Modal
        image={currentItem.img}
        name={currentItem.name}
        pos={currentItem.pos}
        social={currentItem.social}
        showModal={showModal}
        setShowModal={setShowModal}
      />
      <div className="container">
        <div className=" text-center">
          <Title title="Our Team" desc="" />
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-8 md:gap-y-4 gap-4 mt-20">
          {data.map((item, i) => (
            <div key={i}>
              <div
                className="cursor-pointer"
                onClick={() => clickHandler(item)}
              >
                <img src={item.img} alt="" className="w-full" />
              </div>
              <div className="flex justify-start sm:justify-between sm:items-center flex-col sm:flex-row">
                <div>
                  <p className="text-lg mt-4 font-bold">{item.name}</p>
                  <span className="text-xs">{item.pos}</span>
                </div>
                <div className=" flex  items-center mt-2 sm:mt-0">
                  {item.social.map((v, i) => (
                    <a href="#" key={i}>
                      <i
                        className={`${v} inline-block ml-2 text-lg`}
                        key={i}
                      ></i>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
