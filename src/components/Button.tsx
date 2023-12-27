interface ButtonProp {
  text: string;
  onClick: () => void;
  className: string;
  // this definition is good because if they send not valid color, we can get error by typescript
  color?: "red" | "gray" | "blue" | "purple";
}

//if they don't send a value, there is still default value,
// but we need to add ? in the interface because we don't send it sometimes
const Button = ({ text, onClick, className, color = "purple" }: ButtonProp) => {
  return (
    <button onClick={onClick} className={className} style={{ color }}>
      {text}
    </button>
  );
};

export default Button;
