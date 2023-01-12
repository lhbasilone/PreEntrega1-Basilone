
import { addDoc, collection, doc, getFirestore, updateDoc, writeBatch } from "firebase/firestore"
import { useCart } from "../context/cartContext"




const CardCart = () => {

  const { items, clearCart } = useCart()


  return (
    <div className="m-10 text-xl">
      <div>GlassCart</div>

      {items.length === 0 ?
        <h1 className="text-xl m-10"> Agrega items a tu Carrito</h1>
        :
        <h1>Estos son tus items! </h1>
      }

      <div>{items.map(i => <li key={i.id}>{i.title} - {i}</li>)}</div>
      <button className="btn neobrut" onClick={clearCart}> Vaciar Carrito </button>
    </div>
  )
}

export default CardCart