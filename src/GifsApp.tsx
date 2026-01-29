import { SearchBar } from "./shared/components/SearchBar";
import { mockGifs } from "./mock-data/gifs.mock";
import { CustomHeader } from "./shared/components/CustomHeader";
import { PreviousSearches } from "./gifs/components/PreviousSearches";
import { GifsList } from "./gifs/components/GifsList";

export const GifsApp = () => {
  return (
    <>
    {/* Header */}
    <CustomHeader title="Buscador de Gifs" description="Descubre y comparte los mejores gifs" />
    {/* search */}
    <SearchBar placeholder="Busca tus gifs favoritos" buttonText="Buscar Gifs" />
    {/* Búsquedas previsas */}
    <PreviousSearches searches={['Gatos', 'Perros', 'Memes', 'Reacciones']} />
    {/* Show gifs */}
    <GifsList gifs={mockGifs} />
    </>
  );
}
