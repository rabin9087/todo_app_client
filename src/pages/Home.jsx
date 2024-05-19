import { useState } from "react";
import Form from "../components/Form";
import Search from "../components/Search";
import Tasks from "../components/Tasks";
import { useSelector } from "react-redux";
import { FaSearch } from "react-icons/fa";

const Home = () => {
  const priorityLevel = ["Low", "Medium", "High"];
  const [type, setType] = useState();

  const { taskList } = useSelector((state) => state.taskInfo);
  const [temp, setTemp] = useState(taskList);

  const handelOnChange = (e) => {
    const { name, value } = e.target;

    setType({ ...type, [name]: value });
  };

  return (
    <div className="flex flex-col justify-center">
      <div className="block md:flex justify-around">
        <Form />
        <div className="md:flex relative items-center ">
          <Search
            placeholder={"Search task"}
            type={type}
            taskList={taskList}
            temp={temp}
            setTemp={setTemp}
          />
        </div>
      </div>

      <Tasks temp={temp} />
    </div>
  );
};

export default Home;
