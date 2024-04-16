import { useState } from "react";

interface Props {
  children: string;
  btnColor?: "pink" | "purple" | "lightblue";
  onClick: () => void;
}

function Button({ children, btnColor, onClick }: Props) {
  const [btnClicked, setBtnClicked] = useState(false);
  return (
    <button
      className="btn btn-light"
      onClick={() => {
        onClick();
        btnClicked ? setBtnClicked(false) : setBtnClicked(true);
      }}
      style={{
        backgroundColor: btnClicked ? btnColor : " ",
      }}>
      {children}
    </button>
  );
}

export default Button;
