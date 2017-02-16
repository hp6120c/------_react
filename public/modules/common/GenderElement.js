import React from "react";
export default React.createClass({
    getInitialState:function(){
        return {
            value:this.props.value
        }
    },
    componentWillReceiveProps:function(newProps){
        this.setState({
            value:newProps.value
        });
    },
    change:function(event){
        this.setState({
            value:event.target.value
        });
    },
    render:function(){
        console.log(this.props.gender);
        return <div>
            <input type="radio" ref="male" name="gender"
            onChange={this.change} checked={this.state.value == "男"} value="男"/>男

            <input type="radio" ref="female" name="gender"
            onChange={this.change} checked={this.state.value == "女"}  value="女"/>女
        </div>
    }
});
