import "./SearchBar.module.css";
import "../../Styles/global.css";
import style from "./SearchBar.module.css";
import { CiSearch } from "react-icons/ci";

type SearchBarProps = {
  onSearch: (value: string) => void; 
};

export default function SearchBar({ onSearch }: SearchBarProps) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    onSearch(value); 
  };

  return (
    <div className={style.searchBar}>
      <input
        type="text"
        className={style.searchInput}
        placeholder="Buscar por título..."
        onChange={handleChange}
      />
      <button className={style.searchButton}><CiSearch fontSize={22}/></button>
    </div>
  );
}