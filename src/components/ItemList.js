const ItemList = ({greeting}) => {

    const title = {
        padding: 50,
        margin: 100,
        backgroundColor:'yellow',
        color:'blue',

    }


  return (
    <>
        <div style={title}>
            <div className="text-3xl">{greeting}</div>
        </div>
    </>
  )
}
export default ItemList