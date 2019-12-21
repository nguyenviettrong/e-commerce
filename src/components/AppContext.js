import React from 'react'
import { withRouter} from 'react-router-dom';
export const AppContext = React.createContext()
export const AppConsumer = AppContext.Consumer

class AppProvider extends React.Component {
    constructor(props){
      super(props)
      this.state = {
        numberCart: 0
      }
    }

    logoutContext = (value) => {
        localStorage.clear();
        this.props.history.push('/')
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
  export default withRouter(AppProvider);
