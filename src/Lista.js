  
function Lista(props) {
    let respuesta = props.lista.map((compositor, index) => {
      return <li>{compositor.nombre}</li>;  //aqui en vez de enviarlo desde app.js lo hacemos desde aqui
    });
  
    return <ul>{respuesta}</ul>;
  }
  
  export default Lista;