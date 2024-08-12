import lupa from "../assets/lupa.png";
export const BarraDeBusqueda = () => {
  return (
    <>
      <div className="barraDeBusqueda">
        <input type="text" placeholder="Buscar..." />
        <img src={lupa} alt="lupa" />
      </div>
    </>
  );
};
