import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { ToastContainer } from "react-toastify";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getTasksAction } from "./store/task.action";
import randomEmail from "random-email";
import EditTask from "./components/EditTask";

function App() {
  const localStoragEmail = localStorage.getItem("randomEmail");

  const randomEmailAddress = () => {
    return localStorage.setItem(
      "randomEmail",
      randomEmail({ domain: "shahkiranaPasal.com" })
    );
  };

  const dispatch = useDispatch();
  useEffect(() => {
    if (localStoragEmail === "" || localStoragEmail === null) {
      randomEmailAddress();
    }

    dispatch(getTasksAction(localStoragEmail));
  }, [dispatch, localStoragEmail]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/:_id" element={<EditTask />}></Route>
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
