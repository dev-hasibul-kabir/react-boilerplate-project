import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./components/RootLayout";
import HomePage from "./pages/home";
import AboutPage from "./pages/about";
import ServicesPage from "./pages/services";
import ContactPage from "./pages/contact";

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "services",
        element: <ServicesPage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
    ],
  },
  // {
  //   element: AuthLayout,
  //   children: [],
  // },
]);
