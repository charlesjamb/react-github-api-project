// Libraries
const React = require('react');
const Link = require('react-router').Link;

const $ = require('jquery');

// Components
const GithubUser= require('./GithubUser');

///////////////////////////////////////////////////////////////////////////////
const Following = React.createClass({
	propTypes: {
        params: React.PropTypes.shape({
            username: React.PropTypes.string.isRequired
        })
    },
    getInitialState: function() {
    	return {};
    },
    componentDidMount: function () {
    	$.getJSON(`https://api.github.com/users/${this.props.params.username}/following?access_token=99b8847d2a5eebebc136b33b0866dd9cd56bf6ce`)
    	.then(following => {
    		this.setState({
    			following: following
    		});
    	});
    },
	render: function() {
		if (!this.state.following) {
            return <div>LOADING FOLLOWING...</div>
        }

        return (
            <div className="following-page">
				<h3>Following of {this.props.params.username}</h3>
                <ul>
                   {this.state.following.map(following => <GithubUser user={following} key={following.id}/>)}
                </ul>
			</div>
		);
	}
})

module.exports = Following;