//rafce
/*
const Saludo = (props) => {
  return (
    <>
      <div>Saludos {props.name}</div>
      <div>Tienes {props.age} años</div>
    </>
  )
}
export default Saludo
*/


//Desestructuracion de los componentes del props para no usar el props.name (ejemplo)
const Saludo = ( {name,lastname, age, action } ) => {



const title = {

}


  return (
    <div style={title}>
      <h1 className="text-3xl font-bold underline">Saludos {name} {lastname} Tienes {age} años</h1>
      <button onClick={action}> Click </button>
    </div>
  )
}
export default Saludo
