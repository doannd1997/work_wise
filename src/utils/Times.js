const DATE_CONNECTOR = "-"
const TIME_CONNECTOR = ":"

var getDateComponent = (timeStamp)=>{
    var date = new Date(timeStamp);
    var dd = date.getDate();
    if (dd<10)  
        dd = "0" + dd;
    var mm = date.getMonth()+1;
    if (mm<10)
        mm = "0" + mm;
    var yy = date.getFullYear();

    return {d: dd, m: mm, y: yy};
};

const timeParser = (data)=>{
    var dd = (data._day) < 10 ? "0" + data._day : data._day;
    var mm = (data._month) < 10 ? "0" + data._month : data._month;
    var yy = data._year;

    var res = dd + DATE_CONNECTOR + mm + DATE_CONNECTOR + yy;
    if (!isNaN(data._h)){
        var ss = (data._s) < 10 ? "0" + data._s : data._s;
        var mm = (data._m) < 10 ? "0" + data._m : data._m;
        var hh = (data._h) < 10 ? "0" + data._h : data._h;

        res += "  " + hh + TIME_CONNECTOR + mm + TIME_CONNECTOR + ss;
    }

    return res;
}

export default Times = {
    formatDate: (timeStamp, formatType)=>{
        var dateCom = getDateComponent(timeStamp);
        switch (formatType){
            case Times.FORMAT_TYPE.dd_mm_yyyy:
                return dateCom.d + DATE_CONNECTOR + dateCom.m + DATE_CONNECTOR + dateCom.y;
            default:
                return dateCom.d + DATE_CONNECTOR + dateCom.m + DATE_CONNECTOR + dateCom.y;
        }
    },
    formatTime: (timeStamp, timeZone)=>{
        var localTimezone = new Date().getTimezoneOffset()/-60;
        if (timeZone != undefined){
            var delta = (timeZone - localTimezone) * 60*60*1000;
            timeStamp += delta;
        };
        var date = new Date(timeStamp);
        var _day = date.getDate();
        var _month = date.getMonth() + 1;
        var _year = date.getFullYear();

        var _h = date.getHours();
        var _m = date.getMinutes();
        var _s = date.getSeconds();

        return timeParser({
            _day: _day,
            _month: _month,
            _year: _year,
            _h: _h,
            _m: _m,
            _s: _s
        })
    },
    formatYYYY_MM_DD: timeStamp=>{
        var date = new Date(timeStamp)
        var y = date.getFullYear()
        var m = date.getMonth() + 1
        m = (m<10) ? ("0" + m) : m
        var d = date.getDate()
        d = (d<10) ? ("0" + d) : d
        return y + '-' + m + '-' +d
    },
    yy_mm_dd_toTimeStamp: yy_mm_dd=>{
        // 2020-08-17
        return new Date(yy_mm_dd).getTime()
    }
}

Times.FORMAT_TYPE = {
    dd_mm_yyyy: "DD-MM-YYYY"
}