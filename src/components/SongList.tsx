import { useState } from "react";

interface Props {
  SongList: string[];
  btnColor?: string;
  onClick: (index: number) => void;
}

const SongList = ({ SongList, btnColor = "#646cff", onClick }: Props) => {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  return (
    <>
      <ul className="list-group">
        {SongList.map((item, index) => (
          <li
            onClick={() => {
              setSelectedIndex(index);
              onClick(index);
            }}
            className={"list-group-item"}
            style={{
              backgroundColor: selectedIndex === index ? btnColor : "",
              color: selectedIndex === index ? "white" : "",
            }}
            key={item}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
};

export default SongList;
