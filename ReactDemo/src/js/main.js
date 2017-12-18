
require('../../app/demo.css');
var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouterObj = require('react-router');
var Router = ReactRouterObj.Router;
var Route = ReactRouterObj.Route;
var Link = ReactRouterObj.Link;
var IndexLink = ReactRouterObj.IndexLink;
var IndexRoute = ReactRouterObj.IndexRoute;


var Box = React.createClass({
    render:function () {
        return(
            <div>
                <div id="header">
                   我是头部
                </div>
                <div id="content">
                    {this.props.children}
                </div>
                <div id="footer">
                    <IndexLink to="/" >这里是首页内容</IndexLink>
                    <Link to="/btn1">这里是第一部分内容</Link>
                    <Link to="/btn2">这里是第二部分内容</Link>
                </div>
            </div>
        )
    }
});

var Btn1 = React.createClass({
    render:function () {
        return(
            <div>这是第一部分</div>
        )
    }
});
var Btn2 = React.createClass({
    render:function () {
        return(
            <div>这是第二部分</div>
        )
    }
});
var Home = React.createClass({
    render:function () {
        return(
            <div>这是首页</div>
        )
    }
});

ReactDOM.render(
    <Router>
        <Route path="/" component={Box}>
            <IndexRoute component={Home}/>
            <Route path="btn1" component={Btn1}/>
            <Route path="btn2" component={Btn2}/>
        </Route>
    </Router>,document.getElementById('myApp')
);