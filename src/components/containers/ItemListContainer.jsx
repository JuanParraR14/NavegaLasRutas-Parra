function itemListContainer({ greeting }) {
   return (
      <section className="container text-center mt-5">
         <div className="p-5 bg-light rounded-3 shadow-sm">
            <h2 className="fw-bold mb-3">{greeting}</h2>
            <p className="text-muted">¡Explora nuestras categorías y encuentra productos increíbles!</p>
            <button className="btn btn-custom">Ver productos</button>
         </div>
      </section>
   );
}

export default itemListContainer