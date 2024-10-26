import SearchIcon from "../../assets/common/search-gray.svg?react";
import DeleteIcon from "../../assets/common/delete.svg?react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchComponent = ({ text }) => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  const handleCancel = () => {
    navigate(-1);
  };
  const clearSearch = () => {
    setSearch("");
  };

  return (
    <div className="flex items-center w-[24.5625rem] px-[1rem] py-[0.25rem] gap-[0.75rem]">
      <div className="flex w-[19.5625rem] h-[2.5rem] bg-gray-50 items-center rounded-[0.5rem]">
        <SearchIcon className="w-[0.875rem] h-[0.875rem] m-[0.5rem] text-gray-50" />
        <input
          type="text"
          value={search}
          placeholder={text}
          onChange={handleChange}
          className="w-[24.6875rem] bg-transparent text-b1 text-black placeholder-gray-300 mr-[1.3125rem]"
        />
        {search.length > 0 && (
          <button onClick={clearSearch}>
            <DeleteIcon className="w-[1rem] h-[1rem]" />
          </button>
        )}
      </div>
      <button onClick={handleCancel}>취소</button>
    </div>
  );
};
export default SearchComponent;
