import { useEffect, useState } from "react";
import Form from "../components/Form";
import Search from "../components/Search";
import Tasks from "../components/Tasks";
import { useDispatch, useSelector } from "react-redux";
import { getTasksAction } from "../store/task.action";
import { localStoragEmail } from "../util/exportFile";
import PropTypes from "prop-types";

export const Home = ({ children }) => {
  Home.propTypes = {
    children: PropTypes.element,
  };
  const dispatch = useDispatch();
  const { taskList } = useSelector((state) => state.taskInfo);
  const [temp, setTemp] = useState(taskList);

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
