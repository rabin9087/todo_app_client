import { useState } from "react";

const ButtonGroup = () => {
  const [type, setType] = useState("all");
  const buttonTypes = [
    { btn: "All", value: "all" },
    { btn: "Completed Tasks", value: "completed" },
    { btn: "Not Yet Completed Tasks", value: "nyc" },
  ];

  return (
    <div className="flex justify-center rounded-md shadow-sm mt-2" role="group">
      {buttonTypes.map(({ btn, value }, i) => (
        <button
          key={i}
          type="button"
          onClick={() => setType(value)}
          className=" flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
        >
          {btn}
        </button>
      ))}
    </div>
  );
};

export default ButtonGroup;
