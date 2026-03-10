import { useRef, useState } from "react";
import { getGifsByQuery } from "../actions/get-gifs-by-query.action";
import type { Gif } from "../interfaces/gif.interface";


// const gifsCache: Record<string, Gif[]> = { }; // Cache para almacenar resultados de búsquedas anteriores

export const useGifs = () => {
    const [gifs, setGifs] = useState<Gif[]>([]); // arreglo de gifs para mostrar

    const [previousTerms, setPreviousTerms] = useState<string[]>([]);

    const gifsCache = useRef<Record<string, Gif[]>>({});
        
        // Search Previous Terms
        const handleTermClicked = async (term: string) => {
            const gifs= await getGifsByQuery(term);
            if (gifsCache.current[term]) {
                setGifs(gifsCache.current[term]);
                return;
            }
            setGifs(gifs);
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

        gifsCache.current[query] = gifs; // Guarda los resultados en la cache
        };
 return {
  //Propertys or Values
  gifs,
  
  //Methods / Actions
  previousTerms,
  handleSearch,
  handleTermClicked,
}

}
