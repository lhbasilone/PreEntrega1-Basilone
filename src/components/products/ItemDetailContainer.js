import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useCart } from "../context/cartContext"
import { PRODUCTS } from "../data/ebook"



const ItemDetailContainer = () => {

    const [item, setItem] = useState({})
    const { id } = useParams()

    const { addToCart } = useCart()


    useEffect(() => {
        getItemDetail().then(res => {
            setItem(res)

        })
    }, [id])

    const getItemDetail = () => {
        return new Promise((resolve, reject) => {
            const item = PRODUCTS.find(p => p.id == id)
            setTimeout(() => {
                resolve(item)
            },10 );
        })
    }





    const addHandler = () => {
        addToCart(id)
    }

    return (
        <div className="proof">
            <div className="prueba">
                <img src={item.img} className="bobo"></img>
                <div className="basics">{item.libro}</div>
                <div>{item.description}</div>
                <div>{item.price}</div>
                <button className=" btn" onClick={addHandler}>Agregar al carrito</button>
            </div>
        </div>
    )
}
export default ItemDetailContainer

