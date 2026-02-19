import { useEffect, useState, type KeyboardEvent } from "react";

interface SearchBarProps {
  placeholder?: string;
  onQuery: (query: string) => void;
}

export const SearchBar = ({ placeholder, onQuery }: SearchBarProps) => {
  const [query, setQuery] = useState('');
// Efecto para llamar a onQuery cuando el user deje escribir
  useEffect (() => {
    const timeoutId = setTimeout(() => {
      onQuery(query);
    }, 700);
    return () => {
      clearTimeout(timeoutId);
    }

},[query, onQuery]);

  const handleSearch = () => {
    onQuery(query);
    // setQuery(''); // Limpiar el input después de realizar la búsqueda
  };

  const handleKeyDown = (event:KeyboardEvent<HTMLInputElement>) => {

    if (event.key === 'Enter') {
      handleSearch();
    }
  };
  return (
     <div className="search-container">
        <input type="text"
        placeholder={placeholder} 
        value = {query}
        onChange = {(event) => setQuery(event.target.value)}
        onKeyDown= {handleKeyDown}
        />
        <button onClick={handleSearch}>Buscar</button>
    </div>
  );
};

