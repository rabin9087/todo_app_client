import { useState } from "react";
import { addTask } from "../axios/taskAxios";
import { toast } from "react-toastify";

const Form = () => {
  const [form, setForm] = useState();

  const handelOnChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handelOnSubmit = async (e) => {
    e.preventDefault();

    const pending = addTask(form);
    toast.promise(pending, {
      pending: "Pleasw wait",
    });

    const { status, message } = await pending;
    if (status === "success") {
      return toast[status](message);
    }
    toast(message);
  };

  const priorityLevel = ["Low", "Medium", "High"];

  return (
    <form className="shadow-md rounded" onSubmit={handelOnSubmit}>
      <h3 className="text-3xl mb-2 text-center">Add Todo Item</h3>
      <hr />

      <div className="flex items-center gap-2 m-2">
        <input
          className="m-2 p-1 ps-3 border rounded-lg"
          type="text"
          name="task"
          placeholder="Enter new todo item"
          required
          onChange={handelOnChange}
        />
        <select
          className="m-2 p-1 border rounded-lg"
          name="priority"
          id=""
          onChange={handelOnChange}
          required
        >
          <option value={""}>Select priority level</option>
          {priorityLevel.map((item, i) => (
            <option key={i} value={item}>
              {item}
            </option>
          ))}
        </select>
        <button
          className="p-1 bg-blue-600 rounded-md w-[70px] h-10"
          type="submit"
        >
          + Add
        </button>
      </div>
    </form>
  );
};

export default Form;
