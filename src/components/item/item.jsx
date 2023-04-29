import { useContext } from "react"
import { CartContext } from "../../context/cart-context"
import "./item.css"


const Item = ({item}) => {
    const{addCartData}=useContext(CartContext)
    // console.log(item)
  return (
    <div className="box">
      <div className="section">
      <section > 
      <img className="img" src={`http://localhost:1337${item?.image?.data?.attributes?.url}`} alt="game" />
        <article className="title">{item.title}</article>
        <article className="article" >{item.description}</article>
        <section>
            <article className="price">Price:{item.price}/-</article>
            <button onClick={()=>{addCartData(item)}} className="button"> Add Cart</button>
        </section>
      </section>
      </div>
    </div>
  )
}

export default Item
