import React from 'react'
export const AppContext = React.createContext()
export const AppConsumer = AppContext.Consumer

export class AppProvider extends React.Component {
    constructor(props){
      super(props)
      this.state = {
        numberCart: 0
      }
    }

    logoutContext = (value) => {
        localStorage.clear();
    }
    loginContext = (value) => {
        localStorage['isLoggedIn'] = JSON.stringify(value)
    }
    addCart = (value) => {
      this.setState({
        numberCart: value
      })
      // console.log(value)
    }
    render() {
      return (
        <AppContext.Provider value={{
              numberCart: this.state.numberCart,
              addCart:this.addCart,
              loginContext: this.loginContext,
              logoutContext: this.logoutContext,
          }}
        >
          {this.props.children}
        </AppContext.Provider>
      );
    }
  }
