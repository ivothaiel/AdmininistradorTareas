
function Boton({ texto, onClick }) {
    return (
      <button onClick={onClick} className="boton">
        {texto}
      </button>
    );
  }
  
  export default Boton;
  