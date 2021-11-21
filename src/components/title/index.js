import "./style.css";

const Title = ({ title, desc }) => {
  return (
    <div className="title">
      <h3 className="title-text font-cursive">{title}</h3>
      <p>{desc}</p>
    </div>
  );
};

export default Title;
