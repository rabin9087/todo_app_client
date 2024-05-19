import { FaSearch } from "react-icons/fa";

const Search = ({ temp, setTemp, placeholder, taskList }) => {
  const handelOnChange = (e) => {
    const { value } = e.target;
    console.log(value);
    const filter = taskList?.filter((item) =>
      item.task.toLowerCase().includes(value)
    );
    setTemp(filter);
  };
  return (
    <div className="flex items-center mx-2">
      <input
        className="shadow w-full md:w-auto border-gray-700 appearance-none border rounded-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline my-2"
        placeholder={placeholder}
        onChange={handelOnChange}
      />
      <FaSearch className="absolute right-4" />
    </div>
  );
};

export default Search;
