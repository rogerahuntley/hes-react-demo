import { useState, useEffect } from "react";

const RandomComponent = ({ render, text }) => {
  useEffect(() => {
    render("random");
  });

  return (
    <div>
      <p>{text}</p>
    </div>
  );
};

const Slide = ({ render }) => {
  useEffect(() => {
    render("slide");
  });

  const [count, setCount] = useState(0);

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Click Me</button>
      <RandomComponent render={render} text={"Random Component"} />
    </div>
  );
}

export default {
  title: "Slide 3",
  component: Slide,
  description:
    "This slide shows how re-rendering a parent component causes all children to re-render",
  code: `const RandomComponent = ({ render, text }) => {
  useEffect(() => {
    render("random");
  });

  return (
    <div>
      <p>{text}</p>
    </div>
  );
};

function Slide({ render }) {
  useEffect(() => {
    render("slide");
  });

  const [count, setCount] = useState(0);

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Click Me</button>
      <RandomComponent render={render} text={"Random Component"} />
    </div>
  );
}`,
};