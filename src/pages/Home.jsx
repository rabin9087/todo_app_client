import Form from "../components/Form";
import Tasks from "../components/Tasks";

const Home = () => {
  return (
    <div className="flex flex-col justify-center">
      <Form />
      <Tasks />
    </div>
  );
};

export default Home;
