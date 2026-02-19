import { SearchBar } from "./shared/components/SearchBar";
import { CustomHeader } from "./shared/components/CustomHeader";
import { PreviousSearches } from "./gifs/components/PreviousSearches";
import { GifsList } from "./gifs/components/GifsList";
import { useState } from "react";
import { getGifsByQuery } from "./gifs/actions/get-gifs-by-query.action";
import type { Gif } from "./gifs/interfaces/gif.interface";

export const GifsApp = () => {
    const [gifs, setGifs] = useState<Gif[]>([]); // arreglo de gifs para mostrar
    const [previousTerms, setPreviousTerms] = useState<string[]>([]);
    const handleTermClicked = (term: string) => {
        console.log({term} );
    }

    const handleSearch = async (query: string = '') => {
      query = query.trim().toLowerCase();
      if (query.length === 0) return;

      if (previousTerms.includes(query)) {
        return; // Si ya existe, no hace nada
      }

      setPreviousTerms([query, ...previousTerms].slice(0, 8)); // Agrega el nuevo término al inicio del array, máximo 8

     const gifs= await getGifsByQuery(query);

      setGifs(gifs);
    };


  return (
    <>
    {/* Header */}
    <CustomHeader title="Buscador de Gifs" description="Descubre y comparte los mejores gifs" />
    {/* search */}
    <SearchBar placeholder="Busca tus gifs favoritos"
      onQuery={handleSearch}
    />
    {/* Búsquedas previsas */}
    <PreviousSearches searches={previousTerms}  
    onLabelClicked={handleTermClicked} />
    {/* Show gifs */}
    <GifsList gifs={gifs} />
    </>
  );
}
