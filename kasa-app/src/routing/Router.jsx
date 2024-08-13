import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Appartment from "../pages/Appartment";
import Error from "../components/NotFound";
import {
  URL_HOMEPAGE,
  URL_ABOUT,
  URL_APPARTMENT,
  URL_NOTFOUND,
} from "./constants";

const router = createBrowserRouter([
  {
    path: URL_HOMEPAGE,
    element: <Home />,
  },
  {
    path: URL_ABOUT,
    element: <About />,
  },
  {
    path: URL_APPARTMENT,
    element: <Appartment />,
  },
  {
    path: URL_NOTFOUND,
    element: <Error />,
  },
]);

export default router;
