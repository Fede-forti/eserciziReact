import React from "react";

export function Sum({ a, b }) {
  const numbers = [a + b];

  return (
    <div>
      <h1>The result is {numbers}</h1>
    </div>
  );
}
