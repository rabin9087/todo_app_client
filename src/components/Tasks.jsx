// import { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { getTasksAction } from "../store/task.action";
import { FaRegEdit } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import {
  deleteATaskAction,
  getTasksAction,
  updateATaskAction,
} from "../store/task.action";
import { localStoragEmail } from "../util/exportFile";

const Tasks = ({ temp }) => {
  const [type, setType] = useState("all");
  const dispatch = useDispatch();
  const completedTask = temp?.filter((item) => item.status === "completed");
  const NYCTask = temp?.filter((item) => item.status === "not yet completed");

  const buttonTypes = [
    { btn: "All Tasks", value: "all" },
    { btn: "Completed Tasks", value: "completed" },
    { btn: "Not Yet Completed Tasks", value: "nyc" },
  ];

  const taskListType = () => {
    if (type === "all") {
      return temp;
    }
    if (type === "completed") {
      return completedTask;
    }
    if (type === "nyc") {
      return NYCTask;
    }
  };

  const handelOnDelete = (_id, task) => {
    if (window.confirm(`Are you sure want to delete ${task} task?`)) {
      return dispatch(deleteATaskAction(_id));
    }
  };

  const handelOnChecked = async (e) => {
    const { value, checked } = e.target;
    if (checked) {
      await dispatch(updateATaskAction(value, { status: "completed" }));
    } else {
      await dispatch(updateATaskAction(value, { status: "not yet completed" }));
    }
    return dispatch(getTasksAction(localStoragEmail));
  };
  console.log(localStoragEmail);

  useEffect(() => {
    dispatch(getTasksAction(localStoragEmail));
  }, [dispatch]);
  return (
    <div>
      <div
        className="flex w-full justify-center rounded-md shadow-sm mt-2"
        role="group"
      >
        {buttonTypes.map(({ btn, value }, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setType(value)}
            className={
              type === value
                ? "flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-blue-600 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
                : "flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
            }
          >
            {btn}
          </button>
        ))}
      </div>

      {taskListType().length === 0 && (
        <div className="flex justify-center mt-2 text-3xl text-red-400 font-bold">
          No task found!
        </div>
      )}
      <div className="relative overflow-x-auto mt-4">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                S.N.
              </th>
              <th scope="col" className="px-6 py-3">
                Tasks
              </th>
              <th scope="col" className="px-6 py-3">
                Priority Level
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3 ">
                Edit
              </th>
              <th scope="col" className="px-6 py-3">
                Delete
              </th>
            </tr>
          </thead>
          <tbody>
            {taskListType()?.map((item, i) => (
              <tr
                key={i}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:opacity-95"
              >
                <td className="px-6 py-4">{i + 1}. </td>
                <td className="px-6 py-4">{item.task}</td>
                <td
                  className={
                    (item.priority === "Low" && "text-yellow-400 px-6 py-4") ||
                    (item.priority === "Medium" &&
                      "text-green-400 px-6 py-4") ||
                    (item.priority === "High" && "text-red-400 px-6 py-4")
                  }
                >
                  {item.priority}
                </td>
                <td
                  className={
                    item.status === "completed"
                      ? "flex w-full text-green-400 px-6 py-4"
                      : "flex w-full text-red-400 px-6 py-4"
                  }
                >
                  <input
                    type="checkbox"
                    id={item._id}
                    onChange={handelOnChecked}
                    className="ms-1 me-2"
                    value={item._id}
                    checked={item.status === "completed"}
                  />
                  <label
                    className="hover:bg-gray-600/60 p-2 w-full"
                    htmlFor={item._id}
                  >
                    {item.status}{" "}
                  </label>
                </td>
                <td className="px-6 py-4">
                  <Link to={`/${item._id}`}>
                    <button className="flex justify-center items-center gap-2 focus:outline-none bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900 text-white">
                      <FaRegEdit /> Edit
                    </button>
                  </Link>
                </td>
                <td className="px-6 py-4">
                  <button
                    className="flex justify-center items-center gap-2 focus:outline-none bg-red-400 hover:bg-red-500 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900 text-white"
                    onClick={() => handelOnDelete(item._id, item.task)}
                  >
                    <MdDelete /> Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Tasks;
