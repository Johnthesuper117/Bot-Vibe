import React, { useState } from 'react';
import './Calculator.css';

function Calculator() {
  const [displayValue, setDisplayValue] = useState('0');
  const [operator, setOperator] = useState(null);
  const [firstOperand, setFirstOperand] = useState(null);

  const inputDigit = (digit) => {
    if (displayValue === '0') {
      setDisplayValue(digit);
    } else {
      setDisplayValue(displayValue + digit);
    }
  };

  const inputDecimal = () => {
    if (!displayValue.includes('.')) {
      setDisplayValue(displayValue + '.');
    }
  };

  const handleOperator = (nextOperator) => {
    const inputValue = parseFloat(displayValue);

    if (firstOperand === null) {
      setFirstOperand(inputValue);
    } else if (operator) {
      const result = calculate(firstOperand, inputValue, operator);
      setDisplayValue(String(result));
      setFirstOperand(result);
    }

    setOperator(nextOperator);
    setDisplayValue('0');
  };

  const clearDisplay = () => {
    setDisplayValue('0');
    setOperator(null);
    setFirstOperand(null);
  };

  const calculate = (firstOperand, secondOperand, operator) => {
    if (operator === '+') {
      return firstOperand + secondOperand;
    } else if (operator === '-') {
      return firstOperand - secondOperand;
    } else if (operator === '*') {
      return firstOperand * secondOperand;
    } else if (operator === '/') {
      return firstOperand / secondOperand;
    }

    return secondOperand;
  };

  const performCalculation = () => {
    const inputValue = parseFloat(displayValue);

    if (operator) {
      const result = calculate(firstOperand, inputValue, operator);
      setDisplayValue(String(result));
      setFirstOperand(null);
      setOperator(null);
    }
  };


  return (
    <div className="calculator">
      <div className="calculator-display">
        {displayValue}
      </div>
      <div className="calculator-buttons">
        <button onClick={clearDisplay}>AC</button>
        <button onClick={() => handleOperator('/')}>/</button>
        <button onClick={() => handleOperator('*')}>*</button>
        <button onClick={() => inputDigit('7')}>7</button>
        <button onClick={() => inputDigit('8')}>8</button>
        <button onClick={() => inputDigit('9')}>9</button>
        <button onClick={() => handleOperator('-')}>-</button>
        <button onClick={() => inputDigit('4')}>4</button>
        <button onClick={() => inputDigit('5')}>5</button>
        <button onClick={() => inputDigit('6')}>6</button>
        <button onClick={() => handleOperator('+')}>+</button>
        <button onClick={() => inputDigit('1')}>1</button>
        <button onClick={() => inputDigit('2')}>2</button>
        <button onClick={() => inputDigit('3')}>3</button>
        <button className="equals" onClick={performCalculation}>=</button>
        <button onClick={() => inputDigit('0')}>0</button>
        <button onClick={inputDecimal}>.</button>

      </div>
    </div>
  );
}

export default Calculator;
