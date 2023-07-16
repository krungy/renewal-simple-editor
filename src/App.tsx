import normalize from "emotion-normalize";
import { Global, css } from "@emotion/react";
import Notion from "pages/Notion";

export default function App() {
  return (
    <>
      <Global
        styles={css`
          ${normalize}
          h1, h2, h3, h4, h5, h6 {
            font-size: 1em;
            font-weight: normal;
            margin: 0;
          }
        `}
      />
      <Notion />
    </>
  );
}
