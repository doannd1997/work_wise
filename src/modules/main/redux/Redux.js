const {createStore} = require("redux");

const defaultState = {
    logedIn: global.userData.logedIn,
}

const reducer = (state, action)=>{
    if (Object.keys(state).length == 0)
        return defaultState
    switch (action.type){
        case "LOG_IN":
            global.userData.setLogedIn(true);
            return {...state, logedIn: true};
        case "LOG_OUT":
            global.userData.setLogedIn(false);
            return {...state, logedIn: false};
        case "TOGGLE_LOG_IN":
            global.userData.setLogedIn(!global.userData.logedIn);
            return {...state, logedIn: !state.logedIn}
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
    }
    
    return state;
}

const store = createStore(reducer, {});

export default store;