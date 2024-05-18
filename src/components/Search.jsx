const Search = ({ onChange, placeholder }) => {
  return (
    <div>
      <input
        className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline my-2"
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export default Search;
