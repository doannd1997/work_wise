const { createStore } = require("redux");

const defaultRegion = {
  latitude: 21.005042,
  longitude: 105.843597,
  latitudeDelta: 0.0522,
  longitudeDelta: 0.0171,
}
const defaultState = {
  logedIn: global.userData.logedIn,
  CHILDREN_TRACKING_showingDivInfo: false,
  region: {
    ...defaultRegion
  },
  _region: {
    ...defaultRegion
  },
  mapType: "standard",

  // account
  curTab: 0,  // account Tab
  childWatchMode: 0, // 0 == guardians ; 1 == all Info
  parentAvatar: require("../../../../res/image/Account/man.png"),
  parentName: "[ Tên Phụ Huynh ]",
  studentList: [

  ],
  curStudent: 0,
  // student infomation in screen account
  studentInfomation: [      

  ],
  loadingStudentInfomation: false,
  loadingGuardianInfomation: false,
  // history
  history: [

  ],
  isPickingDate: false,
  guardians: [],

  // mail-tab
  mail_inbox: [

  ],
  mail_sentMail: [

  ],
  mail_isReading: false,
  mail_curTab: 0,
  mail_isDisplayPopUp: false,
  mail_composeContent: "",
  mail_showing: false,
  mail_mailIndex: null,
  mail_curMonitor: 0,
  mail_loading: false,
}

const reducer = (state, action) => {
  if (Object.keys(state).length == 0)
    return defaultState;
  switch (action.type) {
    case "LOG_IN":
      global.userData.setLogedIn(true);
      return { ...state, logedIn: true, parentName: action.parentName, parentAvatar: action.parentAvatar, studentList: action.studentList };
    case "LOG_OUT":
      global.userData.setLogedIn(false);
      return { ...state, logedIn: false };
    case "TOGGLE_LOG_IN":
      global.userData.setLogedIn(!global.userData.logedIn);
      return { ...state, logedIn: !state.logedIn }
    case "CHILDREN_TRACKING_showingDivInfo__SHOW":
      return { ...state, CHILDREN_TRACKING_showingDivInfo: true }
    case "CHILDREN_TRACKING_showingDivInfo__HIDE":
      return { ...state, CHILDREN_TRACKING_showingDivInfo: false }
    case "MAP_VIEW_UPDATE_REGION":
      return { ...state, _region: action.region };
    case "MAP_VIEW_RESET_REGION":
      return { ...state, region: { ...state._region } };
    case "SWITCH_MAP_TYPE":
      return { ...state, mapType: (state.mapType == "standard") ? "satellite" : "standard" }
    case "SET_TAB":
      return { ...state, curTab: action.curTab };
    case "SET_PARENT_AVATAR":
      return { ...state, parentAvatar: action.avatar }
    case "SET_STUDENT_AVATAR":
      var studentList = state.studentList.map((item, index) => {
        if (index != state.curStudent)
          return item;
        return { ...item, avatar: action.avatar }
      })
      return { ...state, studentList: studentList }
    case "SELECT_CHILD":
      return { ...state, curStudent: action.curStudent }
    case "TOGGLE_PICKING":
      return { ...state, isPickingDate: !state.isPickingDate }
    
      // mail
    case "MAIL_SET_TAB":
      return { ...state, mail_curTab: action.mail_curTab };
    case "MAIL_OPEN_SEND_MAIL":
      return { ...state, mail_isDisplayPopUp: true, mail_composeContent: "" };
    case "MAIL_CLOSE_COMPOSE_MAIL":
      return { ...state, mail_isDisplayPopUp: false };
    case "MAIL_SEND_MAIL":
      var mail = action.mail;
      var sentMail = state.mail_sentMail;
      sentMail.unshift(mail);
      return { ...state, mail_isDisplayPopUp: false, mail_sentMail: sentMail }
    case "MAIL_TYPE_COMPOSE_MAIL":
      return { ...state, mail_composeContent: action.mail_composeContent }
    case "MAIL_SHOW_MAIL":
      var _state = { ...state, mail_mailIndex: action.mail_mailIndex, mail_showing: true };
      if (state.mail_curTab == 0){
        var readMinute = !state.mail_inbox[action.mail_mailIndex].isRead ? -1 : 0
        _state = {
          ..._state, mail_inbox: state.mail_inbox.map((item, index) => {
            if (index == action.mail_mailIndex)
              return { ...item, isRead: true }
            return item;
          }),
          numberOfNewMails: state.numberOfNewMails + readMinute
        }
      }
      else
        _state = {
          ..._state, mail_sentMail: state.mail_sentMail.map((item, index) => {
            if (index == action.mail_mailIndex)
              return { ...item, isRead: true }
            return item;
          })
        }
      return _state;
    case "MAIL_ClOSE_MAIL":
      return { ...state, mail_showing: false, mail_mailIndex: null }
    case "MAIL_DELETE_MAIL":
      var _state = { ...state, mail_showing: false };
      if (state.mail_curTab == 0)
        _state = { ..._state, mail_inbox: state.mail_inbox.filter((item, index) => (index != state.mail_mailIndex)) }
      else
        _state = { ..._state, mail_sentMail: state.mail_sentMail.filter((item, index) => (index != state.mail_mailIndex)) }
      _state.mail_mailIndex = null;
      return _state;
    case "MAIL_CHANGE_MONITOR":
      return { ...state, mail_curMonitor: action.mail_curMonitor }
    case "SET_MAIL":
      var inboxs = action.inboxs
      var sents = action.sents
      return {...state, mail_inbox: inboxs, mail_sentMail: sents}
    case "MAIL_START_LOAD":
      return {...state, mail_loading: true}        
    case "MAIL_STOP_LOAD":
      return {...state, mail_loading: false}
    case "SET_NUM_NEW_MAIL":
      return {...state, numberOfNewMails: action.numberOfNewMails}

    // acount info
    case "GET_INFO_STUDENT":
      return {...state, loadingStudentInfomation: true}
    case "RESULT_GET_INFO_STUDENT":
      return {...state, loadingStudentInfomation: false}
    case "GET_INFO_GUARDIAN":
      return {...state, loadingGuardianInfomation: true}
    case "RESULT_GET_INFO_STUDENT":
      return {...state, loadingGuardianInfomation: false}
    case "SET_STUDENT_INFO":
      var studentInfomation = state.studentInfomation
      studentInfomation[state.curStudent] = action.studentInfo
      return {...state, studentInfomation: studentInfomation}
    case "TOGGLE_ENABLE_GUARDIAN_ACC_INFO":
      var guardianId = action.guardianId
      var student = state.studentList[state.curStudent]
      var idx = student.guardiandsId.indexOf(guardianId)
      if (idx == -1){
        student.guardiandsId.push(guardianId)
      }
      else {
        student.guardiandsId.splice(idx, 1)
      }
      var studentList = state.studentList.map((item, idx)=>{
        if (state.curStudent == idx)
          return student
        return item
      })

      return {...state, studentList: studentList}
    case "SWITCH_CHILD_TAB_MODE":
      return { ...state, childWatchMode: action.childWatchMode };
    case "SET_STUDENT_LIST":
      var _state = {...state}
      _state.studentList = action.studentList
      return {..._state}
    case "SET_GUARDIANS":
      return {...state, guardians: action.guardians, loadingGuardianInfomation: false}

    // history
    case "SET_HISTORY":
      return {...state, history: action.histories}
  }

  return state;
}

const store = createStore(reducer, {});

export default store;

exports.StoreDefault = {
  PICK_TYPE: "Pickup"
}