import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ApplyNow from "./pages/ApplyNow.jsx";
import Contact from "./pages/Contact.jsx";
import Courses from "./pages/Courses.jsx";
import WhyUk from "./pages/WhyUk.jsx";
import WhyEurope from "./pages/WhyEurope.jsx";
import WhyCanada from "./pages/WhyCanada.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <AboutUs /> },
      { path: "applynow", element: <ApplyNow /> },
      { path: "contact", element: <Contact /> },
      { path: "courses", element: <Courses /> },

      // ✅ Match dropdown links
      { path: "students/why-uk", element: <WhyUk /> },
      { path: "students/europe", element: <WhyEurope /> },
      { path: "students/canada", element: <WhyCanada /> },
    ],
  },
  { path: "*", element: <h1 className="text-center mt-10">Page Not Found</h1> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
// import "./index.css";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
