import { useState } from "react";

function Square() {
  return <button>X</button>;
}

function App() {
  return (
    <div className="board">
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
    </div>
  );
}

export default App;
