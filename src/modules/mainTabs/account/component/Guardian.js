import React, {Component, PureComponent} from "react";
import {View, Text, StyleSheet , Alert, Image} from "react-native";
import { TouchableOpacity, FlatList } from "react-native-gesture-handler";
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome5';
import CheckBox from 'react-native-check-box'

const commonStyles = require("../../../../common/style/index").default;
const styles = require("../style/styles").default;
const Indicator = require("../../../../common/component/Indicator").default

const NetWorking = require("../networking/Networking").default

var GuardianContainer = (props)=>{
  var guardian = props.guardian;
  var guardianId = guardian.id;

  var _checked = props.student.guardiandsId.indexOf(guardianId) != -1

  return (
    <View style={styles.optionContainer}>
      <CheckBox
        style={styles.checkboxContainer}
        onClick={()=>{
         

          var guardiansId = props.student.guardiandsId.map(item=>item)
          var index = guardiansId.indexOf(guardianId)
          if (index == -1){
            guardiansId.push(guardianId)
          }
          else {
            guardiansId.splice(index, 1)
          }

          NetWorking.apiupdateStudentGuardians(props.student.studentId, guardiansId)

          props.dispatch({
            type: 'TOGGLE_ENABLE_GUARDIAN_ACC_INFO',
            guardianId: guardianId
          })
        }}
        isChecked={_checked}
        checkedImage={<Image source={require("../../../../../res/image/service/checked.png")} style={styles.imgCheckBox}/>}
        unCheckedImage={<Image source={require("../../../../../res/image/service/unchecked.png")} style={styles.imgCheckBox}/>}
      />
      <Image style={styles.guardianAvatar} source={guardian.avatarSource}/>
      <Text style={[commonStyles.text, commonStyles.textBold, styles.lblGuardian]}>{guardian.name}</Text>
    </View>
  );
}

const GuardianItem = connect((state)=>state)(GuardianContainer)


const updateGuardian = (props)=>{
  props.dispatch({type: "GET_INFO_GUARDIAN"})
  NetWorking.apiGetGuardiansInfo(props, (response)=>{
    var guardians = JSON.parse(response)
    guardians = global.guardianData.getParseData(guardians)
    props.dispatch({type: "SET_GUARDIANS", guardians: guardians})
  }, ()=>{
    props.dispatch({type: "RESULT_GET_INFO_STUDENT"})
  })
}
class Guardians extends Component{
  componentWillMount(){
    updateGuardian(this.props)
  }
  render(){
    return (
      <View style={styles.guardiansList}>
        {this.props.loadingGuardianInfomation ? <Indicator/> 
         : 
        <FlatList
        style={styles.guardiansList}
        showsVerticalScrollIndicator={false}
        data={this.props.guardians}
        renderItem={({item}) => {
          return (
            <GuardianItem
              guardian={item}
              style={styles.optionContainer}
              {...this.props}
            />
          );
        }}
        keyExtractor={(item, index) => {
          return index + '';
        }}
      />}
      </View>
    )
  }
}

const mapStateToProps = (state)=>{
    var student = state.studentList[state.curStudent]
    return {
        guardians: state.guardians,
        student: student,
        loadingGuardianInfomation: state.loadingGuardianInfomation
    }
}

export default connect(mapStateToProps)(Guardians)
