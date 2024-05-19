import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTaskAction } from "../store/task.action";

export const localStoragEmail = localStorage.getItem("randomEmail");
const initialFormState = {
  task: "",
  priority: "",
  email: localStoragEmail,
};

const Form = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState(initialFormState);

  const handelOnChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handelOnSubmit = async (e) => {
    e.preventDefault();

    dispatch(addTaskAction(form));
  };

  const priorityLevel = ["Low", "Medium", "High"];
  return (
    <form className="shadow-md rounded" onSubmit={handelOnSubmit}>
      <h3 className="text-2xl mb-2 mt-2 text-center">Todo App</h3>
      <hr />

      <div className="block text-center md:flex md:justify-center items-center gap-2 p-2">
        <input
          className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline my-2"
          type="text"
          name="task"
          placeholder="Enter new todo item"
          required
          onChange={handelOnChange}
        />
        <select
          className="shadow border py-2 px-4 rounded me-2"
          name="priority"
          id=""
          onChange={handelOnChange}
          required
        >
          <option value={""}>Select a priority level</option>
          {priorityLevel.map((item, i) => (
            <option key={i} value={item}>
              {item}
            </option>
          ))}
        </select>
        <div className="flex justify-center">
          <button
            className="w-full text-center md:w-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded  mt-2 md:mt-0"
            type="submit"
          >
            + Add
          </button>
        </div>
      </div>
    </form>
  );
};

export default Form;
