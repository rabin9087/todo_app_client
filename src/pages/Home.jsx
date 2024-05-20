import { useEffect, useState } from "react";
import Form, { localStoragEmail } from "../components/Form";
import Search from "../components/Search";
import Tasks from "../components/Tasks";
import { useDispatch, useSelector } from "react-redux";
import { getTasksAction } from "../store/task.action";

export const Home = ({ children }) => {
  const [type, setType] = useState();
  const dispatch = useDispatch();
  const { taskList } = useSelector((state) => state.taskInfo);
  const [temp, setTemp] = useState(taskList);

  const handelOnChange = (e) => {
    const { name, value } = e.target;
    setType({ ...type, [name]: value });
  };

  useState(() => {
    if (!taskList?.length && !temp.length) {
      dispatch(getTasksAction(localStoragEmail));
      setTemp(taskList);
    }
  }, []);

  useEffect(() => {
    setTemp(taskList);
  }, [taskList]);
  return (
    <div className="flex flex-col justify-center">
      <div className="block md:flex justify-around ">
        <div></div>
        <div></div>
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
      <div>{children}</div>
      {(children && <></>) || <Tasks temp={temp} />}
    </div>
  );
};

export default Home;
