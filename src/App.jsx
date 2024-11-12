import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyCard from './components/Mycard';
import { Header, Footer , Tags} from './components/Appcomponentes';  // Importamos los tres componente

function App() {
  return (
    <>
      <Header titulo="Adopta un gatito" />
      <section className="galeria">
        <MyCard
          imagen="https://i.pinimg.com/736x/08/c0/08/08c0081a4b46c105dcec4eb261f3b51a--image.jpg"
          nombre="Nacho"
          descripcion="Nacho es un gato de pelaje anaranjado brillante. Su personalidad es juguetona y curiosa; siempre está explorando cada rincón de la casa. A Nacho le encanta perseguir juguetes y disfrutar de largas siestas en los rayos cálidos del sol que entran por la ventana."
          color="success"
          texto="Somalí"
        />
        <MyCard
          imagen="https://th.bing.com/th/id/OIP.E48-kfJKy4AfEo28E_6KmQHaFj?rs=1&pid=ImgDetMain"
          nombre="Luna"
          descripcion="Luna es una gata elegante de pelaje negro como la noche y ojos brillantes amarillos. Es reservada pero cariñosa, y suele acurrucarse en regazos durante las noches. Le gusta observar el mundo desde las alturas, y a menudo la encontrarás descansando en el respaldo de una silla o en lo alto de algún mueble."
          color="dark"
          texto="Bombay"
        />
        <MyCard
          imagen="https://www.mundogatos.com/Uploads/mundogatos.com/ImagenesGrandes/fotos-de-gatitos-8-5.jpg"
          nombre="Oliver"
          descripcion="Oliver es un gato atigrado de pelaje suave y esponjoso con grandes ojos. Es un verdadero aventurero y le encanta explorar el jardín y trepar a los árboles. Oliver es muy sociable y siempre está buscando la atención de su familia humana. Tiene una debilidad por los juguetes con plumas."
          color="secondary"
          texto="Maine Coon"
        />
      </section>
      <Footer />
    </>
  );
}

export default App;
