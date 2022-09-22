import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
  const [num1, setnum1] = useState(0);
  const [num2, setnum2] = useState(0);
  const [resultado, setResultado] = useState(0);

  const calcular = () =>{
    return parseFloat(num1) * parseFloat(num2);
  }

  useEffect(()=>{
    setResultado(calcular())
  }, [num1, num2]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Multiplicador de números</h1>
          
          <label>Primeiro número</label>
            <input 
              type="number" 
              value = {num1}
              onChange = {(e) => setnum1(e.target.value)}/>
          
          <label>Segundo número</label>
            <input 
              type="number"
              value = {num2}
              onChange = {(e) => setnum2(e.target.value)}/> 
            
            <label>Resultado: {resultado}</label>
      </header> 
    </div>
  );
}

export default App;
