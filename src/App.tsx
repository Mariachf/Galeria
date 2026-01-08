import Header from "./Components/Header/Header";
import Search from "./Components/SearchBar/SearchBar";
import Cards from "./Components/PhotoCard/Card";
import { useState } from 'react';
import { cidades, flores, pets } from "./assets/galeria";



function App() {
    const [searchTerm, setSearchTerm] = useState('');

    const allPhotos = [...flores, ...pets, ...cidades];

    const filteredPhotos = allPhotos.filter((photo) =>
  photo.title.toLowerCase().includes(searchTerm.toLowerCase())
);

  return (
    <>
    
      <Header />

      <Search onSearch={(value) => setSearchTerm(value)} />

      {filteredPhotos.length === 0 ? (
        <p>Nenhuma foto encontrada</p>
      ) : (
        <Cards ItemGaleria={filteredPhotos} />
      )}
    </>
  );
}

export default App;
