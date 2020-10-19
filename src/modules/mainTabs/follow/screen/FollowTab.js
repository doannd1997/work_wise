import React, {Component, useState} from "react";
import { connect } from "react-redux";

const Main = require("./Main").default;

class FollowTab extends Component{
    constructor(props){
        super(props);
        // this.nav = props.nav.navigation;
    }
    render(){
        return (
           <Main {...this.props}></Main> 
        )
    }
}

const mapStateToProps = (state)=>{
    return {
        logedIn: state.logedIn
    }
}

export default connect(mapStateToProps)(FollowTab)