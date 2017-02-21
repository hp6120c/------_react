import React from "react";
import ReactDOM from "react-dom";
import {Route,Router,IndexRoute,hashHistory,browserHistory} from "react-router";
import Login from "Login";
import Reg from "Reg";
import Content from "Content";
import Screenings from "Screenings"; 
import FilmAndScreen from "FilmAndScreen";
import Information from "Information";
import Films from "Films";
import 'antd/dist/antd.css';


ReactDOM.render(<Router history={hashHistory}>
                    <Route path="/" component={Content}>
                        <IndexRoute component={Login}></IndexRoute>
                    	<Route path="/login" component={Login}></Route>
                    	<Route path="/reg" component={Reg}></Route>
                    	<Route path="/screenings" component={Screenings}></Route>
                    	<Route path="/filmAndScreen" component={FilmAndScreen}></Route>
                    	<Route path="/informations" component={Information}></Route>
                    	<Route path="/films" component={Films}></Route>
                    </Route>
    </Router>,document.getElementById("content"));
