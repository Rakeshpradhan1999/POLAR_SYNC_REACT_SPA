/* eslint-disable jsx-a11y/anchor-is-valid */

import { twitterData } from "./data";
const Modal = ({ image, name, pos, social, showModal, setShowModal }) => {
  const closeModal = (e) => {
    if (e.target.classList.contains("modal-wrapper")) {
      setShowModal((prev) => !prev);
    }
  };

  return showModal ? (
    <div className="modal-wrapper" onClick={closeModal}>
      <div className="modal">
        <div className="flex  justify-between items-center">
          <div className="flex items-center w-full">
            <div className="w-28 h-28 rounded-full overflow-hidden md:ml-8 mr-5">
              <img src={image} alt="" />
            </div>
            <div className="flex flex-col md:flex-row justify-between flex-1">
              <div>
                <h6 className="text-2xl font-bold">{name}</h6>
                <p className="text-xl mt-2">{pos}</p>
              </div>
              <div>
                {social.map((v, i) => (
                  <a href="#" key={i}>
                    <i className={`${v} inline-block ml-2 text-lg`} key={i}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        <p className="md:ml-10 text-base sm:mr-8 mt-4">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.Amet minim mollit non deserunt
          ullamco est sit aliqua dolor do amet sint. non deserunt ulla
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
          {twitterData.map((item, i) => (
            <div className="w-full h-full" key={i}>
              <div className="twitter-card p-4 rounded-3xl h-full">
                <div className="flex">
                  <img src={item.image} alt="" />
                  <div className="ml-4">
                    <p className="text-lg">{item.name}</p>
                    <span className="text-base" style={{ color: "#819EBC" }}>
                      {item.id}
                    </span>
                  </div>
                </div>
                <p
                  className="mt-4 text-lg"
                  dangerouslySetInnerHTML={{ __html: item.desc }}
                ></p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  ) : null;
};

export default Modal;
