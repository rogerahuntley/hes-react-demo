import { useState, useEffect } from "react";

const Slide = ({ render }) => {
  useEffect(() => {
    render("slide");
  });

  const [count, setCount] = useState(0);

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Click Me</button>
    </div>
  );
}

export default {
  title: "Slide 2",
  component: Slide,
  description: "This slide shows how state changes cause re-renders",
  code: `function Slide({ render }) {
  useEffect(() => {
    render("slide");
  });

  const [count, setCount] = useState(0);

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Click Me</button>
    </div>
  );
}`,
};