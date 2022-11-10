import './App.css';
import { useState } from 'react';

export default function App() {
  let [textValue, setTextValue] = useState(0);
  let [disabled, setDisabled] = useState(false);
  let previousValue;
  let buttonLayoutArray = [
    {
      onClick: handleAC,
      text: 'AC',
      classes: 'button',
      gridClasses: 'gridUnit'
    },
    {
      onClick: handleNegative,
      text: '+/-',
      classes: 'button',
      gridClasses: 'gridUnit'
    },
    {
      onClick: handlePercent,
      text: '%',
      classes: 'button',
      gridClasses: 'gridUnit'
    },
    {
      onClick: () => setTextValue(textValue + ' / '),
      text: '÷',
      classes: 'button',
      gridClasses: 'gridUnit'
    },
    {
      onClick: () => handleClick(7),
      text: '7',
      classes: 'button',
      gridClasses: 'gridUnit'
    },
    {
      onClick: () => handleClick(8),
      text: '8',
      classes: 'button',
      gridClasses: 'gridUnit'
    },
    {
      onClick: () => handleClick(9),
      text: '9',
      classes: 'button',
      gridClasses: 'gridUnit'
    },
    {
      onClick: () => setTextValue(textValue + ' * '),
      text: '*',
      classes: 'button',
      gridClasses: 'gridUnit'
    },
    {
      onClick: () => handleClick(4),
      text: '4',
      classes: 'button',
      gridClasses: 'gridUnit'
    },
    {
      onClick: () => handleClick(5),
      text: '5',
      classes: 'button',
      gridClasses: 'gridUnit'
    },
    {
      onClick: () => handleClick(6),
      text: '6',
      classes: 'button',
      gridClasses: 'gridUnit'
    },
    {
      onClick: () => setTextValue(textValue + ' - '),
      text: '-',
      classes: 'button',
      gridClasses: 'gridUnit'
    },
    {
      onClick: () => handleClick(1),
      text: '1',
      classes: 'button',
      gridClasses: 'gridUnit'
    },
    {
      onClick: () => handleClick(2),
      text: '2',
      classes: 'button',
      gridClasses: 'gridUnit'
    },
    {
      onClick: () => handleClick(3),
      text: '3',
      classes: 'button',
      gridClasses: 'gridUnit'
    },
    {
      onClick: () => setTextValue(textValue + ' + '),
      text: '+',
      classes: 'button',
      gridClasses: 'gridUnit'
    },
    {
      onClick: () => handleClick(0),
      text: '0',
      classes: 'button zeroButton',
      gridClasses: 'gridUnit gridZeroButton'
    },
    {
      onClick: () => handleClick('.'),
      text: '.',
      disabled: disabled,
      classes: 'button',
      gridClasses: 'gridUnit'
    },
    {
      onClick: handleMath,
      text: '=',
      style: { backgroundColor: 'darkgrey' },
      classes: 'button mathButton',
      gridClasses: 'gridMathButton gridUnit '
    }
  ];

  function handleClick(value) {
    if (textValue === 0) {
      setTextValue(value);
    } else {
      if (String(value).includes('.') || String(value) === '.') {
        setDisabled(true);
      }
      previousValue = textValue;
      setTextValue(String(previousValue) + value);
    }
  }

  function handlePercent() {}

  function handleMath() {
    textValue = textValue.replace(/\s/g, '');
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
    <>
      <div className="textArea">
        <div className="textAreaText">{textValue}</div>
      </div>
      <div className="gridArea">
        {buttonLayoutArray.map(
          ({ gridClasses, onClick, text, disabled, classes }) => (
            <div className={gridClasses}>
              <button disabled={disabled} onClick={onClick} className={classes}>
                {text}
              </button>
            </div>
          )
        )}
      </div>
    </>
  );
}
