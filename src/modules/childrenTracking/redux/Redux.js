const {createStore} = require("redux");

const defaultRegion = {
    latitude: 21.005042,
    longitude: 105.843597,
    latitudeDelta: 0.0522,
    longitudeDelta: 0.0171,
}

const StoreConst = {
    PICK_UP: "Pickup",
    DELIVERY: "Delivery"
}

getRouteType = ()=>{
    var hours = new Date().getHours()
    if (hours < 12)
        return StoreConst.PICK_UP
    else 
        return StoreConst.DELIVERY
}

const defaultState = {
    displayName: "Nguyễn Duy Đoàn",
    CHILDREN_TRACKING_showingDivInfo: false,
    region: {
        ...defaultRegion
        },
    _region: {
        ...defaultRegion
        },
    mapType: "standard",
    routeType: StoreConst.PICK_UP,
    studentList: [],
    curStudent: 0
}

const reducer = (state, action)=>{
    if (Object.keys(state).length == 0)
        return defaultState
    
    state.routeType = getRouteType()
    switch (action.type){
        case "CHILDREN_TRACKING_showingDivInfo__SHOW":
            return {...state, CHILDREN_TRACKING_showingDivInfo: true}
        case "CHILDREN_TRACKING_showingDivInfo__HIDE":
            return {...state, CHILDREN_TRACKING_showingDivInfo: false}
        case "MAP_VIEW_UPDATE_REGION":
            return {...state, _region: action.region };
        case "MAP_VIEW_RESET_REGION":
            return {...state, region: {...state._region}};
        case "SWITCH_MAP_TYPE":
            return {...state, mapType: (state.mapType == "standard") ? "satellite" : "standard"}
        case "CHANGE_STUDENT": 
            return {...state, curStudent: action.index}
        
            // set data
        case "SET_TRACK_INFO":
            return {...state, studentList: action.studentList}
    }
    
    return {...state, routeType: getRouteType()};
}

const store = createStore(reducer, {});

export default store;

exports.StoreConst = StoreConst;
exports.DefaultRegion = defaultRegion;