// Libraries
const React = require('react');
const Link = require('react-router').Link;

const $ = require('jquery');

///////////////////////////////////////////////////////////////////////////////
const User = React.createClass({
    propTypes: {
        // PropTypes.shape is like PropTypes.object but lets you define what's expected to be inside the object
        params: React.PropTypes.shape({
            username: React.PropTypes.string.isRequired
        })
    },
    getInitialState: function() {
        return {user:''};
    },
    _setUser: function() {
        $.getJSON(`https://api.github.com/users/${this.props.params.username}?access_token=d275a78344263669e5dab356f89f7f77ef3e3748`)
        .then(user => {
            this.setState({
                user: user
            }); 
        });
    },
    componentDidMount: function() {
        this._setUser();
    },
    componentDidUpdate: function(prevProps, prevState) {
        if (prevProps.params.username !== this.props.params.username) {
            this._setUser();
        }
    },
    renderStat: function(stat) {
        return (
            <li key={stat.name} className="user-info__stat">
                <Link to={stat.url}>
                    <p className="user-info__stat-value">{stat.value}</p>
                    <p className="user-info__stat-name">{stat.name}</p>
                </Link>
            </li>
        );
    },
    render: function() {
        if (!this.state.user) {
            return (<div className="user-page">LOADING...</div>);
        }
        
        // If we get to this part of `render`, then the user is loaded
        var user = this.state.user;
        
        // Gather up some number stats about the user, to be used in a map below
        var stats = [
            {
                name: 'Public Repos',
                value: user.public_repos,
                url: `/user/${this.props.params.username}/repos`
            },
            {
                name: 'Followers',
                value: user.followers,
                url: `/user/${this.props.params.username}/followers`
            },
            {
                name: 'Following',
                value: user.following,
                url: `/user/${this.props.params.username}/following`
            }
        ];
        
        // Look in app.css for the styles that make this look like it does
        return (
            <div className="user-page">
                <div className="user-info">
                    <Link className="user-info__text" to={`/user/${user.login}`}>
                        <img className="user-info__avatar" src={user.avatar_url}/>
                        <h2 className="user-info__title">{user.login} ({user.name})</h2>
                        <p className="user-info__bio">{user.bio}</p>
                    </Link>
                
                    <ul className="user-info__stats">
                        {stats.map(this.renderStat)}              
                    </ul>
                </div>
                {this.props.children}
            </div>
        );
    }
});

module.exports = User;