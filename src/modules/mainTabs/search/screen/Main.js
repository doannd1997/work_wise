import React, {Component} from "react";
import {View, Text, Image, SectionList} from "react-native"
import {connect} from "react-redux"
import DateTimePicker from '@react-native-community/datetimepicker';

const styles = require("../style/styles").default;
const commonStyles = require("../../../../common/style/index").default;

const ToolBar = require("../../../../common/component/Toolbar").default;

class Main extends Component{
    componentWillMount(){

    }
    componentWillUnmount(){
        
    }
    render(){
        return (
            <View style={[commonStyles.fullView, styles.profileContainer]}>
                <ToolBar params={{title: "lang_search"}}/>
                <View style={[styles.searchContainer]}>
                    
                </View>
                <View style={[styles.feedContainer]}>

                </View>
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