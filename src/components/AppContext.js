import React from 'react'
import { withRouter} from 'react-router-dom';
export const AppContext = React.createContext()
export const AppConsumer = AppContext.Consumer

class AppProvider extends React.Component {
    constructor(props){
      super(props)
      let cart = null
      if(localStorage["appState"] !== undefined) {
        cart = JSON.parse(localStorage.getItem('appState')).cart
      }
      this.state = {
        cart: cart
      }
    }

    logoutContext = (value) => {
        localStorage.clear();
        this.props.history.push('/login')
    }

    handleAddCart = (product) => {
      let {cart} = this.state
      let index = -1;
      if (cart.length > 0) {
        for ( var i = 0; i < cart.length; i++) {
          if (product.id === cart[i].id) {
            index = product.id
          }
        }      
      }

      if (index === -1) {
        product.quantity = 1
        cart.push(product)
        this.setState({
          cart:cart
        })
      }else{
        let objIndex = cart.findIndex((obj => obj.id === index))
        cart[objIndex].quantity++
        this.setState({
          cart:cart
        })
      }
      
      var appState = JSON.parse(localStorage.getItem('appState'))
      if (appState !== null) {
        appState.cart = cart
        localStorage["appState"] = JSON.stringify(appState);
      }

    }

    render() {
      return (
        <AppContext.Provider value={{
            state: this.state,
            handleAddCart:this.handleAddCart,
            loginContext: this.loginContext,
            logoutContext: this.logoutContext,
          }}
        >
          {this.props.children}
        </AppContext.Provider>
      );
    }
  }
  export default withRouter(AppProvider);
