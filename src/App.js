// import logo from './logo.svg';
import './App.css';
import { useState } from 'react'

function App() {

  const [calc, setcalc] = useState("");
  const [result, setresult] = useState("");

  const ops = ['/', '*', '+', '-', '.', '%'];

  const updateCalc = value => {

    var mainMath = "0";
    var subMath = "00";

    if(value === mainMath || value === subMath){
      return;
    }else if (ops.includes(value) && calc === '' || ops.includes(value) && ops.includes(calc.slice(-1))) {
      return;
    }
    setcalc(calc + value);
    if (!ops.includes(value)) {
      setresult(eval(calc + value).toString());
    }
  }

  const onclearall = () => {
    const value = '';
    setresult(value);
    setcalc(value);
  }

  const deleteLast = () => {
    if (calc == '') {
      return;
    }
    const value = calc.slice(0,-1);
    setcalc(value);
    setresult(value);
  }

  const calculate = () => {
    setcalc(result);
  }

  const createDigits = () => {
    const digits = [];

    for (let i = 1; i < 10; i++) {
      digits.push(
        <button key={i} className="digit" onClick={() => updateCalc(i.toString())}>{i}</button>
      )
    }

    return digits;
  }

  return (
    <div className="calculator">
      <div className="display">
        {result ? <small>({calc})</small> : <small>{`0 `}</small>}
        {result || "0"}
      </div>


      <div className="">
        <div className="topRow">
          <button className="operator" onClick={onclearall}>AC</button>
          <button className="operator" onClick={onclearall}>CA</button>
          <button className="operator" onClick={deleteLast}>DEL</button>
          <button id="division" className="operator" onClick={() => updateCalc('/')}>/</button>
        </div>

        <div className="inputs">
        <div className="digits">
        {createDigits()}
        <button id="multiplication" className="digit" onClick={() => updateCalc('00')}>00</button>
        <button className="digit" onClick={() => updateCalc('0')}>0</button>
        <button id="multiplication" className="digit" onClick={() => updateCalc('.')}>.</button>
          </div>

          <div className="operators">

            <button id="multiplication" className="operator" onClick={() => updateCalc('*')}>*</button>
            <button id="subtraction" className="operator" onClick={() => updateCalc('-')}>-</button>
            <button id="addition" className="operator" onClick={() => updateCalc('+')}>+</button>
            <button id="equals" className="operator" onClick={calculate}>=</button>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
