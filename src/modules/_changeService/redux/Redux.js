import {createStore} from "redux";
import { NativeModules } from "react-native";
import {QuickToast} from "../../../utils/Toast";

BUS_TYPE = {
  PICK_UP: "PICK_UP",
  DROP_DOWN: "DROP_DOWN"
}

PICK_TYPE = {
  HOME: "HOME",
  PLACE: "PLACE"
};

const PICK_TYPE_METHOD = {
  WITH_PARENT: "WITH_PARENT",
  ONLY_STUDENT: "ONLY_STUDENT"
}

var _curYear = new Date().getFullYear();
var defaultState = {
  isLoading: false,
  yearList: [_curYear, _curYear + 1],
  curYearIdx: 0,
  pickType: 'HOME', // Radio Button hiển thị chọn nhà hay địa chỉ mới
  homeAddress: 'Số 1 Đại Cồ Việt, Hai Bà Trưng, Hà Nội', // Địa chỉ nhà hiển thị
  placeAddress: 'Trống', // Địa chỉ mới hiển thị
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

  pickTypeMethod: PICK_TYPE_METHOD.WITH_PARENT, // Cách đón trả học sinh {với phụ huynh || học sinh tự lên}
  serviceStartTime: Date.now(),
  isPickingDateStart: false, // Thời gian bắt đầu dịch vụ
  partners: [
    {id: 0, name: 'Trần Quang Lợi', checked: false},
    {id: 1, name: 'Nguyễn Bá Lương', checked: false},
  ],
  guardians: [
    {id: 0, name: 'Trần Quang Khải', checked: false},
    {id: 1, name: 'Trần Quang Long', checked: false},
    {id: 2, name: 'Trần Quang Linh', checked: false},
    {id: 3, name: 'Trần Quang Lưu', checked: false},
    {id: 4, name: 'Trần Quang Hưng', checked: false},
    {id: 5, name: 'Trần Quang Quốc', checked: false},
    {id: 6, name: 'Trần Quang Bình', checked: false},
    {id: 7, name: 'Trần Quang Minh', checked: false},
    {id: 8, name: 'Trần Quang Vũ', checked: false},
  ],
  policyAgree: false,
  showAgreement: false,
  studentList: [

  ],
  curStudent: 0,
  loading: false
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
      return {...state, pickTypeMethod: (state.pickTypeMethod == PICK_TYPE_METHOD.WITH_PARENT) ? PICK_TYPE_METHOD.ONLY_STUDENT : PICK_TYPE_METHOD.WITH_PARENT};
    case "TOGGLE_PICKING":
      var pickingAddress = !state.pickingAddress;
      return {...state, pickingAddress: pickingAddress, searchResultShown: false, changeType: action.changeType};
    case "TYPING_SEARCH":
      return {...state, searchResultShown: true, placeSelected: null};
    case "DISABLE_SEARCH_RESULT_SHOWN":
      return {...state, searchResultShown: false};
    case "SET_SEARCH_RESULT":
      return {...state, listPlace: action.listPlace};
    case "SELECT_PLACE":
      return {
        ...state,
        placeSelected: action.placeSelected,
        searchResultShown: false,
        region: {
          ...state.region,
          latitude: action.placeSelected.latitude,
          longitude: action.placeSelected.longitude,
        },
        isLoading: false
      };
    case "CHOOSE_PLACE":
      var title = state.placeSelected.title;
      if (state.changeType == CHANGE_TYPE.HOME)
        return {...state, homeAddress: title, pickingAddress: false}
      else
        return {...state, placeAddress: title, pickingAddress: false};
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
      var partnerId = action.partnerId;
      var partners = state.partners.map((partner)=>{
        if (partner.id == partnerId){
          return {...partner, checked: !partner.checked}
        }
        return partner;
      })
      return {...state, partners: partners};
    case "TOGGLE_SELECT_GUARDIAN":
      var guardianId = action.guardianId;

      var guardian = state.guardians.find((item)=>item.id == guardianId);

      if (!guardian.checked){
        var numSelected = state.guardians.filter((item)=>item.checked).length;
        if (numSelected >= GUARDIAN_MAX){
          var noti = global.localization.getLang("lang_select_guardians_max").replace("@max@", GUARDIAN_MAX);
          QuickToast.show(noti);
          return state;
        }
      }
    
      var guardians = state.guardians.map((guardian)=>{
        if (guardian.id == guardianId)
          return {...guardian, checked: !guardian.checked}
        else 
          return guardian;
      })
      return {...state, guardians: guardians};
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
      return {...state, studentList: action.studentList, pickingAddress: false}
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