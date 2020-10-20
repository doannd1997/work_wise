import React, {Component} from "react";
import {View, Text, TextInput, Image, TouchableOpacity} from "react-native"
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
        let _this = this
        return (
            <View style={[commonStyles.fullView, styles.profileContainer]}>
                <ToolBar params={{title: "lang_search"}}/>
                <View style={[styles.searchContainer]}>
                    <TextInput 
                        style={[styles.inputText]}
                        multiline={true}
                        placeholder={'   ......'}
                        onChangeText={(text)=>{
                            _this.props.dispatch({type: ACTION_TYPE.TYPE_COMMENT, comment: text})
                        }}
                        value={_this.props.comment}
                    />
                    <TouchableOpacity 
                        style={[styles.btnSearch]}
                        onPress={()=>{
                           
                        }}
                    >
                        <Image
                            source={require("../../../../../res/image/search/search_128_231_83_72.png")}
                            resizeMode={"contain"}
                            resizeMethod={"resize"}
                            style={[commonStyles.fullView]}
                        />
                    </TouchableOpacity>
                </View>
                <View style={[styles.ownerContainer]}>

                </View>
            </View>
        )
    }
};

const mapStateToProps = (state)=>{
    return {

    }
}

export default connect(mapStateToProps)(Main);