import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";

function app() {
   return (
      <>
         <NavBar />
         <ItemListContainer greeting="¡Bienvenido a Reshipi SuperMarket! 🐱" />
      </>
   );
}

export default app;