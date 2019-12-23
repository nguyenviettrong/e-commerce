import React from 'react';
import ImageDirectory from '../Config/ImageDirectory'
import { AppContext } from '../AppContext'

class CartList extends React.Component {
    static contextType = AppContext

    render() {
        let itemCart = null
        let totalCart = null
        let totalCartElement = null
        if(localStorage["appState"] !== undefined){
            let cart = JSON.parse(localStorage["appState"]).cart
            if(cart.length > 0){
                itemCart = cart.map((item,index) => 
                    {totalCart = totalCart + (item.quantity * item.price)
                        return (           
                            <tr key={index}>
                                <td className="cart_product">
                                    <a href="true"><img src={ImageDirectory("user/product/2/" + JSON.parse(item.image) )} alt="" /></a>
                                </td>
                                <td className="cart_description">
                                    <h4><a href="true">{item.name}</a></h4>
                                </td>
                                <td className="cart_price">
                                <p>${item.price}</p>
                                </td>
                                <td className="cart_quantity">
                                <div className="cart_quantity_button">
                                    <a className="cart_quantity_up" onClick={ () => this.context.handleIncreaseItemCart(item.id) }> + </a>
                                        <input className="cart_quantity_input" type="text" name="quantity" defaultValue={item.quantity} value={item.quantity}/>
                                    <a className="cart_quantity_down" onClick={ () => this.context.handleDecreaseItemCart(item.id) }> - </a>
                                </div>
                                </td>
                                <td className="cart_total">
                                    <p className="cart_total_price">${item.quantity * item.price}</p>
                                </td>
                                <td className="cart_delete">
                                    <a className="cart_quantity_delete" onClick={ () => this.context.handleRemoveItemCart(item.id) }><i className="fa fa-times" /></a>
                                </td>
                            </tr>
                        )
                    }
                );

                totalCartElement = <tr>
                    <td colspan="4">&nbsp;</td>
                    <td colspan="2">
                        <table class="table table-condensed total-result">
                            <tr>
                                <td>Cart Sub Total</td>
                                <td>${totalCart}</td>
                            </tr>
                            <tr>
                                <td>Exo Tax</td>
                                <td>$2</td>
                            </tr>
                            <tr class="shipping-cost">
                                <td>Shipping Cost</td>
                                <td>Free</td>										
                            </tr>
                            <tr>
                                <td>Total</td>
                                <td><span>$61</span></td>
                            </tr>
                        </table>
                    </td>
                </tr>

            }else{
                itemCart = <tr><p>Cart is empty!</p></tr>
            }
        }

        return (
            <div id="cart_items" className="container">
                <div className="table-responsive cart_info">
                    <table className="table table-condensed">
                        <thead>
                        <tr className="cart_menu">
                            <td className="image">Item</td>
                            <td className="description" />
                            <td className="price">Price</td>
                            <td className="quantity">Quantity</td>
                            <td className="total">Total</td>
                            <td />
                        </tr>
                        </thead>
                        <tbody>
                            {itemCart}
                            {totalCartElement}
                        </tbody>
                    </table>
                </div>
                
            </div>
        );
    }
}
export default CartList;