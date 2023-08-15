import { useState, useEffect, memo } from "react";

const MemoizedRandomComponent = memo(({ render, text }) => {
  useEffect(() => {
    render("random");
  });

  return (
    <div>
      <p>{text}</p>
    </div>
  );
});

const Slide = ({ render }) => {
  useEffect(() => {
    render("slide");
  });

  const [count, setCount] = useState(0);

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Click Me</button>
      <MemoizedRandomComponent
        render={render}
        text={"Memoized Random Component"}
      />
    </div>
  );
}

export default {
  title: "Slide 8",
  component: Slide,
  description: "This slide shows how memoization can prevent re-renders",
  code: `const MemoizedRandomComponent = memo(({ render, text }) => {
  useEffect(() => {
    render("random");
  });

  return (
    <div>
      <p>{text}</p>
    </div>
  );
});

function Slide({ render }) {
  useEffect(() => {
    render("slide");
  });

  const [count, setCount] = useState(0);

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Click Me</button>
      <MemoizedRandomComponent
        render={render}
        text={"Memoized Random Component"}
      />
    </div>
  );
}`,
};
