import { Link } from "react-router-dom"





export const CardEbook = ({ id, title, description, price, stock, Image }) => {
  return (
    <div className="bg">
      <div className="Container">
        <img src={Image}></img>
        <div className="Card">
          <div>{title}</div>
          <div>{description}</div>
          <div>{price}</div>
          <div>{stock}</div>
          <Link to={`/category/${id}`} className="btn">Ver detalle</Link>
        </div>
      </div>
    </div>
  )
}


