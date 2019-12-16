import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import ProductAdd from './ProductAdd';
import Profile from './Profile';
import ProductList from './ProductList';

// import ImageDirectory from '../Config/ImageDirectory';

class Account extends React.Component {

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-3">
                            <div className="panel-group category-products" id="accordian">
                                <div className="panel panel-default">                                
                                    <div className="panel-body">
                                        <ul>
                                            <li>
                                                <Link to="/account/profile"><i className="fa fa-angle-right"></i> My profile </Link>
                                            </li>
                                            <li>
                                                <Link to="/account"><i className="fa fa-angle-right"></i> All product</Link>
                                            </li>
                                            <li>
                                                <Link to="/account/add"><i className="fa fa-angle-right"></i> Add new product</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="cart_items" className="col-sm-9 ">
                            <Switch>
                                <Route exact path='/account' component={ProductList}/>
                                <Route path='/account/add' component={ProductAdd}/>
                                <Route path='/account/profile' component={Profile}/>
                            </Switch>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Account;