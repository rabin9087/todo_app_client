import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { ToastContainer } from "react-toastify";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getTasksAction } from "./store/task.action";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTasksAction());
  }, [dispatch]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
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
