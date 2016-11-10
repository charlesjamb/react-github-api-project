// Libraries
const React = require('react');
const Link = require('react-router').Link;

const $ = require('jquery');

// Components
const GithubUser= require('./GithubUser');

///////////////////////////////////////////////////////////////////////////////
const Followers = React.createClass({
	propTypes: {
        params: React.PropTypes.shape({
            username: React.PropTypes.string.isRequired
        })
    },
    getInitialState: function() {
    	return {};
    },
    componentDidMount: function () {
    	$.getJSON(`https://api.github.com/users/${this.props.params.username}/followers?access_token=d275a78344263669e5dab356f89f7f77ef3e3748`)
    	.then(followers => {
    		this.setState({
    			followers: followers
    		});
    	});
    },
	render: function() {
		if (!this.state.followers) {
            return <div>LOADING FOLLOWERS...</div>
        }

        return (
            <div className="followers-page">
				<h3>Followers of {this.props.params.username}</h3>
                <ul>
                   {this.state.followers.map(follower => <GithubUser user={follower} key={follower.id}/>)}
                </ul>
			</div>
		);
	}
})

module.exports = Followers;
