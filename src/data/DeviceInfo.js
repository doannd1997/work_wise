import DeviceInfo from 'react-native-device-info'

export default {
    init: async function(){
        this.deviceId = await DeviceInfo.getUniqueId()
    },
    getDevideId: function(){
        return this.deviceId
    }
}