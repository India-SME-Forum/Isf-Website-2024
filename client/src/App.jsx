import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MemeberDirectory from "./pages/MemeberDirectory";
import Navbar from "./components/navbar";
import IntroVideo from "./components/IntroVideo";

const ErrorPage = React.lazy(() => import("./components/ErrorPage"));
const Homepage = React.lazy(() => import("./pages/Homepage"));

function App() {
  return (
    <BrowserRouter>
      <Suspense
        fallback={
          <div className="flex flex-col h-[100vh]  items-center justify-center ">
            <span className="loading  loading-infinity loading-lg"></span>
          </div>
        }
      >
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              // <IntroVideo>
                <Homepage />
              // </IntroVideo>
            }
          />
          <Route path="/member-directory" element={<MemeberDirectory />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
