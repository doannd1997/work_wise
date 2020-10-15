import {createStore} from "redux";
import { NativeModules } from "react-native";
import {QuickToast} from "../../../utils/Toast";
import { ActivityIndicator } from "react-native-paper";

const BUS_TYPE = {
  PICK_UP: "PICK_UP",
  DROP_DOWN: "DROP_DOWN"
}

exports.BUS_TYPE = {
  PICK_UP: "PICK_UP",
  DROP_DOWN: "DROP_DOWN"
}

exports.PICK_TYPE = {
  HOME: 2,
  PLACE: 1
};

exports.PICK_TYPE_METHOD = {
  WITH_PARENT: 0,
  ONLY_STUDENT: 1
}

var _curYear = new Date().getFullYear();
var defaultState = {
  isLoading: false,
  yearList: [_curYear, _curYear + 1],
  curYearIdx: 0,
  pickType: 'HOME', // Radio Button hiển thị chọn nhà hay địa chỉ mới
  placeAddress: '---', // Địa chỉ mới hiển thị
  homeSetted: false, // Chọn địa chỉ nhà
  placeSetted: false, // Chọn địa chỉ mới

  pickingAddress: false, // Khi nhấn vào thay đổi địa chỉ đển khi chọn được đia chỉ                                             // Đang tìm kiếm địa chỉ, thay đổi địa chỉ
  changeType: null,

  placeSelected: null, // Location mà người dùng nhấn vào nút chọn và bản đồ định hướng lên để hiển thị
  listPlace: [],
  searchResultShown: false,
  region: {
    latitude: 21.005042,
    longitude: 105.843597,
    latitudeDelta: 0.0522,
    longitudeDelta: 0.0171,
  },

  // pickTypeMethod: PICK_TYPE_METHOD.WITH_PARENT, // Cách đón trả học sinh {với phụ huynh || học sinh tự lên}
  serviceStartTime: Date.now(),
  isPickingDateStart: false, // Thời gian bắt đầu dịch vụ
  guardianList: [
    
  ],
  policyAgree: false,
  showAgreement: false,
  studentList: [

  ],
  curStudent: 0,
  loading: false,
};


const reducer = (state, action)=>{
  if (Object.keys(state).length == 0)
    state = defaultState;
  switch (action.type){
    case "CHANGE_YEAR":
      return {...state, curYearIdx: action.curYearIdx}
    case "TOGGLE_PICK_TYPE":
      return {...state, pickType: (state.pickType == PICK_TYPE.HOME) ? PICK_TYPE.PLACE : PICK_TYPE.HOME};
    case "TOGGLE_PICK_TYPE_METHOD":
      var studentId = state.studentList[state.curStudent].studentId
      var studentList = state.studentList.map(item=>{
        if (item.studentId != studentId)
          return item
        var student = {...item, pickUpOption: (item.pickUpOption + 1)%2}
        return student
      })
      return {...state, studentList: studentList}
    case "TOGGLE_PICKING":
      var pickingAddress = !state.pickingAddress;
      if (pickingAddress){
          var student = state.studentList[state.curStudent]
          var region = {
            ...state.region,
            latitude: student.placeSelected.latitude,
            longitude: student.placeSelected.longitude
          }
          state.region = region
          var placeSelected = {
            latitude: student.homeLatitude,
            longitude: student.homeLongitude,
            title: student.homeAddress
          }
          state.placeSelected = placeSelected
      }
      return {...state, pickingAddress: pickingAddress, searchResultShown: false, changeType: action.changeType};
    case "TYPING_SEARCH":
      return {...state, searchResultShown: true, placeSelected: null};
    case "DISABLE_SEARCH_RESULT_SHOWN":
      return {...state, searchResultShown: false};
    case "SET_SEARCH_RESULT":
      return {...state, listPlace: action.listPlace};
    case "SELECT_PLACE":
      state.studentList[state.curStudent].placeSelected = action.placeSelected
      return {
        ...state,
        searchResultShown: false,
        region: {
          ...state.region,
          latitude: action.placeSelected.latitude,
          longitude: action.placeSelected.longitude,
        },
        isLoading: false
      };
    case "CHOOSE_PLACE":
      if (state.changeType == CHANGE_TYPE.HOME)
        return {...state, pickingAddress: false}
      else
        return {...state, pickingAddress: false};
    case "START_LOADING":
      return {...state, isLoading: true};
    case "STOP_LOADING":
      return {...state, isLoading: false};
    case "HIDE_PICKING_SERVICE_DATE_START":
      return {...state, isPickingDateStart: false};
    case "SHOW_PICKING_SERVICE_DATE_START":
      return {...state, isPickingDateStart: true};
      
    case "CHANGE_SERVICE_DATE_START":
      return {...state, serviceStartTime: action.time};
    case "TOGGLE_SELECT_PARTER":
      var partnerId = action.partnerId
      var student = state.studentList[state.curStudent]
      var studentId = student.studentId
      var index = student.activePartners.indexOf(partnerId)

      var activePartners = student.activePartners.splice()
      if (index == -1){
        activePartners.push(partnerId)
      }
      else {
        activePartners.splice(index, 1)
      }

      return {...state, studentList: state.studentList.map(item=>{
        if (item.studentId != studentId)
          return item
        var _item = {...item, activePartners: activePartners}
        return _item
      })};
    case "TOGGLE_SELECT_GUARDIAN":
      var guardianId = action.guardianId;
      var curGuardiansId = state.studentList[state.curStudent].guardiandsId.slice()
      var index = curGuardiansId.indexOf(guardianId)
      if (index == -1){
        var numSelected = curGuardiansId.length
        if (numSelected >= GUARDIAN_MAX){
          var noti = global.localization.getLang("lang_select_guardians_max").replace("@max@", GUARDIAN_MAX);
          QuickToast.show(noti);
          return state;
        }
        curGuardiansId.push(guardianId)
      }
      else {
        curGuardiansId.splice(index, 1)
      }
      var studentList = state.studentList.slice()
      studentList[state.curStudent].guardiandsId = curGuardiansId
      return {...state, studentList: studentList};
    case "TOGGLE_POLICY_AGREE":
      return {...state, policyAgree: !state.policyAgree};
    case "TOGGLE_SHOW_AGREEMENT":
      return {...state, showAgreement: !state.showAgreement};
    case "ACCEPT_AND_HIDE_AGREEMENT":
      return {...state, policyAgree: true, showAgreement: false};
    case "REJECT_AND_HIDE_AGREEMENT":
      return {...state, policyAgree: false, showAgreement: false};
    case "SELECT_CHILD":
      return {...state, curStudent: action.curStudent}
    case "SET_STUDENT_LIST":
      if (typeof action.guardianList == 'object')
        state.guardianList = action.guardianList
      for (var s in action.studentList){
        action.studentList[s].partners = []
      }
      for (var s in action.studentList){
        var student = action.studentList[s]
        if (student.registrationStatus == 1){
          global.routeData.addPartner(action.studentList, student)
        }
      }
      return {...state, studentList: action.studentList, pickingAddress: false}
    case "REQUEST_DATA":
      return {...state, loading: true}
    case "RESULT_DATA":
      return {...state, loading: false}
    case "SET_DISTANCE_TO_SCHOOL":
      state.studentList[state.curStudent].distanceToSchool = action.distanceToSchool
      return {...state}
    default:
      return state;
  }
}

export default createStore(reducer, {});

const CHANGE_TYPE = {
  HOME: "HOME",
  PLACE: "PLACE"
};

const GUARDIAN_MAX = 4;