import React, { useState, useEffect } from "react";


export function Counter({ initialValue = 0 }) {
  const [counter, setCounter] = useState(initialValue);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((c) => {
        return c + 1
      })}, 1000);

      return () =>  clearInterval(interval) ;
   }, [counter])


   return (
   <div>
    <h1>{counter}</h1>
    </div>
   )
}
