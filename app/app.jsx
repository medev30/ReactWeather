var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory, browserHistory} = require('react-router');
// import {Route, Router, IndexRoute, hashHistory, browserHistory} from 'react-router';
var Main = require('Main');
var Weather = require('Weather');
var About = require('About');
var Examples = require('Examples');

// Load Foundation
require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation();

// Load css
require('style!css!appStyles')

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path='/' component={Main}>
            <Route path='about' component={About}/>
            <IndexRoute component={Weather}/>
            <Route path='examples' component={Examples}/>
            {/*<Route path='weather' component={Weather}/>*/}
        </Route>
    </Router>,
    document.getElementById('app')
);
