import { MouseEvent, useState } from "react";
import "../App.css";

interface ListGroupProps {
  items: string[];
  onSelectItem: (item: string) => void; //sending function as a prop
}

const ListGroup = ({ items, onSelectItem }: ListGroupProps) => {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const handleClick = (event: MouseEvent, item: string, index: number) => {
    console.log(event);
    onSelectItem(item);
    setSelectedIndex(index);
  };

  return (
    <>
      <h1>ListGroup</h1>
      <ul>
        {items.map((item, index) => (
          <li
            key={index}
            onClick={(event) => handleClick(event, item, index)}
            className={`${selectedIndex === index && "blue"}`}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ListGroup;
