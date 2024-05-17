// import { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { getTasksAction } from "../store/task.action";
import { FaRegEdit } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useState } from "react";

const Tasks = () => {
  const [type, setType] = useState("all");
  const { taskList } = useSelector((state) => state.taskInfo);
  const completedTask = taskList?.filter((item) => item.status === "completed");
  const NYCTask = taskList?.filter(
    (item) => item.status === "not yet completed"
  );

  const buttonTypes = [
    { btn: "All Tasks", value: "all" },
    { btn: "Completed Tasks", value: "completed" },
    { btn: "Not Yet Completed Tasks", value: "nyc" },
  ];

  const taskListType = () => {
    if (type === "all") {
      return taskList;
    }
    if (type === "completed") {
      return completedTask;
    }
    if (type === "nyc") {
      return NYCTask;
    }
  };
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
              <th scope="col" className="px-6 py-3 flex justify-center me-2">
                Edit
              </th>
            </tr>
          </thead>
          <tbody>
            {taskListType()?.map((item, i) => (
              <tr
                key={i}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:opacity-95"
              >
                <td className="px-6 py-4">
                  <input type="checkbox" className="me-2" />
                  {i + 1}.{" "}
                </td>
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
                      ? "text-green-400 px-6 py-4"
                      : "text-red-400 px-6 py-4"
                  }
                >
                  {item.status}
                </td>
                <td className="px-6 py-4 flex justify-center me-2">
                  <button className="flex justify-center items-center gap-2 focus:outline-none bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900 text-white">
                    <FaRegEdit /> Edit
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
