import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import MyCard from "./components/MyCard";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header titulo="Adopta un perrito" />
      <div className="card__container">
        <MyCard
          url="./src/assets/beto.jpg"
          name="Beto"
          description="Este perrito siempre está lleno de energía y es muy cariñoso, dale el hogar que se merece!"
          color="success"
          text="Huski"
        />
        <MyCard
          url="./src/assets/poodle.webp"
          name="Luli"
          description="Hermoso poodle muy inquieto pero también muy regalón"
          color="primary"
          text="Poodle Toy"
        />
        <MyCard
          url="./src/assets/chiguagua.webp"
          name="Leon"
          description="Un perrito tierno y adorable con mucho amor para una familia que sepa quererlo"
          color="warning"
          text="Chihuahua"
        />
        <MyCard
          url="./src/assets/galgo.jpg"
          name="Ayudante de Santa"
          description="Un hermoso Galgo corredor lleno de enegía que busca un hogar grande donde pueda correr sin parar"
          color="info"
          text="Galgo italiano"
        />
        <MyCard
          url="./src/assets/dalmata.webp"
          name="Bob"
          description="Tierno dalmata que busca hogar acogedor, ama a los niños y le encanta salir a pasear  "
          color="dark"
          text="Dalmata"
        />
        <MyCard
          url="./src/assets/san_bernardo.jpg"
          name="Toto"
          description="Un perro grande y hermoso como su corazón, no te aburrirás con él ya que siempre está jugando y saltando!"
          color="secondary"
          text="San Bernardo"
        />
      </div>
      <Footer
        pieDePagina="Explora nuestra galería en adopción de perros para encontrar a tu compañero perfecto. tenemos una variedad de
      perros con diferentes personalidades y tamaños, todos en busca de un hogar amoroso. Cada imagen captura su escencia única.Adopta un perro y dale una segunda oportunidad, 
      ¡Encuentra a tu compañero peludo!"
      />
    </div>
  );
}

export default App;
