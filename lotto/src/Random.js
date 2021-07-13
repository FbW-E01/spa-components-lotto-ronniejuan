import React, { useState } from "react";

function Random() {
  const [state, setState] = useState({
    myKey: [],
  });
  const [password, setPassword] = useState();

  console.log(Array(6));

  const generate = () => {
    const emptyArrays = Array(6);
    const randomNumber = emptyArrays
      .fill()
      .map(() => Math.floor(Math.random() * 50) + 1);
    setState({ myKey: randomNumber });
  }; 

  const reset = () => {
    setState({ myKey: [] });
  };

  return (
    <div>
      <h1 className="mb-5">Lotto 6/49</h1>
      <div>
        {state.myKey.map((x) => {
          return <span>{x}</span>;
        })}
      </div>
      <div className="d-flex mt-5">
        <button onClick={reset} type="button" class="btn btn-primary btn-lg">
          Reset
        </button>
        <button
          onClick={generate}
          type="button"
          class="btn btn-secondary btn-lg"
        >
          Generate Random Number
        </button>
      </div>
    </div>
  );
}

export default Random;
