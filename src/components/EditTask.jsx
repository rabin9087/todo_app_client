import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getATaskAction, updateATaskAction } from "../store/task.action";

const initailState = {
  task: "",
  status: "",
  priority: "",
};
const EditTask = () => {
  const [form, setForm] = useState(initailState);

  const { _id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { task } = useSelector((state) => state.taskInfo);

  const handelOnChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handelOnSubmit = () => {
    return dispatch(updateATaskAction(_id, form)) && navigate("/");
  };

  useEffect(() => {
    if (_id !== "") {
      dispatch(getATaskAction(_id));
    }
  }, [_id, dispatch]);

  useEffect(() => {
    setForm(task);
  }, [task]);
  return (
    <div className="flex flex-col gap-2 justify-centerm-2 p-2">
      <Link to="/" className=" ms-3">
        <button className="bg-gray-600/80 rounded-md px-4 py-2">
          &lt; Back
        </button>
      </Link>
      <div className="flex justify-center m-2">
        <span className="text-2xl font-bold underline">Update Task</span>
        <hr />
      </div>

      <input
        className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline my-2"
        type="text"
        name={"task"}
        onChange={handelOnChange}
        value={form.task}
      />
      <select
        className="shadow border py-2 px-4 rounded me-2"
        name="status"
        onChange={handelOnChange}
        value={form.status}
      >
        <option value={"completed"}>--Completed--</option>
        <option value={"not yet completed"}>--Not Yet Completed--</option>
      </select>
      <select
        className="shadow border py-2 px-4 rounded me-2"
        name="priority"
        onChange={handelOnChange}
        value={form.priority}
      >
        <option value={"Low"}>--Low--</option>
        <option value={"Medium"}>--Medium--</option>
        <option value={"High"}>--High--</option>
      </select>
      <div className="flex justify-center">
        <button
          type="submit"
          className="w-[120px] md:w-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handelOnSubmit}
        >
          Update
        </button>
      </div>
    </div>
  );
};

export default EditTask;
