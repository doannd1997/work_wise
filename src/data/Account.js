const netConf = require("../../res/Network/Network.json");

var data = {};

export default Account = {
    setAccount: function(_data){
        data = _data
    },
    getAccountName: function(){
        return data.ParrentName
    },
    getPhone: function(){
        return data.ParrentPhone
    },
    getId: function(){
        return data.ParrentID
    },
    getRelationShip: function(){
        return data.Relationship
    },
    getAvatarUrl: function(){
        return netConf.BASE_URL + data.ParrentAvatar
    },
    getBatch: function(){
        return {
            parentName: data.ParrentName,
            parentAvatar: {uri: this.getAvatarUrl()}
        }
    }
}