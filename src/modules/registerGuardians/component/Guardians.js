import React, {Component} from "react";
import {View, Text, TouchableOpacity, FlatList} from "react-native";
import {redux, connect} from "react-redux";

const commonStyles = require("../../../common/style/index").default;
const styles = require("../style/styles").default;
const GuardianCom = require("../component/Guardian").default;
const colors = require("../../../color/Colors").default;

class Guardians extends Component{
    render(){
        return (
            <FlatList style={[{flex: 1, backgroundColor: colors.screenBg}]}
                showsVerticalScrollIndicator={false}
                initialNumToRender={10}
                data={this.props.guardians}
                keyExtractor={(data, key)=>key}
                renderItem={(data)=>{
                    return <GuardianCom data={data}/>
                }}
                showsVerticalScrollIndicator={false}
            />
        )
    }
}

const mapStateToProps = (state)=>{
    return {
        guardians: state.guardians
    }
};

export default connect(mapStateToProps)(Guardians);