import React from 'react';
import {
    Link,
    withRouter
} from "react-router-dom";
import { AppContext } from '../../AppContext'
import { AppConsumer } from '../../AppContext'

class HeaderMiddle extends React.Component {
    static contextType = AppContext
    constructor(props) {
        super(props)
        
    }

    handlelogOut = () => {
       this.context.logoutContext()
    }

    renderLoginLogout () {
        if(localStorage["appState"] !== undefined){
            const isLoggedIn = JSON.parse(localStorage["appState"]).isLoggedIn
            if(isLoggedIn){
                return <li>
                    <a onClick={this.handlelogOut}><i className="fa fa-lock" /> Logout</a>
                    <Link to="/account"><i className="fa fa-lock" /> Account </Link>
                </li>
            }
        }else{
            return <li><Link to="/login"><i className="fa fa-lock" /> Login </Link></li>
        }
    }

    render() {
        // console.log("header middle")
        return (
            <div className="header-middle">
                <div className="container">
                    <div className="row">
                    <div className="col-md-4 clearfix">
                        <div className="logo pull-left">
                        <a href="index.html"><img src="images/home/logo.png" alt="" /></a>
                        </div>
                        <div className="btn-group pull-right clearfix">
                        <div className="btn-group">
                            <button type="button" className="btn btn-default dropdown-toggle usa" data-toggle="dropdown">
                            USA
                            <span className="caret" />
                            </button>
                            <ul className="dropdown-menu">
                            <li><a href="true">Canada</a></li>
                            <li><a href="true">UK</a></li>
                            </ul>
                        </div>
                        <div className="btn-group">
                            <button type="button" className="btn btn-default dropdown-toggle usa" data-toggle="dropdown">
                            DOLLAR
                            <span className="caret" />
                            </button>
                            <ul className="dropdown-menu">
                            <li><a href="true">Canadian Dollar</a></li>
                            <li><a href="true">Pound</a></li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-8 clearfix">
                        <div className="shop-menu clearfix pull-right">
                        <ul className="nav navbar-nav">
                            <li>
                                <Link to="/register"><i className="fa fa-lock"></i> Register </Link>
                            </li>
                            <li>
                                <a href="true"><i className="fa fa-star" /> Wishlist</a>
                            </li>
                            <li>
                                <Link to="/checkout"><i className="fa fa-lock" /> Checkout </Link>
                            </li>
                            
                            <li><Link to="/cart"><i className="fa fa-lock" /> Cart </Link></li>
                            
                            {this.renderLoginLogout()}
                            
                            {/* <AppConsumer>
                                {({numberCart}) => (
                                    <li>
                                        Cart item: {numberCart}
                                    </li>
                                )}
                            </AppConsumer> */}
                        </ul>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default withRouter(HeaderMiddle);