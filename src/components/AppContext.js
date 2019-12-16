import React from 'react'
export const AppContext = React.createContext()
export const AppConsumer = AppContext.Consumer

export class AppProvider extends React.Component {
    constructor(props){
      super(props)
      this.state = {
        numberCart: []
      }
    }

    logoutContext = (value) => {
        // localStorage['isLoggedIn'] = '';
        localStorage.clear();
        console.log("logout:" + value)
    }
    loginContext = (value) => {
        console.log("login:" + value) 
        localStorage['isLoggedIn'] = JSON.stringify(value)
    }

    render() {
      return (
        <AppContext.Provider value={{
              loginContext: this.loginContext,
              logoutContext: this.logoutContext
          }}
        >
          {this.props.children}
        </AppContext.Provider>
      );
    }
  }
