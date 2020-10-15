import React, {Component} from "react";
import {View, Text, StyleSheet, SectionList} from "react-native"
import {connect} from "react-redux"
import DateTimePicker from '@react-native-community/datetimepicker';

const styles = require("../style/styles").default;
const commonStyles = require("../../../../common/style/index").default;

const ToolBar = require("../component/ToolBar").default;
const ParentTab = require("../component/ParentTab").default;
const ChildTab = require("../component/ChildTab").default;

class Main extends Component{
    componentWillMount(){

    }
    componentWillUnmount(){
        
    }
    render(){
        return (
            <View style={[commonStyles.fullViewVerticalCenter]}>
                <ToolBar/>
                {this.props.curTab == 0 ? <ParentTab style={{width: "100%", flex: 1}} {...this.props}/> : <ChildTab style={{width: "100%", flex: 1}}/>}
            </View>
        )
    }
};

const mapStateToProps = (state)=>{
    return {
        curTab: state.curTab
    }
}

export default connect(mapStateToProps)(Main);