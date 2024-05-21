import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { ToastContainer } from "react-toastify";
import { useEffect } from "react";

import EditPage from "./pages/EditPage";
import { randomEmailAddress } from "./util/exportFile";

function App() {
  const localStoragEmail = localStorage.getItem("randomEmail");

  useEffect(() => {
    if (localStoragEmail === "" || localStoragEmail === null) {
      return randomEmailAddress();
    }
  }, [localStoragEmail]);

  return (
    <div className="bg-gray-400">
      <div className="block md:flex">
        <h3 className="bg-gray-400 font-medium text-2xl text-center pt-4">
          Todo App
        </h3>
      </div>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/:_id" element={<EditPage />}></Route>
      </Routes>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
}

export default App;
