import './App.css';
import { useState } from 'react';

export default function App() {
  const [textValue, setTextValue] = useState(0);
  const [disabled, setDisabled] = useState(false);
  const [isSignSet, setIsSignSet] = useState(false);
  const [previousSign, setPreviousSign] = useState('');
  let previousValue;
  const buttonLayoutArray = [
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
      onClick: () => handleMath('%'),
      text: '%',
      classes: 'button',
      gridClasses: 'gridUnit'
    },
    {
      onClick: () => handleMath('/'),
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
      onClick: () => handleMath('*'),
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
      onClick: () => handleMath('-'),
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
      onClick: () => handleMath('+'),
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
      onClick: () => handleMath('='),
      text: '=',
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

  function handleMath(sign) {
    if (sign !== previousSign) {
      let completeTextArray = String(textValue).split(' ');
      let textWithoutSign = completeTextArray[0];
      let newTextValue = String(textValue) + ' ' + sign + ' ';
      let textValueArray = newTextValue.split(' ');
      setPreviousSign(sign);

      if (textValueArray[2] === '' && textValueArray[3] !== undefined) {
        sign = textValueArray[3];
        newTextValue = textWithoutSign + ' ' + sign + ' ';
        setTextValue(newTextValue);
        textValueArray = newTextValue.split(' ');
      }

      setTextValue(newTextValue);

      if (textValueArray[2] !== '') {
        calculate(
          textValueArray[0],
          textValueArray[1],
          textValueArray[2],
          textValueArray[3]
        );
      }
    }
  }

  function calculate(value1, sign, value2, nextSign) {
    let result;

    console.log(arguments);

    switch (sign) {
      case '*':
        result = Number(value1) * Number(value2);
        break;
      case '-':
        result = Number(value1) - Number(value2);
        break;
      case '+':
        result = Number(value1) + Number(value2);
        break;
      case '/':
        result = Number(value1) / Number(value2);
        break;
      case '%':
        result = Number(value1) % Number(value2);
        break;
      default:
        return;
    }

    if (nextSign !== '=') {
      setTextValue(result.toFixed(4) + ' ' + nextSign + ' ');
    } else {
      setTextValue(result.toFixed(4));
    }
  }

  function handleNegative() {
    setTextValue(textValue * -1);
  }

  function handleAC() {
    setDisabled(false);
    setTextValue(0);
    previousValue = '';
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
