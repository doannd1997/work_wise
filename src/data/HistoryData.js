const TimeUtils = require("../utils/Times").default
import  {randomRange, toFixedRange} from "../utils/Number"

const History = function(routes, index, homeAddress){
    var date = new Date() - index * CONST.ONE_DAY_IN_MS

    var day = new Date(date).getDay()
    if (day == 0 || day == 6)
        return

    this.date = date

    var pickUpRoute = routes[CONST.ROUTE_TYPE_PICK_UP]
    var dropOffRoute = routes[CONST.ROUTE_TYPE_DELIVERY]

    this.data = []

    var a0 = {
        time: "06:" + toFixedRange(2, 45, 59) + ":" + toFixedRange(2, 0, 59),
        place: homeAddress,
        action: "UP"
    }
    var a1 = {
        time: "07:" + toFixedRange(2, 0, 30) + ":" + toFixedRange(2, 0, 59),
        place: dropOffRoute.startPoint.Name,
        action: "DOWN"
    }
    var a2 = {
        time: "16:" + toFixedRange(2, 45, 59) + ":" + toFixedRange(2, 0, 59),
        place: dropOffRoute.startPoint.Name,
        action: "UP"
    }
    var a3 = {
        time: "17:" + toFixedRange(2, 0, 30) + ":" + toFixedRange(2, 0, 59),
        place: homeAddress,
        action: "DOWN"
    }

    this.data.push(a0)
    this.data.push(a1)
    this.data.push(a2)
    this.data.push(a3)
}



var data = {}
export default HistoryData = {
    setData: function(_data){
        data = _data
        this.histories = []
        this.parseData()
    },
    parseData: function(){
        var pickUps = data[0].LstActions.sort((a, b)=>b.ActionTime - a.ActionTime)
        var droppOffs = data[1].LstActions.sort((a, b)=>b.ActionTime - a.ActionTime)
        this.parseAction(pickUps)
        this.parseAction(droppOffs)
    },
    parseAction: function(actions){
        for(var a in actions){
            var action = actions[a]
            var date = action.ActionTime.slice(0, 9)
            var data = {
                time: action.ActionTime,
                place: action.StationName,
                action: action.Action == "HS lên xe" ? "UP" : "DOWN"
            }
            this.addEvent(date, data)
        }
    },
    addEvent: function(date, data){
        var history = this.histories.filter(item=>item.date == date)[0]
        if (history == undefined)
            history = createDate(date)
        history.data.push(data)
    },
    createDate: function(date){
        return {
            date: date,
            data: [

            ]
        }
    },
    getStudentHistories: function(studentList){
        var histories = []
        for(var s in studentList){
            var _student = studentList[s]
            var studentId = _student.studentId
            var trackingBatch = global.registerData.getMergeStudent()
            var student = trackingBatch.filter(item=>item.studentId == studentId)[0]
            var routes = student.routes
            var historyList = []
            for (var h=4; h<CONST.HISTORIES_LENGTH; h++){
                var history = new History(routes, h, student.homeAddress)
                if (Object.keys(history).length != 0)
                historyList.push(history)
            }
            histories[s] = historyList
        }
        
        return histories
    }
}

const CONST = {
    ROUTE_TYPE_PICK_UP: "Pickup",
    ROUTE_TYPE_DELIVERY: "Delivery",
    ONE_DAY_IN_MS: 24*60*60*1000,
    HISTORIES_LENGTH: 120
}