import React from 'react';
import CallApi from '././../Config/API';
import ImageDirectory from '././../Config/ImageDirectory';

import { AppConsumer } from '../AppContext'
class FeaturedItems extends React.Component {

    constructor(props){
      super(props);
      this.state = {
          dataProducts: [],
      }
    }
    componentDidMount(){
        CallApi('GET','product', '')
        .then(response => {
          // console.log(response)
            this.setState({
                dataProducts: response.data.data,
            })
        })
        .catch(error => {
            console.log(error)
        })
    }

    render() {        
        let itemProduct = null
        if(this.state.dataProducts && Array.isArray(this.state.dataProducts)) {
            itemProduct = this.state.dataProducts.map((item,index) =>           
                // let image = JSON.parse(item.image)
                <div className="col-sm-4" key={index}>
                  <div className="product-image-wrapper">
                    <div className="single-products">
                      <div className="productinfo text-center">
                        <img src={ImageDirectory("user/product/2/" + JSON.parse(item.image) )} alt="" />
                        <h2>${item.price}</h2>
                        <p>{item.name}</p>
                        {/* <a className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart" />Add to cart</a> */}
                      </div>
                      <div className="product-overlay">
                        <div className="overlay-content">
                          <h2>${item.price}</h2>
                          <p>{item.name}</p>
                          <AppConsumer>
                          {({handleAddCart}) => (
                            <a className="btn btn-default add-to-cart" onClick={ () => handleAddCart(item)}><i className="fa fa-shopping-cart" />Add to cart</a>
                          )}
                          </AppConsumer>
                        </div>
                      </div>
                    </div>
                    <div className="choose">
                      <ul className="nav nav-pills nav-justified">
                        <li><a><i className="fa fa-plus-square" />Add to wishlist</a></li>
                        <li><a><i className="fa fa-plus-square" />Add to compare</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
            )
        }
        return (
            <div className="features_items">
                <h2 className="title text-center">Features Items</h2>
                {itemProduct}
            </div>
        );
    }
}
export default FeaturedItems;