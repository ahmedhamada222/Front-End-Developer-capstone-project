import React from "react";
import ReactDOM from "react-dom/client";
// import { RouterProvider } from "react-router-dom";
// import router from "./router/RouterSetup";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import "@fontsource/markazi-text/500.css";
import "@fontsource/karla/400.css";
import reportWebVitals from "./reportWebVitals";
import { ChakraBaseProvider } from "@chakra-ui/react";
import App from "./app/App";
import theme from "./theme/customTheme";
import Footer from "./Layout/FooterSection/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ChakraBaseProvider theme={theme}>
      {/* left for ref */}
      {/* <RouterProvider router={router} /> */}
      <BrowserRouter>
        <App />
        <Footer />
      </BrowserRouter>
    </ChakraBaseProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
