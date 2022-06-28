import 'bootstrap/dist/css/bootstrap.min.css';
import Counter from './components/counter';
import Inecrement from './components/increment';
import Decrement from './components/decrement';
import { useState } from 'react';

function App() {
  const [counter , setCounter]= useState(0)
  console.log(counter)
  const increaseingFn =()=>{
    setCounter(counter+1)
  }
  const dcreaseingFn =()=>{
    if(counter>0){
      setCounter(counter-1)
    }
  }
  return (
    <div className='mx-auto w-50 mt-5'>
      <h1 className=''>Counter :</h1>
      <Counter counter={counter} />
      <Inecrement IncreCount={increaseingFn} />
      <Decrement DcreCount={dcreaseingFn} />
    </div>
  );
}
export default App;
