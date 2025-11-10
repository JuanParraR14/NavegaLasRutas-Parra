import { BsCart3 } from "react-icons/bs";

function cartWidget() {
   return (
      <button className="btn btn-custom position-relative">
         <BsCart3 size={20} />
         <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{ fontSize: "0.7rem" }}>
            2
         </span>
      </button>
   );
}

export default cartWidget;