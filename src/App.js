import { useState } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import "./App.css";

import Lista from "./Lista";
import Eliminar from "./Eliminar";

function App() {
  const [input, setInput] = useState("");
  const [feedback, setFeedback] = useState("");
  const [lista, setLista] = useState([
    {
      nombre: "Wolfgang Amadeus Mozart",
      fecha: 1756,
      canciones: ["Symphonie Nr 40", "Don Giovanni"],
    },
    {
      nombre: "Ludwig van Beethoven",
      fecha: 1770,
      canciones: ["Symphonie No.5", "Piano Sonata No.32"],
    },
    {
      nombre: "Johann Sebastian Bach",
      fecha: 1685,
      canciones: ["Vivace", "Largo ma non tanto"],
    },
  ]);

  function cambiaInput(e) {
    setInput(e.target.value);
  }

  function grabarParrafo() {
    let array = [...lista];
    array.push({ nombre: input });
    setLista(array);
    setInput("");
  }

  return (
    <BrowserRouter>
      <div>
        <Link to="/">Inicio</Link>
        <Link to="/eliminar">Eliminar</Link>
      </div>
      <Lista lista={lista} />
      <Route exact path="/">
        <input key="input1" type="text" onChange={cambiaInput} value={input} />
        <button onClick={grabarParrafo}>Grabar</button>
      </Route>
      <Route path="/eliminar">
        <Eliminar lista={lista} setLista={setLista} setFeedback={setFeedback} />
      </Route>
      <p>{feedback}</p>
    </BrowserRouter>
  );
}

export default App;



/* import { BrowserRouter, Route, Link } from 'react-router-dom';
import {useState} from "react"
import './App.css';
import Lista from './Lista';


function App() {
  const [input, setInput]= useState("") 
  const [lista, setLista]= useState([
    {
      nombre: 'Wolfgang Amadeus Mozart', 
      fecha: 1756, 
      canciones: ['Symphonie Nr 40', 'Don Giovanni']},
    {
      nombre: 'Ludwig van Beethoven', 
      fecha: 1770,
      canciones: ['Symphonie No.5', 'Piano Sonata No.32']
    },
    {
      nombre: 'Johann Sebastian Bach', 
      fecha: 1685,
      canciones: ['Vivace', 'Largo ma non tanto']
    }
])
  const [input2, setInput2]= useState("")
  const [feedback, setFeedback]= useState("")
  
  function cambiarInput(e){
    setInput(e.target.value) //esto muestra todo lo que escribe en el input mientras vas escribiendo
  }


  function grabarLista(){
    let array =[...lista]  //creas una copia del array y le añades lo que se ha introducido en input y seguido llamas a setParrafo para mostrar el array con lo que se añade
    array.push({nombre :input})
    setLista(array)
    setInput("")// asi estamos dejando el contenido del input en blanco cuando pulse el boton
  }

  function borrarParrafo(nombre){
    let array =lista.filter((compositor)=>compositor.nombre.toLowerCase() !== nombre.toLowerCase())
    array.length === lista.length ? setFeedback("no se ha borrado nada") : setFeedback(`borrado correctamente: ${nombre }`)
    setLista(array);
    setInput2("");
  }

  return (
    <BrowserRouter>
      <input key="input1" type="text" onChange={cambiarInput} value={input} placeholder="hola"/>
      <button onClick={grabarLista}>grabar</button>
      <input key="input2" type="text" onChange={ function cambiarInput2(e){
    setInput2(e.target.value) 
  }} value={input2}/>
      <button onClick={()=>borrarParrafo(input2)}>borrar</button>
      <ul><Lista/> {/* lista.map((compositor, index)=>{
    return (<li>{compositor}</li>)
  })  asi nos ahorramos llamar declarar lista*/
     


