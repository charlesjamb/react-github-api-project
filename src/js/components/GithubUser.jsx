// Libraries
const React = require('react');
const Link = require('react-router').Link;

///////////////////////////////////////////////////////////////////////////////
const GitHubUser = React.createClass({
	propTypes: {
		user: React.PropTypes.object.isRequired
	},
	render: function() {
		return (
			<div className="follower-profil">
				<Link to={("/user/" + this.props.user.login)}>
					<img src={this.props.user.avatar_url}/>
					<p>{this.props.user.login}</p>
				</Link>
			</div>
		);
	}
})

module.exports = GitHubUser;