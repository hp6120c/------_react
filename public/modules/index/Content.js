import React from "react";
import {Layout,Menu} from "antd";
import OrgHeader from "./Header.js";
import OrgFooter from "./Footer.js";
const {Header,Footer,Content,Sider} = Layout;
export default React.createClass({
    render:function(){
        return (
        	<div>
        		<Layout>
        			<Header style={{backgroundColor:"skyblue",height:80,lineHeight: '80px'}}>
        				<OrgHeader router={this.props.router} style={{height:80}}></OrgHeader>
        			</Header>
                    
		        	<Content style={{minHeight:400}}>{this.props.children}</Content>
		            <Footer style={{backgroundColor:"skyblue",height:80,lineHeight: '80px'}}>
		            
		            <OrgFooter></OrgFooter>
		            </Footer>
        		</Layout>
		        	
        	</div>

        )
            
    }
});
