const searchByDate = (iso2, year, month, day) => {
    // // const jsonData = require('./holidays-us-2022.json');
    let output = null;

    let url = `https://calendarific.com/api/v2/holidays?api_key=69c8e81970dc4ff7a4df87d0f9aa8ff2c29e9f80&country=${iso2}&year=${year}`

    let settings = { method: "Get" };
    
    fetch(url, settings)
    .then(res => res.json())
    .then((jsonData) => {
        const obj = jsonData["response"]["holidays"];
        const holidaysByDate = obj.filter(holiday => holiday["states"] === "All")
            .filter(holiday => {
                let date = holiday["date"]["datetime"];
                return date["year"] == year && date["month"] == month && date["day"] == day;
            })
        const holidaysNames = holidaysByDate.map(holiday => holiday["name"])
        console.log(holidaysNames)
        output = holidaysNames
    });  
    	
    return output
}

console.log("ok", searchByDate("us", 2022, 01, 01))