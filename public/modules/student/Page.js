import React from "react";
import {Button} from 'antd';
import {ajax} from 'tools';
class Page extends React.Component{
  constructor(props){
		super(props);
  }
    prev(){
        if(this.props.data.curpage > 0){
            this.props.show(this.props.data.curpage - 1);
        }
    }
    next(){
        if(this.props.data.curpage < this.props.data.maxpage){
            this.props.show(this.props.data.curpage + 1);
        }
    }
    render(){
        var pageAry = [];
        for(let i = 1;i <= this.props.data.maxpage;i++ ){
            pageAry.push(<a key={i} onClick={function(){this.props.show(i)}.bind(this)}>{i}</a>);
        }
        return <div>
            <Button onClick={this.prev}>上一页</Button>
            {pageAry}
            <Button onClick={this.next}>下一页</Button>
        </div>
    }
}
export default Form.create()(Page)
