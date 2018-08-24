import React from 'react';
import { NavLink,Route,Switch,BrowserRouter as Router,BrowserRouter } from 'react-router-dom'
import './style/style.css'
import 'bundle-loader'
// bundle模型用来异步加载组件
import Bundle from '../routes/Bundle.js';

//CMD风格的异步加载组件  react-router4.0以下
// const Page1 = (location,callback) => require.ensure([], require => callback(null,require('../components/page1/index').default)) 
// const Page2 = (location,cb) => require.ensure([], require => cb(null,require('../components/page2/index').default)) 
// const Page3 = (location,cb) => require.ensure([], require => cb(null,require('../components/page3/index').default)) 
// <Route path="page2" getComponent={Page2} />
// <Route path="page3" getComponent={Page3} />

import lazyLoad from '../routes/lazyLoad';

import Page1 from 'bundle-loader?lazy&name=page1!../components/page1/index';
import Page2 from 'bundle-loader?lazy&name=page2!../components/page2/index';
import Page3 from 'bundle-loader?lazy&name=page3!../components/page3/index';



class AppPage extends React.Component{
    constructor(arg){
        super(arg)

        this.state={}
    }
    render(){
        return(
            <BrowserRouter>
                <Router  basename="/" >
                    <div className="appWried">
                        <div className="appBtn">
                            <NavLink to="/page1" className="button" activeClassName="active">
                                PAGE1
                            </NavLink>
                            <NavLink to="/page2" className="button" activeClassName="active">
                                PAGE2
                            </NavLink>
                            <NavLink to="/page3" className="button" activeClassName="active">
                                PAGE3
                            </NavLink>
                        </div>
                        <Route
                            path="/"
                            render={props => (
                                <Switch>
                                    <Route path="/page1" component={lazyLoad(Page1)}/> 
                                    <Route path="/page2" component={lazyLoad(Page2)}/> 
                                    <Route path="/page3" component={lazyLoad(Page3)}/> 
                                </Switch>
                            )}
                        />
                    </div>
                </Router>
            </BrowserRouter>
        )
    }
}


export default AppPage;