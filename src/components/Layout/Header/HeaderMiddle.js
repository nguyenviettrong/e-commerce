import React from 'react';
import {
    Link,
    withRouter
} from "react-router-dom";
import { AppContext } from '../../AppContext'
// import { AppConsumer } from '../../AppContext'

class HeaderMiddle extends React.Component {
    static contextType = AppContext

    handlelogOut = () => {
       this.context.logoutContext()
    }

    renderLoginLogout () {
        if(localStorage["appState"] !== undefined){
            const isLoggedIn = JSON.parse(localStorage["appState"]).isLoggedIn
            const cartNumber = JSON.parse(localStorage["appState"]).cart.length
            if(isLoggedIn){
                return (
                <React.Fragment>
                    <li><a href="/wishlist"><i className="fa fa-star" /> Wishlist</a></li>
                    <li><Link to="/checkout"><i className="fa fa-lock" /> Checkout </Link></li>                
                    <li><Link to="/account"><i className="fa fa-lock" /> Account </Link></li> 
                    <li><Link to="/cart"><i className="fa fa-lock" /> Cart <span className="badge">{cartNumber}</span></Link></li>                
                    <li><a onClick={this.handlelogOut}><i className="fa fa-lock" /> Logout</a></li>
                </React.Fragment>
                )
            }
        }else{
            return (
                <React.Fragment>
                    <li><Link to="/register"><i className="fa fa-lock"></i> Register </Link></li>
                    <li><Link to="/login"><i className="fa fa-lock" /> Login </Link></li>
                </React.Fragment>
            )
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
                        <Link to="/"><img src="images/home/logo.png" alt="" /></Link>
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
                            {this.renderLoginLogout()}
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