import {getAvatarUri} from "../modules/network/NetWork"

var data = {}

export default GuardianData = {
    setData: function(_data){
        data = _data
        this.parseData()
    },
    parseData: function(){
        data = data.map((item)=>{
            return {
                // ...item,
                name: item.Name,
                phoneNumber: item.Phone,
                role: item.Relationship,
                avatarSource: getAvatarUri(item.Avatar),
                id: item.ID
            }
        })
    },
    getParseData: function(data){
        data = data.map((item)=>{
            return {
                // ...item,
                name: item.Name,
                phoneNumber: item.Phone,
                role: item.Relationship,
                avatarSource: getAvatarUri(item.Avatar),
                id: item.ID
            }
        })
        return data
    },
    getGuardianList: function(){
        return data
    },
    updateGuardian: (guardian)=>{
        data = data.map(item=>{
            if (item.id == guardian.id)
                return guardian
            return item
        })
    },
    addGuardian: (guardian)=>{
        data.push(guardian)
    }
}