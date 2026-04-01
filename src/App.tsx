import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from "./pages/Home";
import OfficesByRegion from "./pages/OfficesByRegion";
import OfficesByCities from "./pages/OfficesByCities";
import Contact from "./pages/Contact";
import Group from "./pages/Group";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/our-group",
    element: <Group />,
  },
  {
    path: "/offices-by-region",
    element: <OfficesByRegion />,
  },
  {
    path: "/offices-by-cities",
    element: <OfficesByCities />,
    children: [
      {
        path: "/offices-by-cities/:region",
        element: <OfficesByCities />,
      },
    ],
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
