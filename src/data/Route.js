import { getAvatarUri, getAgreementUri } from "../modules/network/NetWork";

var data = []
var trackingBatch = {}
var delta;

function Student(route){
    var self = this
    
    this.studentId = route.studentId
    this.studentName = route.studentName
    this.avatar = route.avatar
    this.schoolLatitude = route.schoolLatitude
    this.schoolLongitude = route.schoolLongitude
    this.activePartners = route.activePartners
    this.agreementUri = route.agreementUri
    this.schoolLevel = route.schoolLevel

    this.routes = {}
    
    // var route = new Route(route)
    this.routes[route.routeType] = route;

    this.addRoute = function(route){
        // var route = new Route(route)
        this.routes[route.routeType] = route;
    }
}


export default RouteData = {
    setRoute: function(_data){
        data = _data;
        delta = RAD*BUS_RADIUS/sqrtOfTwo*Math.random();                     // this value is randomly, add to actual bus location
        this.parseData()
    },
    getBusRadius: function(){
        return BUS_RADIUS;
    },
    getBusLocation: function(latLng){
        return {
            latitude: latLng.latitude + delta, 
            longitude: latLng.longitude + delta
        }
    },

    getTrackingBatch: function(){
        return trackingBatch
    },

    parseData: function(){
        var routes = data.map((item, index)=>{
            var routeInfo = item.routeInfo;
            var student = routeInfo.LstStudents[0];
            var schoolPoint = routeInfo.LstStopPoints.slice(-1)[0]
            return {
                // for tracking + info
                id: item.Id,
                bks: item.BKS,
                driverName: item.DriverName,
                monitorName: item.MonitorName,
                startTime: item.StartFrom,
                endTime: item.EndAt,
                latitude: item.Latitude,
                longitude: item.Longitude,
                routeName: item.RouteName,
                routeType: item.RouteType,
                checkins: routeInfo.LstStopPoints.map((item)=>item),
                point: student.PickupPoint,
                status: student.StatusText,
                studentName: student.Name,
                activePartners: student.LstPickupPeople,
                agreementUri: getAgreementUri(student.AgreementLink),
                
                startPoint: {...routeInfo.LstStopPoints[0]},
                endPoint: {...routeInfo.LstStopPoints[routeInfo.LstStopPoints.length-1]},
                
                // for info
                studentId: student.Id,
                studentCode: student.StudentCode,
                schoolLevel: student.SchoolLevel,
                studentSchool: student.StudentSchool,
                pickUpOption: student.PickupPoint.Type,
                pickUpPlace: student.PickupPoint.Name,
                pickUpTime: student.PickUpTime,
                dropOffPlace: student.DropOffPoint.Name,
                dropOffTime: student.DropOffTime,
                driverPhoneNumber: item.DriverPhone,
                monitorPhoneNumber: item.MonitorPhone,
                avatar: getAvatarUri(student.AvartarLink),
                availableDateNextYear: student.AvailableDateNextYear,
                schoolLatitude: schoolPoint.Lati,
                schoolLongitude: schoolPoint.Longi,
            }
        });

        var childrenList = [];
        for (var r in routes){
            var route = routes[r];
            var matchChildren = childrenList.filter((item)=>item.studentId == route.studentId);
            if (matchChildren.length == 0){
                var child = new Student(route);
                childrenList.push(child);
            }
            else {
                var child = matchChildren[0];
                child.addRoute(route);
            }
        }

        trackingBatch = childrenList
    },
    mergeStudentStatus: function(studentStatus){
        for (var s in trackingBatch){
            var student = trackingBatch[s]
            var info = studentStatus.filter((item)=>item.StudentID == student.studentId)[0]
            student.registrationStatus = info.RegistrationStatus,
            student.registrationStatusText = info.RegistrationStatusText
        }
    },
    addPartner: function(studentList, partner){
        for (var s in studentList){
            var student = studentList[s]
            var pId = partner.studentId
            if (pId != student.studentId)
                student.partners.push(partner)
        }
    },
    getStudentIds: function(){
        return trackingBatch.map(item=>item.studentId)
    }
}

const BUS_RADIUS = 1500; // khoảng mà xe nằm trong 
// const RAD = 0.000005;
const RAD = 0
const sqrtOfTwo = Math.sqrt(2);