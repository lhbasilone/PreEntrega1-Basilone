import { useEffect, useState } from "react"
import { collection, getDocs, getFirestore } from 'firebase/firestore'
import { CardEbook } from "../products/CardEbook"



const ItemsList = () => {

    const [items, setItems] = useState([])

    useEffect(() => {
        getItems()
    }, [])

    const getItems = async () => {

        const db = getFirestore()
        const collectionRef = collection(db, 'items')
        const snapshot = await getDocs(collectionRef)
        setItems(snapshot.docs.map(d => ({ id: d.id, ...d.data() })));
    }

    return (
        <div className="container--cards">
            {items.map(i => < CardEbook key={i.id} {...i} />)}
        </div>
    )
}

export default ItemsList