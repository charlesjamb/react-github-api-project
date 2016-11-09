// Libraries
const React = require('react');
const $ = require('jquery');
const Link = require('react-router').Link;

///////////////////////////////////////////////////////////////////////////////
const Follower = React.createClass({
	propTypes: {
        params: React.PropTypes.shape({
            username: React.PropTypes.string.isRequired
        })
    },
    
	render: function() {
		<div className="followers-page">
			<h3>Followers of USERNAME</h3>
		</div>
	}
})