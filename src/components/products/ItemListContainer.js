import { useEffect, useState } from "react"
import { PRODUCTS } from "../data/ebook"
import { CardEbook } from "./CardEbook"


const ItemListContainer = () => {

    const [items, setItems] = useState([])

    useEffect(() => {
        getProducts()
            .then(res => {
                console.log(res);
                setItems(res)
            })
            .catch(err => { console.log(err) })
    }, [])

    const getProducts = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(PRODUCTS)
            }, 500);
        })
    }

    return (
        <div>
            {items.map(i => < CardEbook   key={i.id} {...i} />)}
        </div>
    )
}

export default ItemListContainer