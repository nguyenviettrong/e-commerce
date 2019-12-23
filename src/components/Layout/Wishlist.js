import React from 'react';
import {AppContext} from '../AppContext'
class Wishlist extends React.Component {
    static contextType = AppContext

    render() {
        let itemWishlist = null
        // let wishlistElement = null
        if(localStorage["appState"] !== undefined){
            let wishlist = JSON.parse(localStorage["appState"]).wishlist
            if(wishlist.length > 0){
                itemWishlist = wishlist.map((item,index) =>
                    <div className="col-sm-4" key={index}>
                        <div className="product-image-wrapper">
                            <div className="single-products">
                                <div className="productinfo text-center">
                                    <img src="images/home/recommend1.jpg" alt="" />
                                    <h2>${item.price}</h2>
                                    <p>{item.name}</p>
                                    <button type="button" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart" onClick={ () => this.context.handleAddCart(item)}></i>Add to cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }else{
                itemWishlist = <p>Wishlist is empty!</p>
            }
        }
        return (
            <div className="container recommended_items">
                <div className="row">
                    {itemWishlist}
                </div>
            </div>
        );
    }
}
export default Wishlist;