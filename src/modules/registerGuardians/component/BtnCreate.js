import React, {Component} from "react";
import {View, Text, TouchableOpacity, Image} from "react-native";
import {redux, connect} from "react-redux";
import Icon from "react-native-vector-icons/MaterialIcons";

const styles = require("../style/styles").default;
const commonStyles = require("../../../common/style/index").default;

const TimeUtils = require("../../../utils/Times").default;

class ButtonCreate extends Component{
    render(){
        const self = this;
        return (
            <TouchableOpacity style={styles.btnCreate} onPress={()=>{
                self.props.dispatch({type: "OPEN_ADD"})
            }}>
                <Image style={styles.imgAdd} source={require("../../../../res/image/popup/add_white_128.png")}/>
            </TouchableOpacity>
        )
    }
}

const mapStateToProps = (state)=>{
    return state;
};

export default connect(mapStateToProps)(ButtonCreate);