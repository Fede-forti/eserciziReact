import React from "react";

export function Sum({ numbers }) {
    const result = numbers.reduce((acc, currentv) => acc + currentv );
  
    return (
      <div>
        <h1>The result is {result}</h1>
      </div>
    );
  }