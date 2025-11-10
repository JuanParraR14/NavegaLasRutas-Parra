import Logo from "../assets/ReshipiLogo.png";
import CartWidget from "./CartWidget";

function navBar() {
   return (
      <nav className="navbar navbar-expand-lg navbar-dark">
         <div className="container">
            <a className="navbar-brand d-flex align-items-center" href="#">
               <img src={Logo} alt="Logo de Reshipi" height={100} className="me-2" />
            </a>
            <CartWidget />
         </div>
      </nav>
   )
}

export default navBar;