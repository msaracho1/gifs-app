import { SearchBar } from "./shared/components/SearchBar";
import { mockGifs } from "./mock-data/gifs.mock";
import { CustomHeader } from "./shared/components/CustomHeader";

export const GifsApp = () => {
  return (
    <>
    {/* Header */}
    <CustomHeader title="Buscador de Gifs" description="Descubre y comparte los mejores gifs" />
    {/* search */}
       <SearchBar placeholder="Busca tus gifs favoritos" buttonText="Buscar Gifs" />
    {/* Búsquedas previsas */}
    <div className="previous-searches">
        <h2>Búsquedas Previas</h2>
        <ul className="previous-searches-list">
            <li>Gatos</li>
            <li>Perros</li>
            <li>Memes</li>
            <li>Reacciones</li>
        </ul>
    </div>
    {/* Show gifs */}
    <div className="gifs-container">
        {
           mockGifs.map((gif)=>(
            <div key={gif.id} className="gif-card">
                <img src={gif.url} alt={gif.title} />
                <h3>{gif.title}</h3>
                <p>
                    {gif.width} x {gif.height} (1.5mb)
                </p>
            </div>
           ))
        }
    </div>
    </>
  );
}
