var App = React.createClass({
	render: function() {
		return(
			<div>
				<Input/>
				<Output font = "Karla">What is up ?</Output>
				<Output font = "Helvetica Neue">Hey How are you man?</Output>
				<Output font = "Bree serif"> Hey there!</Output>
				<Output font = "Lato">Goodbye cruel world!</Output>
				<Output font = "Cabin" />
				<Output font = "Proxima Nova" />
				<Output font = "Andale Mono" />
			</div>
		);
	}
});

// The main input field
var Input = React.createClass({
	// Now we need a funciton that fires up everytime we start typing in the input and then updates the relevant text 
	update: function() {
		var currentValue = this.refs.main_input.getDOMNode().value;
		var outputNodes = document.getElementsByClassName('output');
		for(outputNode in outputNodes) {
			if(outputNodes.hasOwnProperty(outputNode)) {
				outputNodes[outputNode].textContent = currentValue;
			}
		}
	},
	render: function() {
		return(
			<div>
				<input ref = "main_input" type = "text" id = "main_input" name = "main_input" onChange = {this.update} placeholder = "Enter some text" />
			</div>
		);
	}
});

// This is the component in which the output text will be displayed
var Output = React.createClass({
	componentWillMount: function () {
	    this.props.val = this.props.children || "Hello, world" ;
	},
	render: function() {
		var divStyle = {
			fontFamily : this.props.font,
			fontSize : 28
		};
		return(
			<div className = "fontOutput">
				<div className = "fontName" style = {divStyle}>
					{this.props.font}
				</div>
				<div style = {divStyle} className = "output">
					{this.props.val}
				</div>
			</div>
		);
	}
});

React.render(<App/>, document.getElementById('app'));