// App.js
import React, { useState } from "react";

function App() {
  // State to track the counter value
  const [counter, setCounter] = useState(0);

  // Increment function
  const increment = () => setCounter(counter + 1);

  // Decrement function
  const decrement = () => setCounter(counter - 1);

  return (
    <div style={styles.container}>
      <h1>React Counter</h1>
      <p style={styles.counter}>{counter}</p>
      <button style={styles.button} onClick={increment}>
        Increment
      </button>
      <button style={styles.button} onClick={decrement}>
        Decrement
      </button>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
    marginTop: "50px",
  },
  counter: {
    fontSize: "2rem",
    color: "blue",
  },
  button: {
    margin: "10px",
    padding: "10px 20px",
    fontSize: "1rem",
  },
};

export default App;
