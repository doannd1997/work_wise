import React, {Component} from "react";
import {View, Text, StyleSheet, SectionList} from "react-native"
import {connect} from "react-redux"
// import DateTimePicker from '@react-native-community/datetimepicker';

import DatePicker from 'react-native-datepicker'

const Item = require("../component/TakeOffDetail").default;
const Header = require("../component/TakeOffHeader").default;

const ToolBar = require("../component/ToolBar").default;

class Main extends Component{
    onSelectDate(event, date){
        this.props.dispatch({type: "TOGGLE_PICKING"})
    }
    onSectionListRefresh(){
      
    }
    render(){
        var self = this;
        return (
          <View style={styles.container}>
            <ToolBar chooseCallback={(param)=>{
              self.refs.sectionList.scrollToLocation(param);
            }}/>
            <SectionList
              ref={"sectionList"}
              showsVerticalScrollIndicator={false}
              style={styles.sectionList}
              sections={this.props.history[this.props.curStudent]}
              keyExtractor={(item, index) => item + index}
              renderItem={({item, index}) => (
                <Item {...this.props} data={item} index={index} />
              )}
              renderSectionHeader={({section: {date}}) => (
                <Header {...this.props} date={date} />
              )}
              initialNumToRender={10}
              progressViewOffset={100}
              onRefresh={this.onSectionListRefresh.bind(this)}
              refreshing={false}
            />
          </View>
        );
    }
}

const mapStateToProps = (state)=>{
    return {
        history: state.history,
        isPickingDate: state.isPickingDate,
        studentList: state.studentList,
        curStudent: state.curStudent
    }
}

export default connect(mapStateToProps)(Main);


const styles = StyleSheet.create({
    container: {
        width: "100%",
        backgroundColor: "#ffffff",
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
    },
    sectionList: {
        flex: 1,
        width: "100%",
        backgroundColor: "#ffffff"
    },
    dateTimePickerContainer: {
      backgroundColor: "#eee",
      width: "100%",
      height: "30%"
    }
})