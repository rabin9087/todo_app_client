import { useState } from "react";
import Form from "../components/Form";
import Search from "../components/Search";
import Tasks from "../components/Tasks";
import { useSelector } from "react-redux";

const Home = () => {
  const priorityLevel = ["Low", "Medium", "High"];
  const [type, setType] = useState();

  const { taskList } = useSelector((state) => state.taskInfo);

  const handelOnChange = (e) => {
    const { name, value } = e.target;

    setType({ ...type, [name]: value });
  };

  return (
    <div className="flex flex-col justify-center">
      <div className="md:flex justify-around">
        <Form />
        <div>
          <Search placeholder={"Search task"} type={type} />
          <div className="">
            <h3 className="mb-2 text-lg">Task by Priority Level</h3>
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
          </div>
        </div>
      </div>

      <Tasks />
    </div>
  );
};

export default Home;
