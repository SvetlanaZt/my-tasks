import { useState } from "react";
import style from "./styles.module.css";

const array = [1, 2, 3];

const Home = () => {
  const [arrayNew, setArrayNew] = useState(array);
  const [currentElement, setCurrentElement] = useState(arrayNew.length + 1);
  const [inputValue, setInputValue] = useState<any>({ "0": " " });

  const onClickElement = (index: number) => {
    setCurrentElement(currentElement + 1);
    arrayNew.splice(index + 1, 0, currentElement);
    setArrayNew(arrayNew);
  };
  const onClickBlok = (e: any) => {
    e.stopPropagation();
  };
  const onChangeInput = (e: any, id: number) => {
    const lastLetter = e.target.value.substr(-1);
    setInputValue((prev: any) => ({ ...prev, [id]: lastLetter }));
  };
  const getAllLetters =
    arrayNew &&
    arrayNew?.map((id) => {
      return inputValue[id];
    });

  return (
    <div className={style.blokBox}>
      <ul className={style.boxList}>
        {arrayNew?.map((id, index) => (
          <li
            key={id}
            onClick={() => onClickElement(index)}
            className={style.box}
          >
            {id}
            <div className={style.wrapperInput} onClick={onClickBlok}>
              <input
                type="text"
                name="name"
                value={inputValue[id] || ""}
                onChange={(e) => onChangeInput(e, id)}
                className={style.input}
              />
            </div>
          </li>
        ))}
      </ul>
      <div>{getAllLetters}</div>
    </div>
  );
};
export default Home;
