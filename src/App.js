import "./App.css";
import { useState } from "react";

export default function App() {
  let [textValue, setTextValue] = useState(0);
  let [disabled, setDisabled] = useState(false);
  let previousValue;

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

  function handleMath() {
    textValue = textValue.replace(/\s/g, "");
    setTextValue(eval(textValue));
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
    <>
      //gör om med en loop och index istället
      <div className="textArea">
        <div className="textAreaText">{textValue}</div>
      </div>
      <div className="gridArea">
        <div className="gridUnit">
          <button
            onClick={() => {
              handleAC();
            }}
            className="button"
          >
            AC
          </button>
        </div>
        <div className="gridUnit">
          <button
            onClick={() => {
              handleNegative();
            }}
            className="button"
          >
            +/-
          </button>
        </div>
        <div className="gridUnit">
          <button className="button">%</button>
        </div>
        <div className="gridUnit">
          <button
            onClick={() => {
              setTextValue(textValue + " / ");
            }}
            className="button"
          >
            ÷
          </button>
        </div>
        <div className="gridUnit">
          <button
            onClick={() => {
              handleClick(7);
            }}
            className="button"
          >
            7
          </button>
        </div>
        <div className="gridUnit">
          <button
            onClick={() => {
              handleClick(8);
            }}
            className="button"
          >
            8
          </button>
        </div>
        <div className="gridUnit">
          <button
            onClick={() => {
              handleClick(9);
            }}
            className="button"
          >
            9
          </button>
        </div>
        <div className="gridUnit">
          <button
            onClick={() => {
              setTextValue(textValue + " * ");
            }}
            className="button"
          >
            *
          </button>
        </div>
        <div className="gridUnit">
          <button
            onClick={() => {
              handleClick(4);
            }}
            className="button"
          >
            4
          </button>
        </div>
        <div className="gridUnit">
          <button
            onClick={() => {
              handleClick(5);
            }}
            className="button"
          >
            5
          </button>
        </div>
        <div className="gridUnit">
          <button
            onClick={() => {
              handleClick(6);
            }}
            className="button"
          >
            6
          </button>
        </div>
        <div className="gridUnit">
          <button
            onClick={() => {
              setTextValue(textValue + " - ");
            }}
            className="button"
          >
            -
          </button>
        </div>
        <div className="gridUnit">
          <button
            onClick={() => {
              handleClick(1);
            }}
            className="button"
          >
            1
          </button>
        </div>
        <div className="gridUnit">
          <button
            onClick={() => {
              handleClick(2);
            }}
            className="button"
          >
            2
          </button>
        </div>
        <div className="gridUnit">
          <button
            onClick={() => {
              handleClick(3);
            }}
            className="button"
          >
            3
          </button>
        </div>
        <div className="gridUnit">
          <button
            onClick={() => {
              setTextValue(textValue + " + ");
            }}
            className="button"
          >
            +
          </button>
        </div>
        <div className="gridUnit">
          <button
            onClick={() => {
              handleClick(0);
            }}
            className="button"
          >
            0
          </button>
        </div>
        <div className="gridUnit">
          <button className="button">FILLER</button>
        </div>
        <div className="gridUnit">
          <button
            disabled={disabled}
            onClick={() => {
              handleClick(".");
            }}
            className="button"
          >
            .
          </button>
        </div>
        <div className="gridUnit">
          <button
            onClick={() => {
              handleMath();
            }}
            className="button"
          >
            =
          </button>
        </div>
      </div>
    </>
  );
}
