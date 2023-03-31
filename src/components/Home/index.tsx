import { useState } from "react";
import style from "./styles.module.css";

const arrayId = [1, 2, 3];

const Home = () => {
  const [arrayIdNew, setArrayIdNew] = useState(arrayId);
  const [currentIndex, setCurrentIndex] = useState(arrayIdNew.length);
  const [inputValue, setInputValue] = useState<any>({ "0": " " });
  console.log(inputValue);

  const onClick = (id: number, e: any) => {
    setCurrentIndex(currentIndex + 1);
    arrayIdNew.splice(id, 0, currentIndex + 1);
    setArrayIdNew(arrayIdNew);
  };
  const onClickBlok = (e: any) => {
    e.stopPropagation();
  };
  const onChangeInput = (e: any, id: any) => {
    // const value = e.target.value;
    const lastLetter = e.target.value.substr(-1);
    setInputValue((prev: any) => ({ ...prev, [id]: lastLetter }));
  };
  const getAllLetters = Object.values(inputValue).join("");

  return (
    <div className={style.blokBox}>
      <ul className={style.boxList}>
        {arrayIdNew?.map((id) => (
          <li key={id} onClick={(e) => onClick(id, e)} className={style.box}>
            <div className={style.wrapperInput} onClick={onClickBlok}>
              <input
                type="text"
                name={id.toString()}
                value={inputValue[id.toString()]}
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
