import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home/Home";
import ServicesProvided from "./Pages/WebDevPage/WebDevPage";
import React from "react";
import "./App.css";
import ITStafingPage from "./Pages/ITstafingPage/ITStafingPage";
import ContactUs from "./Pages/ContactUs/ContactUs";
import WebDevPage from "./Pages/WebDevPage/WebDevPage";
import CloudConsultingPage from "./Pages/CloudConsultingPage/CloudConsultingPage";
import AIMLPage from "./Pages/AIMLPage/AIMLPage";
import HardwareResell from "./Pages/HardwareResell/HardwareResell";
import { AboutUs } from "./Pages/AboutUssPage/AboutUs";
import DigitalMarketing from "./Pages/DigitalMarketingPage/DigitalMarketing";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/Web-service-provider/",
      element: <WebDevPage />,
    },
    {
      path: "/contact-us/",
      element: <ContactUs />,
    },
    {
      path: "/it-staffing-services/",
      element: <ITStafingPage></ITStafingPage>,
    },
    {
      path: "/cloud-computing-services/",
      element: <CloudConsultingPage />,
    },
    {
      path: "/ai-ml-services/",
      element: <AIMLPage />,
    },
    {
      path: "/it-hardware-reselling/",
      element: <HardwareResell />,
    },
    {
      path: "/about-us/",
      element: <AboutUs />,
    },
    {
      path: "/digital-marketing-services/",
      element: <DigitalMarketing />,
    },
    {
      future: {
        v7_startTransition: true, // Enable the v7 startTransition future flag
      },
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
