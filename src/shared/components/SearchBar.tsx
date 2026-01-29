interface SearchBarProps {
  placeholder?: string;
  buttonText?: string;
}

export const SearchBar = ({ placeholder, buttonText }: SearchBarProps) => {
  return (
     <div className="search-container">
        <input type="text" placeholder={placeholder || "Buscar gifs"} />
        <button>{buttonText || "Buscar"}</button>
    </div>
  );
}
