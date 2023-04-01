import { useState } from "react";
import style from "./styles.module.css";

const arrayId = [1, 2, 3];

const Home = () => {
  const [arrayIdNew, setArrayIdNew] = useState(arrayId);
  const [currentIndex, setCurrentIndex] = useState(arrayIdNew.length + 1);
  const [inputValue, setInputValue] = useState<any>({ "0": " " });
  console.log(currentIndex);
  console.log(arrayIdNew);
  console.log(inputValue);

  const onClick = (index: number) => {
    setCurrentIndex(currentIndex + 1);
    arrayIdNew.splice(index + 1, 0, currentIndex);
    setArrayIdNew(arrayIdNew);
  };
  const onClickBlok = (e: any) => {
    e.stopPropagation();
  };
  const onChangeInput = (e: any, id: number) => {
    const lastLetter = e.target.value.substr(-1);
    setInputValue((prev: any) => ({ ...prev, [id]: lastLetter }));
  };
  const getAllLetters =
    arrayIdNew &&
    arrayIdNew?.map((id) => {
      return inputValue[id];
    });

  return (
    <div className={style.blokBox}>
      <ul className={style.boxList}>
        {arrayIdNew?.map((id, index) => (
          <li key={id} onClick={() => onClick(index)} className={style.box}>
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
