import { useState } from 'react'
import './App.css'

const App = () => {
  const [count, setcount] = useState(0)
  return <div className="flex justify-center h-screen items-center text-4xl">
    <button className="bg-green-500 w-12 rounded-md"
      onClick = {()=> setcount(count-1)}
      >-</button>
    <div className="m-4 w-40 text-center text-slate-400">{count}</div>
    <button className="bg-red-500 w-12 rounded-md"
      onClick = {()=> setcount(count+1)}
      >+</button>
  </div>;
};

export default App
