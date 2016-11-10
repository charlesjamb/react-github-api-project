// Libraries
const React = require('react');
const Link = require('react-router').Link;

///////////////////////////////////////////////////////////////////////////////
const GithubRepo = React.createClass({
	propTypes: {
		repo: React.PropTypes.object.isRequired
	},
	render: function() {
		return (
			<div className="repo-profil">
				<a target="_blank" href={this.props.repo.owner.html_url}>
					<p>{this.props.repo.name}</p>
				</a>
				<p>{this.props.repo.description}</p>
				<div className="stars">
					<p>{this.props.repo.stargazers_count}</p>
					<p>*</p>
				</div>
			</div>
		);
	}
})

module.exports = GithubRepo;


				
				

				