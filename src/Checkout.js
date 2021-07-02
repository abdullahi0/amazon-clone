import React from 'react'
import Subtotal from './Subtotal'
import "./Checkout.css"
import CheckoutProduct from './CheckoutProduct'
import {useStateValue} from './StateProvider'
function Checkout() {
    const [{user, basket},dispatch] = useStateValue();
    
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img className="checkout__ad" src="https://th.bing.com/th/id/R09c097211d4d5acc508a35756f5a12ec?rik=9jAzaQh8efgtjw&riu=http%3a%2f%2fwbbands.info%2fwp-content%2fuploads%2f2014%2f09%2famazon-smile-banner.jpg&ehk=vwHBwSdNayH9EAMAtn1o3XVcm8L%2fAK7nfq2jtKhrBV0%3d&risl=&pid=ImgRaw" />
                <div className="checkout__title">
                    <h3>Hello, {user?.email}</h3>
                    <h2>Your Shopping Basket</h2>
                    {basket.map(item =>(
                        <CheckoutProduct 
                            id={item.id}
                            title = {item.title}
                            image={item.image}
                            price = {item.price}
                            rating={item.rating}
                        />
                    ))
                    }
                </div>
            </div>
            <div className="checkout__right">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout
