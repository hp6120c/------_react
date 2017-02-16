import React from "react";
import ReactDOM from "react-dom";
import {Route,Router,IndexRoute,hashHistory,browserHistory} from "react-router";
import Login from "Login";
import Reg from "Reg";
import Content from "Content";
import Student from "Student";
import 'antd/dist/antd.css';


ReactDOM.render(<Router history={hashHistory}>
                    <Route path="/" component={Content}>
                        <IndexRoute component={Login}></IndexRoute>
                    	<Route path="/login" component={Login}></Route>
                    	<Route path="/reg" component={Reg}></Route>
                    	<Route path="/student" component={Student}></Route>
                    </Route>
    </Router>,document.getElementById("content"));
