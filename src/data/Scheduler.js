import BackgroundTimer from 'react-native-background-timer'
import NetWorking from '../modules/mainTabs/mail/networking/NetWorking'

const MailNetWork = require("../modules/mainTabs/mail/networking/NetWorking").default
const HistoryNetWork = require("../modules/mainTabs/history/networking/Networking").default

const updateMail = ()=>{
    MailNetWork.apiRequestGetMessages(null, (responseText)=>{
        var json = JSON.parse(responseText)
        global.mailData.setData(json)

        var inboxs = global.mailData.getInboxs()

        var _numberOfNewMails = inboxs.filter(item=>!item.isRead).length
        if (_numberOfNewMails > 0 && _numberOfNewMails != global.scheduler.numberOfNewMails){
            global.notificationPusher.pushNotiMail(_numberOfNewMails)
            global.scheduler.numberOfNewMails = _numberOfNewMails
        }
    })
}


const updateHistory = ()=>{
    var trackingBatch = global.routeData.getTrackingBatch()
    trackingBatch.map(item=>{
        var props = {
            student: item
        }
        HistoryNetWork.apiGetStudentHistories(props, (responseText, studentId)=>{
            try {
                var json = JSON.parse(responseText)
                var hCounter = global.scheduler.historyCounter[studentId]
                if (isNaN(hCounter)){
                    global.scheduler.historyCounter[studentId] = 0
                }
                else {
                    var num = 0
                    json.map((item=>{
                        num += item.LstActions.length
                    }))
                    if (num != hCounter){
                        global.scheduler.historyCounter[studentId] = num
                        global.notificationPusher.pushNotiHistory()
                    }   
                }
            }
            catch (e){
                // console.log("")
            }
        },
        (err)=>{

        })
    })

}

export default Scheduler = {
    init: function(){
        this.numberOfNewMails = 0
        console.log(global.routeData.getStudentIds())
        this.historyCounter = {

        }
    },
    start: function(){
        this.init()
        updateMail()
        updateHistory()
        BackgroundTimer.runBackgroundTimer(() => { 
                updateMail()
                updateHistory()
            }, 
        2000)
    },
    stop: function(){
        BackgroundTimer.stopBackgroundTimer()
    },
    readMail: function(){
        this.numberOfNewMails --
    }
}