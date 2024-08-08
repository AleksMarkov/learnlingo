// index.js
// index.js
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import App from "components/App";
import { store, persistor } from "./redux/store";
import "./index.css";
import GlobalStyles from "GlobalStyles";
import "./assets/theme/themeHome.css";
import "./firebase";
import { ToastContainer } from "react-toastify";
import { ThemeProvider } from "./components/Theme/ThemeContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="/learnlingo">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ThemeProvider>
            <GlobalStyles />
            <App />
            <ToastContainer />
          </ThemeProvider>
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
