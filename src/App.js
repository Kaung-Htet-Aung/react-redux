import React from 'react'
import { useSelector,useDispatch} from "react-redux";
import { increment } from './action';
import { decrement } from './action';
function App() {
  const counter=useSelector(state=>state.counter)
  const dispatch=useDispatch();
  
  return (
   <div>Counter {counter}
     <button onClick={()=>{dispatch(increment())}}>+</button>
     <button onClick={()=>{dispatch(decrement())}}>-</button>
   </div>
  
  );
}

export default App;
