// import logo from './logo.svg';
import './App.css';
import { useState } from 'react'

function App() {

  const [calc, setcalc] = useState("");
  const [result, setresult] = useState("");

  const ops = ['/', '*', '+', '-', '.'];

  const updateCalc = value => {
    if (ops.includes(value) && calc === '' || ops.includes(value) && ops.includes(calc.slice(-1))) {
      return;
    }
    setcalc(calc + value);
    if (!ops.includes(value)) {
      setresult(eval(calc + value).toString());
    }
  }

  const onclearall = () =>{
    const value='';
    setresult(value);
    setcalc(value);
  }

  const calculate=()=>{
    setcalc(result);
  }

  const createDigits = () => {
    const digits = [];

    for (let i = 1; i < 10; i++) {
      digits.push(
        <button key={i} className="btn btn-light waves-effect" onClick={() => updateCalc(i.toString())}>{i}</button>
      )
    }

    return digits;
  }


  return (
    <div className="App">
      <div className="calculator card">
        <div className="calculator-screen z-depth-1">
        {/* <input type="text" className="calculator-screen z-depth-1" value={result ? result : calc || "0"} disabled /> */}
          {/* <span>0</span> */}
          {result ? <small>({result})</small> : <small>{`0 `}</small>}
          {calc || "0"}
        </div>


        <div className="calculator-keys">

          <button type="button" className="operator btn btn-info" onClick={() => updateCalc('+')}>+</button>
          <button type="button" className="operator btn btn-info" onClick={() => updateCalc('-')}>-</button>
          <button type="button" className="operator btn btn-info" onClick={() => updateCalc('*')}>&times;</button>
          <button type="button" className="operator btn btn-info" onClick={() => updateCalc('/')}>&divide;</button>

          {createDigits()}
          <button type="button" className="btn btn-light waves-effect" onClick={() => updateCalc('0')}>0</button>
          <button type="button" className="decimal function btn btn-secondary" onClick={() => updateCalc('.')}>.</button>
          <button type="button" className="all-clear function btn btn-danger btn-sm" onClick={onclearall}>AC</button>

          <button type="button" className="equal-sign operator btn btn-default" onClick={calculate}>=</button>

        </div>
      </div>
    </div>
  );
}

export default App;
