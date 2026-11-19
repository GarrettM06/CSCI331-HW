"use client";

import { useState } from "react";

// A counter whose step size comes in through props.
export default function Counter({ label, incrementBy = 1, maxCount = 10}) {
  const [count, setCount] = useState(0);

  return (
    <div className="card counter">
      <h2>{label}</h2>
      <p className="count">{count}</p>
      <div className="buttons">
        <button onClick={() => setCount(count - incrementBy)} disabled={count - incrementBy < 0}>
          -{incrementBy}
        </button>
        <button onClick={() => setCount(0)}>Reset</button>
        <button onClick={() => setCount(count + incrementBy)} disabled={count + incrementBy > maxCount}>
          +{incrementBy}
        </button>
      </div>
    </div>
  );
}
