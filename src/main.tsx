import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { store, persistor } from "./redux/store.ts";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/routes.tsx";
import { Toaster } from "sonner";
import { PersistGate } from "redux-persist/integration/react";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />
        <Toaster
          position="top-center"
          toastOptions={{
            style: {
              backgroundColor: "#ffcf",
              color: "#faf",
              padding: "60px",
              borderRadius: "8px",
              fontSize: "40px",
            },
          }}
        />
      </PersistGate>
    </Provider>
  </StrictMode>
);
