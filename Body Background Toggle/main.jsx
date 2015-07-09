// First react component
// refs are a way to keep track of your components in react 
var APP = React.createClass({
	propTypes:{
		txt: React.PropTypes.number.isRequired
	},
	getInitialState: function() {
		return {txt: ''}
	},
	update: function() {
		this.setState({
			red: this.refs.red.refs.range.getDOMNode().value,
			green : this.refs.green.refs.range.getDOMNode().value,
			blue: this.refs.blue.refs.range.getDOMNode().value
		});

		// Update the background color of the body 
		var color = 'rgb(' + this.state.red + ', ' + this.state.green + ', ' + this.state.blue + ')';
		document.body.style.backgroundColor = color;
	},
	// We will initialize a new component inside of another component
	render: function() {
		return (
			<div>
				<label className = 'slider'>R : </label>
				<Slider ref = "red" update = {this.update} />
				<label className = 'slider'>{this.state.red}</label>
				<br/>
				<label className = 'slider'>G : </label>
				<Slider ref = "green" update = {this.update} />
				<label className = 'slider'>{this.state.green}</label>
				<br/>
				<label className = 'slider'>B : </label>
				<Slider ref = "blue" update = {this.update} />
				<label className = 'slider'>{this.state.blue}</label>
			</div>
		);
	}
});

var Slider = React.createClass({
	render: function() {
		return (
			<input ref = "range" type = "range" min = "0" max = "255" onChange = {this.props.update}/>
		);
	}
});

// Render the component to the appropriate DOM element
React.render(<APP txt = "This is some text" />, document.body);
