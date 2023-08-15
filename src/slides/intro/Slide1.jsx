const Slide = ({ render }) => {
  render("slide");

  return <div>Hello World</div>;
}

export default {
  title: "Slide 1",
  component: Slide,
  description: "This slide shows how a component is rendered",
  code: `function Slide({ render }) {
  render("slide");

  return <div>Hello World</div>;
}`,
};