import styles from "./styles.module.css";
var uniqid = require("uniqid");

type IProps = {
  setButtonsArray: Function;
  index: number;
};
export const Buttons = ({ setButtonsArray, index }: IProps) => {
  const addNewBoxes = [
    {
      id: uniqid(),
    },
    {
      id: uniqid(),
    },
    {
      id: uniqid(),
    },
    {
      id: uniqid(),
    },
  ];
  return (
    <button
      className={styles.buttons}
      onClick={() => {
        setButtonsArray((allButtons: any) => {
          allButtons.splice(index, 0, ...addNewBoxes);
          return [...allButtons];
        });
      }}
    >
      Click me
    </button>
  );
};
