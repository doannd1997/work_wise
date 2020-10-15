var data = {}

export default MailData = {
    setData: function(_data){
        data = _data
        this.parseData()
    },
    parseData: function(){
        this.inboxs = data
        .filter(item=>item.MessageType == CONST.TYPE_INBOX)
        .sort((a, b)=>b.MessageTime.localeCompare(b.MessageTime))
        .map(item=>{
            return {...item, isRead: item.IsRead != 1 ? false : true}
        })

        this.sents = data
        .filter(item=>item.MessageType == CONST.TYPE_SENT)
        .sort((a, b)=>b.MessageTime.localeCompare(b.MessageTime))
        .map(item=>{
            return {...item, isRead: true}
        })
    },
    getInboxs: function(){
        return this.inboxs
    },
    getSents: function(){
        return this.sents
    }
}

const CONST = {
    TYPE_INBOX: "INBOX",
    TYPE_SENT: "SENT"
}