
// refs are a way to keep track of your components in react 

var APP = React.createClass({
	// To specify the types and required options for the properties of this component
	propTypes:{
		txt: React.PropTypes.number.isRequired
	},
	// A component has state and props 
	// Props are immutable 'options' that are passed into the components
	// State are like private mutable variables whose values can change by events triggered on the component
	getInitialState: function() {
		return {txt: ''}
	},
	// A custom user defined function
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
	// We will initialize a new component (Slider) inside of another component(APP)
	// This establishes a Owner ownee relation ship, APP component is owner of Slider component
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
