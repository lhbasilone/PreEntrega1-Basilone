import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { PRODUCTS } from "../data/ebook"


const ItemDetailContainer = () => {

    const [item, setItem] = useState({})
    const { id } = useParams()


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
            }, 500);
        })
    }


    return (
        <div className="proof">
            <div  className="prueba">
                <img src={item.Image} className="bobo"></img>
                <div className="basics">{item.title}</div>
                <div>{item.description}</div>
                <div>{item.price}</div>
                <button className="botonDetalles">Agregar al carrito</button>
            </div>
        </div>
    )
}
export default ItemDetailContainer

