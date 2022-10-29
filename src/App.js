import "./App.css";
import { useState } from "react";

export default function App() {
  let [textValue, setTextValue] = useState(0);
  let [disabled, setDisabled] = useState(false);
  let previousValue;
  let buttonsLayoutArray = [
    { onClick: handleAC, text: "AC" },
    { onClick: handleNegative, text: "+/-" },
    { onClick: handlePercent, text: "%" },
    { onClick: () => setTextValue(textValue + " / "), text: "÷" },
    { onClick: () => handleClick(7), text: "7" },
    { onClick: () => handleClick(8), text: "8" },
    { onClick: () => handleClick(9), text: "9" },
    { onClick: () => setTextValue(textValue + " * "), text: "*" },
    { onClick: () => handleClick(4), text: "4" },
    { onClick: () => handleClick(5), text: "5" },
    { onClick: () => handleClick(6), text: "6" },
    { onClick: () => setTextValue(textValue + " - "), text: "-" },
    { onClick: () => handleClick(1), text: "1" },
    { onClick: () => handleClick(2), text: "2" },
    { onClick: () => handleClick(3), text: "3" },
    { onClick: () => setTextValue(textValue + " + "), text: "+" },
    { onClick: () => handleClick(0), text: "0" },
    { onClick: handleNegative, text: "FILLER" },
    { onClick: () => handleClick("."), text: ".", disabled: disabled },
    { onClick: handleMath, text: "=" },
  ];

  function handleClick(value) {
    if (textValue === 0) {
      setTextValue(value);
    } else {
      if (String(value).includes(".") || String(value) === ".") {
        setDisabled(true);
      }
      previousValue = textValue;
      setTextValue(String(previousValue) + value);
    }
  }

  function handlePercent() {}

  function handleMath() {
    textValue = textValue.replace(/\s/g, "");
    //setTextValue(eval(textValue));
    //ANVÄND ALDRIG EVAL()
    // function looseJsonParse(obj) {return Function(`"use strict";return (${obj})`)();}
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval#never_use_eval!
  }

  function handleNegative() {
    setTextValue(Number(textValue) * -1);
  }

  function handleAC() {
    setDisabled(false);
    setTextValue(0);
    previousValue = 0;
  }

  return (
    //gör om med en loop och index istället
    //kan jag göra detta med grid?
    <>
      <div className="textArea">
        <div className="textAreaText">{textValue}</div>
      </div>
      <div className="gridArea">
        {buttonsLayoutArray.map(({ onClick, text, disabled }) => (
          <div className="gridUnit">
            <button disabled={disabled} onClick={onClick} className="button">
              {text}
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
