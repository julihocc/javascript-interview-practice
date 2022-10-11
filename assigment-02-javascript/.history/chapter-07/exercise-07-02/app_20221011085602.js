const usData = require('./holidays-us.json'); 
const mxData = require('./holidays-mx.json'); 

function searchByDate(data, month, day) {    
    const obj = data["response"]["holidays"];
    const holidaysByDate = obj.filter(holiday => holiday["states"] === "All")
        .filter(holiday => {
            let date = holiday["date"]["datetime"];
            return date["month"] == month && date["day"] == day;
        })
    const holidaysNames = holidaysByDate.map(holiday => holiday["name"])
    return holidaysNames
}


console.log(searchByDate(usData, 10, 31));
console.log(searchByDate(mxData, 10, 31));

function isUsDate(userDate){
    return /^(0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])[- /.](19|20)\d\d$/.test(userDate)
}

function isMxDate(userDate){
    return /^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d$/.test(userDate)
}

console.log(isUsDate("10/31/2022"));
console.log(isMxDate("31/10/2022"));

function usToMx(userDate) {
    if(isUsDate(userDate)){
        let dateArray = userDate.split("/")
        let outputArray = [dateArray[1], dateArray[0], dateArray[2]].join('/')
        let holidaysToday = searchByDate(mxData, dateArray[0], dateArray[1]).join(', ')    
        return outputArray+" "+holidaysToday
    }
}

console.log(usToMx("10/31/2022"));

function mxToUs(userDate) {
    if(isMxDate(userDate)){
        let dateArray = userDate.split("/")
        let outputArray = [dateArray[1], dateArray[0], dateArray[2]].join('/')
        let holidaysToday = searchByDate(usData, dateArray[1], dateArray[0]).join(', ')    
        return outputArray+" "+holidaysToday
    }
}

console.log(mxToUs("4/10/2022"));