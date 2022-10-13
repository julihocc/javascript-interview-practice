function getURL(iso2, year) {
    let url =  
    return url
}

function load(url) {
    return new Promise(async function (resolve, reject) {
        // do async thing
        const res = await fetch(url)

        // your custom code
        console.log('Yay! Loaded:', url)

        // resolve
        resolve(res.json()) // see note below!
    })
}

function searchHolidays(iso2, year, month, day) {
    const promise = load(getURL(iso2, year))
    promise.then((jsonData) => {
        const obj = jsonData["response"]["holidays"];
        const holidaysByDate = obj.filter(holiday => holiday["states"] === "All")
            .filter(holiday => {
                let date = holiday["date"]["datetime"];
                return date["year"] == year && date["month"] == month && date["day"] == day;
            })
        const holidaysNames = holidaysByDate.map(holiday => holiday["name"])
    });
}

console.log(searchHolidays("us", 2022, 01, 01))