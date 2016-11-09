// Libraries
const React = require('react');
const ReactDOM = require('react-dom');
const ReactRouter = require('react-router');

// Components
const Router = ReactRouter.Router;
const Route = ReactRouter.Route;
const IndexRoute = ReactRouter.IndexRoute;

const App = require('./components/App');
const Search = require('./components/Search');
const User = require('./components/User');

/*
Rendering a router will output the right component tree based on the current URL.
Nested routes' components will be passed down to the parent as `this.props.children`

If the URL is /, then <App/> will be rendered, and this.props.children will be <Search/> (this is the IndexRoute)
If the URL is /user/ziad-saab then <App/> will be rendered, and this.props.children will be <User/>
The <User/> instance will be passed a prop called `params`. It will be an object with `{username: 'ziad-saab'}`
*/
const routes = (
    <Router history={ReactRouter.browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Search}/>
            <Route path="user/:username" component={User}>																																
            	 <Route path="followers" component={Followers}/>
            </Route>	 
        </Route>
    </Router>
);

ReactDOM.render(routes, document.getElementById('app'));