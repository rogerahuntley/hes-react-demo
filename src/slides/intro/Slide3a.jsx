import { useState, useEffect } from "react";

const NoPropsRandomComponent = () => {
  useEffect(() => {
    alert("render!")
  });

  return (
    <div>
      <p>{"No Params Component"}</p>
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
      <NoPropsRandomComponent />
    </div>
  );
}

export default {
  title: "Slide 3a",
  component: Slide,
  description: "This slide shows how re-rendering a parent component causes all children to re-render, even if they don't have props",
  code: `const NoPropsRandomComponent = () => {
  useEffect(() => {
    alert("render!")
  });

  return (
    <div>
      <p>{"No Params Component"}</p>
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
      <NoPropsRandomComponent />
    </div>
  );
}`
};
