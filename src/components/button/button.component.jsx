import "./button.styles.css";

const Button = ({label, btnStyle}) => {
  return <button className={btnStyle}>{label}</button>;
};

export default Button;
