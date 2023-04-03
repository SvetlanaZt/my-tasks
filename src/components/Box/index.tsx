import style from "./styles.module.css";
var uniqid = require("uniqid");

type IPropsBox = {
  setAllBoxes: Function;
  index: number;
  letter: string | undefined;
};
type IPropsLine = {
  setAllBoxes: Function;
  index: number;
};
type IObject = {
  id: number;
  type: string;
  letter: string;
};

export function Box({ setAllBoxes, index, letter }: IPropsBox) {
  const onChangeInput = (e: any) => {
    const lastLetter = e.target.value.substr(-1);
    setAllBoxes((allBoxes: IObject[]) => {
      allBoxes[index].letter = lastLetter;
      return [...allBoxes];
    });
  };
  return (
    <div className={style.box}>
      <input value={letter} className={style.input} onChange={onChangeInput} />
    </div>
  );
}

export function Line({ setAllBoxes, index }: IPropsLine) {
  const addNewBoxes = [
    {
      id: uniqid(),
      type: "line",
    },
    {
      id: uniqid(),
      type: "box",
      letter: "p",
    },
  ];
  return (
    <div
      className={style.line}
      onClick={() => {
        setAllBoxes((allBoxes: any) => {
          allBoxes.splice(index, 0, ...addNewBoxes);
          return [...allBoxes];
        });
      }}
    ></div>
  );
}
