import { useState } from "react";

function Eliminar(props) {
  const [input2, setInput2] = useState("");

  function borrarParrafo(nombre) { //le hemos pasado la funcion borrar en un componente a parte
    let array = props.lista.filter(
      (compositor) => compositor.nombre.toLowerCase() !== nombre.toLowerCase()
    );
    array.length === props.lista.length
      ? props.setFeedback("No se ha borrado nada") 
      : props.setFeedback(`Se ha borrado ${nombre}`);
    props.setLista(array);
    setInput2("");
  }
// solo hemos separado las cosas en vez de tener todo en el app.js
  return (
    <>
      <input
        key="input2"
        type="text"
        onChange={(e) => setInput2(e.target.value)}
        value={input2}
      />
      <button onClick={() => borrarParrafo(input2)}>Borrar</button>
    </>
  );
}

export default Eliminar;