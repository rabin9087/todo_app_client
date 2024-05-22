import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { ToastContainer } from "react-toastify";
import { useEffect } from "react";

import EditPage from "./pages/EditPage";
import { randomEmailAddress } from "./util/exportFile";
import { getTasksAction } from "./store/task.action";
import { useDispatch } from "react-redux";

function App() {
  const localStoragEmail = localStorage.getItem("randomEmail");
  const dispatch = useDispatch();
  useEffect(() => {
    if (localStoragEmail === "" || localStoragEmail === null) {
      return randomEmailAddress();
    }
  }, [localStoragEmail]);
  const handelOnClick = async () => {
    return await dispatch(getTasksAction(localStoragEmail));
  };

  return (
    <div className="bg-gray-400">
      <div className="flex justify-center">
        <h3
          className="font-medium text-2xl text-center mt-4 hover:bg-gray-300/60 p-2"
          onClick={handelOnClick}
        >
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
