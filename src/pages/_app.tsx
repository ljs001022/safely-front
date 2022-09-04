// _app.tsx
import type { AppProps } from "next/app";
import CssBaseline from "@mui/material/CssBaseline";

const App = (props: AppProps) => {
  const { Component, pageProps } = props;

  return (
    <>
      <CssBaseline />
      <Component {...pageProps} />
    </>
  );
};

export default App;
