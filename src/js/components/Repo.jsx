// Libraries
const React = require('react');
const Link = require('react-router').Link;

const $ = require('jquery');

// Components
const GithubRepo = require('./GithubRepo');

///////////////////////////////////////////////////////////////////////////////
const Repo = React.createClass({
	propTypes: {
        params: React.PropTypes.shape({
            username: React.PropTypes.string.isRequired
        })
    },
    getInitialState: function() {
    	return {};
    },
    componentDidMount: function () {
    	$.getJSON(`https://api.github.com/users/${this.props.params.username}/repos?access_token=99b8847d2a5eebebc136b33b0866dd9cd56bf6ce`)
    	.then(repos => {
    		console.log(repos)
    		this.setState({
    			repos: repos
    		});
    	});
    },
	render: function() {
		if (!this.state.repos) {
            return <div>LOADING REPOSITORIES...</div>
        }

        return (
            <div className="repos-page">
				<h3>Repositories of {this.props.params.username}</h3>
				<ul>
                   {this.state.repos.map(repo => <GithubRepo repo={repo} key={repo.id}/>)}
                </ul>			
            </div>
		);
	}
})

module.exports = Repo;

