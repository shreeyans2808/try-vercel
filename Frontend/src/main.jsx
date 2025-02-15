import { createRoot } from "react-dom/client";
import "./index.css";
import "font-awesome/css/font-awesome.min.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store.js";
import routes from "./routes/Routes.jsx";
import ScrollToTop from "./pages/ScrollToTop.jsx";
import { ToastContainer } from 'react-toastify';
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <ScrollToTop />
        <App />
        <ToastContainer position="top-center"/>
      </>
    ),
    children: routes,
  },
]);

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router}></RouterProvider>
  </Provider>
);
