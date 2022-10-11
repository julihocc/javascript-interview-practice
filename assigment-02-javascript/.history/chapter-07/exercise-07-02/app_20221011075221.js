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

// run the function and receive a Promise
const promise = load(getURL("us", 2022))

// let the Promise know what you want to do when it resolves
promise.then((jsonData) => {
    const obj = jsonData["response"]["holidays"];
    const holidaysByDate = obj.filter(holiday => holiday["states"] === "All")
        .filter(holiday => {
            let date = holiday["date"]["datetime"];
            return date["year"] == year && date["month"] == month && date["day"] == day;
        })
    const holidaysNames = holidaysByDate.map(holiday => holiday["name"])
    console.log(holidaysNames
});  