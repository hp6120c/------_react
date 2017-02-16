import 'antd/dist/antd.css';
import React from "react";
export default class InputElement extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		return (
			<div>
				<label>{this.props.children}</label>
				<input type="text"/>
			</div>
		)
	}
}