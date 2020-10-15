import React, {Component} from "react";
import {View, StyleSheet} from "react-native";
import {connect} from "react-redux";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/Fontisto";

export default class CheckBox extends Component{
    constructor(props){
        super(props);
        this.state = {active: props.active}
    }
    render(){
        var self = this;
        return (
            <View>
                
                <Icon name={"checkbox-active"} color={"#fff"} size={this.props.size} style={[styles.CheckBox, {opacity: this.state.active ? 1:0}]}></Icon> 
                <Icon name={"checkbox-passive"} color={"#fff"} size={this.props.size} style={[styles.CheckBox, {opacity: this.state.active ? 0:1}]}></Icon>
                <TouchableOpacity
                    style={{width: this.props.size, height: this.props.size}}
                    onPress={()=>{
                        self.setState((state)=>{
                            return {...state, active: !state.active}
                        });
                        self.props.callback()
                    }}
                >
                </TouchableOpacity>
            </View>
            
        )
    }
}


const styles = StyleSheet.create({
    container: {
        width: 50,
        height: 50,
        justifyContent: "center",
        alignItems: "center"
    },
    CheckBox: {
        position: "absolute",
        alignSelf: "center"
    }
})