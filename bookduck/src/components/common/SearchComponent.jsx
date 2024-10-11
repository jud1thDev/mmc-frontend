import SearchIcon from "../../assets/common/search-gray.svg?react";
import DeleteIcon from "../../assets/common/delete.svg?react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchComponent = () => {
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
    <div className="flex items-center w-[393px] px-[16px] py-[4px] gap-[12px]">
      <div className="flex w-[313px] h-[40px] bg-gray-50 items-center rounded-[8px]">
        <SearchIcon className="w-[14px] h-[14px] m-[8px] text-gray-50" />
        <input
          type="text"
          value={search}
          placeholder="검색어를 입력하세요"
          onChange={handleChange}
          className="w-[235px] bg-transparent text-b1 text-black placeholder-gray-300 mr-[21px]"
        />
        {search.length > 0 && (
          <button onClick={clearSearch}>
            <DeleteIcon className="w[16px] h-[16px]" />
          </button>
        )}
      </div>
      <button onClick={handleCancel}>취소</button>
    </div>
  );
};
export default SearchComponent;
