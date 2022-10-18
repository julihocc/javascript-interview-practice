// async function searchByDate(iso2, year, month, day) {
//     // // const jsonData = require('./holidays-us-2022.json');
//     let url = `https://calendarific.com/api/v2/holidays?api_key=69c8e81970dc4ff7a4df87d0f9aa8ff2c29e9f80&country=${iso2}&year=${year}`;

//     let settings = { method: "Get" };
    
//     const response = await fetch(url, settings);

//     return response
// }

// const jsonData = searchByDate("us", 2022, 01, 01).then(res => res.json())    

// console.log(jsonData)

fun
let url = `https://calendarific.com/api/v2/holidays?api_key=69c8e81970dc4ff7a4df87d0f9aa8ff2c29e9f80&country=${iso2}&year=${year}`;

function load (url) {
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
  const promise = load('https://...')
  
  // let the Promise know what you want to do when it resolves
  promise.then(console.log)  