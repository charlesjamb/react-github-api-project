// Libraries
const React = require('react');
const $ = require('jquery');
const Link = require('react-router').Link;

///////////////////////////////////////////////////////////////////////////////
const Followers = React.createClass({
	propTypes: {
        params: React.PropTypes.shape({
            username: React.PropTypes.string.isRequired
        })
    },
	render: function() {
		return (
			<div className="followers-page">
				<h3>Followers of {this.props.params.username}</h3>
			</div>
		);
	}
})

module.exports = Followers;