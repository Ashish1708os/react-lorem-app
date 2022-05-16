import React, { useState } from "react";
import data from "./data";
function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("hello world");
    // console.log(typeof count); //even though input tag is of number type the value we get will be string so typeof count returns string and not number
    let amount = parseInt(count); // this will convert to int
    // console.log(typeof amount);
    if (count <= 0) {
      amount = 1;
    }
    if (count > data.length) {
      amount = data.length;
    }
    setText(data.slice(0, amount)); // in slice end(amount) is not included in range means slice[start, end)
  };

  return (
    <section className="section-center">
      <h3>tired of boring lorem ipsum?</h3>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="amount">paragraphs: </label>
        <input
          type="number"
          name="amount"
          id="amount"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button type="submit" className="btn">
          generate
        </button>
      </form>
      <article className="lorem-text">
        {text.map((para, index) => {
          return <p key={index}>{para}</p>;
        })}
      </article>
    </section>
  );
}

export default App;
