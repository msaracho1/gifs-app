import { SearchBar } from "./shared/components/SearchBar";
import { CustomHeader } from "./shared/components/CustomHeader";
import { PreviousSearches } from "./gifs/components/PreviousSearches";
import { GifsList } from "./gifs/components/GifsList";
import { useGifs } from "./gifs/hooks/useGifs";
export const GifsApp = () => {
  const {handleSearch, previousTerms, handleTermClicked, gifs}=useGifs();

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
