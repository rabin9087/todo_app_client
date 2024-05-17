import { useState } from "react";
import { addTask } from "../axios/taskAxios";
import { toast } from "react-toastify";

const initialFormState = {
  task: "",
  priority: "",
};

const Form = () => {
  const [form, setForm] = useState(initialFormState);

  const handelOnChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
    console.log(form);
  };

  const handelOnSubmit = async (e) => {
    e.preventDefault();

    const pending = addTask(form);
    toast.promise(pending, {
      pending: "Pleasw wait",
    });

    const { status, message } = await pending;
    if (status === "success") {
      setForm(initialFormState);
      return toast[status](message);
    }
    toast(message);
  };

  const priorityLevel = ["Low", "Medium", "High"];
  return (
    <form className="shadow-md rounded" onSubmit={handelOnSubmit}>
      <h3 className="text-2xl mb-2 mt-2 text-center">Todo App</h3>
      <hr />

      <div className="block  md:flex justify-center items-center gap-2 p-2">
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
        <button
          className="w-[120px] md:w-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          type="submit"
        >
          + Add
        </button>
      </div>
    </form>
  );
};

export default Form;
