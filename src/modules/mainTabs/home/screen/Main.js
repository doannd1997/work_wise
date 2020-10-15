import React, {Component} from "react";
import {View, Text, Image, FlatList, Alert} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { connect } from 'react-redux';


const commonStyles = require("../../../../common/style/index").default;
const styles = require("../style/styles").default;

const ToolBar = require("../components/ToolBar").default;
const Gridder = require("../components/Gridder").default;

class HomeScreenCom extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <View style={commonStyles.fullViewVerticalTopDown}>
                <ToolBar/>
                <Gridder/>
            </View>
        )
    }
}

const mapStateToProps = (state)=>{
    return {
        logedIn: state.logedIn
    }
}

export default connect(mapStateToProps)(HomeScreenCom)