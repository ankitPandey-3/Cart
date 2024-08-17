import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { store } from "./store/index.jsx";
import "./index.css";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <StrictMode>
      <App />
      <Toaster
        toastOptions={{
          success: {
            style: {
              background: "yellow",
              color: "black",
              width: "auto",
            },
            iconTheme: {
              primary: "blue",
              secondary: "white",
            },
          },
        }}
      />
    </StrictMode>
  </Provider>
);

