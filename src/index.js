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
import { ThemeProvider } from "./components/Theme/ThemeContext"; // Импортируйте ThemeProvider

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="/learnlingo">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ThemeProvider>
            {" "}
            {/* Оборачиваем приложение в ThemeProvider */}
            <GlobalStyles />
            <App />
          </ThemeProvider>
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
