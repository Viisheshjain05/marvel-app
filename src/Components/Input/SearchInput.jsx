import { AiOutlineSearch } from "react-icons/ai";
const SearchInput = ({ setText }) => {
  return (
    <div className="header_input">
      <AiOutlineSearch className="search" />
      <input
        type="search"
        name=""
        data-testid="input"
        id="searchBar"
        placeholder="Enter your favourite star"
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
};

export default SearchInput;
