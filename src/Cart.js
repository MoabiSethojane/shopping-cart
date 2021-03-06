import React from 'react'
import { useCart } from 'react-use-cart';
const Cart = () => {
    const{ isEmpty,totalUniqueItems ,items,totalItems ,cartTotal, updateItemQuantity,removeItem,emptyCart } = useCart();
    if(isEmpty) return <h5 className ="text-center "><h6 className="carticon">Cart()</h6></h5>
  return (
    <section className="py-4 container">
        <div className="row justify-content-center">
            <div className = "col-12">
                <h5>Cart ({totalUniqueItems }) total Items:({totalItems})</h5>
                <table className="table table-light table-hover m-0">
                    <tbody>
                    {items.map((item, index)=>{
                        return(
                            <tr key={index}>
                            <td>
                                <img src ={item.img} style={{height:'6rem'}} />
                            </td>
                            <td>
                                {item.title}
                            </td>
                            <td>
                                R{item.price }
                            </td>
                            <td>
                                Quatity{item.quantity}
                            </td>
                            <td>
                                <button className="btn btn-info ms-2"
                                onClick={()=>updateItemQuantity(item.id, item.quantity -1)}>-</button>
                                <button className="btn btn-info ms-2"  onClick={()=>updateItemQuantity(item.id, item.quantity +1)}>+</button>
                                <button className="btn btn-danger ms-2" onClick={( )=> removeItem(item.id)}>Remove Item</button>
                            </td>
                        </tr>   
                        )
                       
                    })}
                    </tbody>
                </table>
            </div>
            <div className ="col-auto mms-auto">
                <h2>Total Price:R{cartTotal}</h2>
            </div>
        </div>
    </section>
  )
}

export default Cart;