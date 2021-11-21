import "./style.css";

const Button = ({ children }) => {
  return <button className="text-black main-button">{children}</button>;
};

export default Button;

export const GlassButton = ({ children }) => {
  return <button className="text-white glass-button">{children}</button>;
};
export const OutlineButton = ({ children }) => {
  return <button className=" outline-button">{children}</button>;
};
