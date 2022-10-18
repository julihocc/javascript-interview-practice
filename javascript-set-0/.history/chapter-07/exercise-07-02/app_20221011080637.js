const usData = require('./holidays-us.json'); 

function searchByDateUS(month, day) {    
    const obj = usData["response"]["holidays"];
    const holidaysByDate = obj.filter(holiday => holiday["states"] === "All")
        .filter(holiday => {
            let date = holiday["date"]["datetime"];
            returndate["month"] == month && date["day"] == day;
        })
    const holidaysNames = holidaysByDate.map(holiday => holiday["name"])
    return holidaysNames
}

console.log(sear);