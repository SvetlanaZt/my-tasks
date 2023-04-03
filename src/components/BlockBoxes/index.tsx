import { useState } from "react";
import style from "./styles.module.css";
import { Box, Line } from "../Box";

var uniqid = require("uniqid");

const arrayBoxes = [
  {
    id: uniqid(),
    type: "box",
    letter: "a",
  },
  {
    id: uniqid(),
    type: "line",
  },
  {
    id: uniqid(),
    type: "box",
    letter: "b",
  },
  {
    id: uniqid(),
    type: "line",
  },
  {
    id: uniqid(),
    type: "box",
    letter: "c",
  },
  {
    id: uniqid(),
    type: "line",
  },
];

const BlockBoxes = () => {
  const [allBoxes, setAllBoxes] = useState(arrayBoxes);

  return (
    <>
      <div className={style.boxes}>
        {allBoxes.map((element, index) =>
          element.type === "box" ? (
            <Box
              key={element?.id}
              setAllBoxes={setAllBoxes}
              index={index}
              letter={element?.letter}
            />
          ) : (
            <Line key={element.id} setAllBoxes={setAllBoxes} index={index} />
          )
        )}
      </div>
      <div>
        {allBoxes?.map((box: any) => {
          return box?.letter;
        })}
      </div>
    </>
  );
};
export default BlockBoxes;
