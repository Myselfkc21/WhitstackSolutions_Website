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
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/service1",
      element: <WebDevPage />,
    },
    {
      path: "/contactus",
      element: <ContactUs />
    },
    {
      path: "/service4",
      element: <ITStafingPage></ITStafingPage>
    },
    {
      path: "/service2",
      element: <CloudConsultingPage />
    },
    {
      path: "/service3",
      element: <AIMLPage />
    }
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
