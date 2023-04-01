import { useState } from "react";
import style from "./styles.module.css";

const arrayId = [1, 2, 3];

const Home = () => {
  const [arrayIdNew, setArrayIdNew] = useState(arrayId);
  const [currentIndex, setCurrentIndex] = useState(arrayIdNew.length + 1);
  const [inputValue, setInputValue] = useState<any>({ "0": " " });

  const onClick = (index: number) => {
    setCurrentIndex(currentIndex + 1);
    arrayIdNew.splice(index + 1, 0, currentIndex);
    setArrayIdNew(arrayIdNew);
  };
  const onClickBlok = (e: any) => {
    e.stopPropagation();
  };
  const onChangeInput = (e: any, id: any) => {
    const lastLetter = e.target.value.substr(-1);
    setInputValue((prev: any) => ({ ...prev, [id]: lastLetter }));
  };
  const getAllLetters = arrayIdNew?.map((id) => {
    return inputValue && inputValue[id];
  });
  console.log(getAllLetters);
  return (
    <div className={style.blokBox}>
      <ul className={style.boxList}>
        {arrayIdNew?.map((id, index) => (
          <li key={id} onClick={() => onClick(index)} className={style.box}>
            {id}
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
