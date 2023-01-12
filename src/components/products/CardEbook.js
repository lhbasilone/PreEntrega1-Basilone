import { Link } from "react-router-dom"





export const CardEbook = ({ ID, libro, description, price, stock, img }) => {
  return (
    <div className="bg">
      <div className="Container">
        <img src={img}></img>
        <div className="Card">
          <div>{libro}</div>
          <div>{description}</div>
          <div>{price}</div>
          <div>{stock}</div>
          <Link to={`/category/${ID}`} className="btn">Ver detalle</Link>
        </div>
      </div>
    </div>
  )
}


