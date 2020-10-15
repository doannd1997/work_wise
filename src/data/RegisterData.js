var data = {}

var RegisterData = {
    setData: function(_data){
        data = _data        
    },
    getMergeStudent: function(studentList){
        if (studentList == undefined)
            studentList = global.routeData.getTrackingBatch()
        for (var s in studentList){
            var student = studentList[s]
            var info = data.find(item=>item.StudentID == student.studentId)
            student.homeAddress = info.HomeAddress
            student.homeLatitude = info.HomeLat
            student.homeLongitude = info.HomeLong
            student.effectDate = info.EffectiveDate
            student.monthlyFee = info.MonthlyFee
            student.placeSelected = {
                latitude: student.homeLatitude,
                longitude: student.homeLongitude,
                title: student.homeAddress
            },
            student.distanceToSchool = info.StopToSchool
            student.guardiandsId = (info.Supervisorids != null) ? info.Supervisorids.split(',') : []
            student.registerSuccessMgs = info.ConfirmRegisterPopupMessage
            student.pickUpOption = info.PickupOption || PICK_TYPE_METHOD.WITH_PARENT
            student.pickUpMethod = info.PickupMethod || PICK_TYPE.HOME
        }
        this.studentList = studentList
        return studentList
    }
}

export default RegisterData



exports.BUS_TYPE = {
    PICK_UP: "PICK_UP",
    DROP_DOWN: "DROP_DOWN"
  }
  
exports.PICK_TYPE = {
    HOME: 2,
    PLACE: 1
  };
  
exports.PICK_TYPE_METHOD = {
    WITH_PARENT: 0,
    ONLY_STUDENT: 1
  }
  