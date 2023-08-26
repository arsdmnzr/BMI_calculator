import React,{useState} from 'react'
import './App.css';
 const App=()=>{
const [height,setHeight] =useState();
const [weight,setWeight] =useState();
const [bmi,setBmi] =useState(0);
const got=()=>{
  if(height && weight){
  const bmi = (weight/(height/100)**2).toFixed(2);
  setBmi(bmi);
  setHeight('');
  setWeight('');}
}
  return (<div>
    <div> <label>Height (Cm):</label>
      <input type='text'
      value={height}
      placeholder='Height'
      onChange={(e)=>setHeight(e.target.value)}
      />
    </div>
    <div><label>Weight (Kg):</label>
    <input type='text' value={weight}
    onChange={(e)=>setWeight(e.target.value)}
    placeholder='Weight' />
    <button onClick={got}>Calculate BMI</button>
    </div>
    <p> Your BMI is:{bmi}</p>
  </div>)
}
export default App;