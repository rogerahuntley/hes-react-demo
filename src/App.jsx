import { useState, useMemo, useCallback, memo } from "react";
import styled from "styled-components";
import slides from "./slides/index.js";
import { CodeBlock, tomorrowNightEighties } from "react-code-blocks";

const AppWrapper = styled.div`
  display: grid;
  grid-template-rows: 3fr 2fr auto auto;
  grid-template-columns: 1fr 300px;
  grid-template-areas:
    "code renders"
    "main renders"
    "slide renders"
    "buttons renders";
  height: 100vh;
  width: 100vw;
  background-color: #242424;
  
  // wider than 1300
  @media screen and (min-width: 1300px) {
    grid-template-rows: 1fr auto auto;
    grid-template-columns: 3fr 2fr 300px;
    grid-template-areas:
      "code main renders"
      "code slide renders"
      "code buttons renders";
  }
`;

const SlideWrapper = styled.div`
  overflow: auto;
  grid-area: main;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

const SlideDiv = styled.div`
  max-width: 800px;
  max-height: 600px;
  width: 100%;

  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const SlideTitle = styled.div`
  grid-area: slide;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  height: 20vh;
  overflow: hidden;

  .title {
    font-size: 24px;
  }
  .description {
    font-size: 18px;
  }
  padding-bottom: 10px;
`;

const ButtonWrapper = styled.div`
  grid-area: buttons;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex: 0;
  gap: 25px;

  button {
    width: 150px;
  }
  & > div {
    width: 50px;
    text-align: center;
  }
`;

const CodeWrapper = styled.div`
  grid-area: code;
  background-color: #1f1f1f;
  border-bottom: 2px solid #141414;
  overflow: auto;
  font-size: 15px;
`

const RendersWrapper = styled.div`
  grid-area: renders;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 0;
  /* background-color: #1c1c1c; */
  /* lighter */
  background-color: #1f1f1f;
  border-left: 2px solid #141414;

  & > div:first-child {
    flex: 0;
  }
`;

const Renders = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 5px;
  padding: 5px;
  overflow-y: auto;
  max-height: 50%;
  width: 80%;
`;

const Slide = memo(({ slide, render }) => {
  const ThisSlide = useMemo(() => slide.component, [slide]);

  return (
    <SlideDiv>
      <ThisSlide render={render} />
    </SlideDiv>
  );
});

function App() {
  const [count, setCount] = useState(0);
  const [renderCount, setRenderCount] = useState({ slide: 0 });

  const render = useCallback((id) => {
    setRenderCount((rc) => {
      const newRC = { ...rc };
      newRC[id] = (newRC[id] || 0) + 1;
      return newRC;
    });
  }, []);

  const increaseCount = useCallback(() => {
    setCount((c) => {
      const newC = Math.min(c + 1, slides.length - 1);
      // if change, reset render count
      if (newC !== c) {
        setRenderCount({ slide: 0 });
      }
      return newC;
    });
  }, []);

  const decreaseCount = useCallback(() => {
    setCount((c) => {
      const newC = Math.max(c - 1, 0);
      // if change, reset render count
      if (newC !== c) {
        setRenderCount(0);
      }
      return newC;
    });
  }, []);

  const slide = slides[count];

  return (
    <AppWrapper>
      <CodeWrapper>
        <CodeBlock
          text={slide.code || "console.log('ape')"}
          language={"jsx"}
          showLineNumbers={true}
          theme={tomorrowNightEighties}
        />
      </CodeWrapper>
      <SlideWrapper>
        <Slide slide={slide} render={render} />
      </SlideWrapper>
      <SlideTitle>
        {slide.title && <div className="title">{slide.title}</div>}
        {slide.description && (
          <div className="description">{slides[count].description}</div>
        )}
      </SlideTitle>
      <ButtonWrapper>
        <button onClick={decreaseCount}>Previous Slide</button>
        <div>{renderCount.slide}</div>
        <button onClick={increaseCount}>Next Slide</button>
      </ButtonWrapper>
      <RendersWrapper>
        <div>Renders:</div>
        <Renders>
          {Object.entries(renderCount).map(([id, count]) => (
            <div key={id}>
              {id}: {count}
            </div>
          ))}
        </Renders>
      </RendersWrapper>
    </AppWrapper>
  );
}

export default App;
