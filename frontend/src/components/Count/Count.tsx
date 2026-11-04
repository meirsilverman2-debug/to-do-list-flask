import React from 'react';
import "./count.css";
import { incrementAtom } from '../../atoms/incrementAtom';
import { useAtom } from 'jotai';

export default function Count() {
    const [count, setCount] = useAtom(incrementAtom);

    const increment = () => setCount((prev) => prev + 1);
    const decrement = () => setCount((prev) => prev -1)
    const reset = () => setCount(0);


  return (
    <div className='counter'>
    <div className='number-desplay'>{count}</div>
    <button className='btn-increment' onClick={increment}>increment</button>
    <button className='btn-decrement' onClick={decrement}>decrement</button>
    <button className='btn-reset' onClick={reset}>reset</button>
    </div>
  )
}
