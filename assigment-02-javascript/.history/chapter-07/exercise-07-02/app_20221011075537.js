function getURL(iso2, year) {
    let url = `https://calendarific.com/api/v2/holidays?api_key=69c8e81970dc4ff7a4df87d0f9aa8ff2c29e9f80&country=${iso2}&year=${year}`;
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
        return ho
    });
}

searchHolidays("us", 2022, 01, 01)