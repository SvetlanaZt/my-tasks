import { useState } from "react";
import style from "./styles.module.css";

const array = [1, 2, 3];

const Home = () => {
  const [arrayNew, setArrayNew] = useState(array);
  const [currentElement, setCurrentElement] = useState(arrayNew.length + 1);
  const [objectInputValues, setObjectInputValues] = useState<any>({ "0": " " });

  const onClickElement = (index: number) => {
    setCurrentElement(currentElement + 1);
    arrayNew.splice(index + 1, 0, currentElement);
    setArrayNew(arrayNew);
  };
  const onClickBlok = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };
  const onChangeInput = (
    e: React.ChangeEvent<HTMLInputElement>,
    id: number
  ) => {
    const value = e.target.value;
    const lastLetter = value.substr(-1);
    setObjectInputValues((prev: object) => ({ ...prev, [id]: lastLetter }));
  };
  const getAllLetters =
    arrayNew &&
    arrayNew?.map((element) => {
      return objectInputValues[element];
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
            <div className={style.wrapperInput} onClick={onClickBlok}>
              <input
                type="text"
                name="name"
                value={objectInputValues[id] || ""}
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
