
const  Config = require('./config/Config')
// NPM package used for XMLHttpRequests from browser 
const axios = require('axios');
const mongoose = require('mongoose');
const Namr = require('./model/_namr');


// const url = "https://www.data.gouv.fr/api/1/datasets/?page=3000&page_size=1"
var sources = ["https://www.data.gouv.fr/api/1/datasets/?page=3000&page_size=1",
            "https://www.data.gouv.fr/api/1/datasets/?page=3000&page_size=2",
            "https://www.data.gouv.fr/api/1/datasets/?page=3000&page_size=3",
            "https://www.data.gouv.fr/api/1/datasets/?page=3000&page_size=4",
            "https://www.data.gouv.fr/api/1/datasets/?page=3000&page_size=5"]


//  module.exports =  async function ResourcesFetcher(url) {
//      await axios.get(url).then((results ) => {
//         payload = results.data.data
//         parse = JSON.parse(JSON.stringify(payload))
        
//         title = parse[0].resources[0].title
//         url = parse[0].resources[0].url
//          const namr = new Namr({
//             _id: mongoose.Types.ObjectId(),
//             title: title,
//             url: url
//         })
//         console.log(namr)
//         try {
//             const blba = async () => {
//                const test = await namr.save();
//                 return(test) 
//             }
//            console.log(blba().then(results => console.log(results)))
//         } catch (error) {
//             console.log('Something went wrong')
//             console.log(error)
//         }
//         console.log(title, url)
//     })
// }




async function ResourcesFetcher(url) {
    await axios.get(url).then((results ) => {
       payload = results.data.data
       parse = JSON.parse(JSON.stringify(payload))
       console.log("########################### PAGE 1 ###########################")
        console.log("1 Element :", parse[0].resources[0].title, parse[0].resources[0].url, "\n")
        console.log("2 Element :", parse[0].resources[1].title, parse[0].resources[1].url, "\n")
        // console.log("3 Element :", parse[0].resources[2].title, parse[0].resources[2].url, "\n")
        console.log("4 Element :", parse[0].resources[3].title, parse[0].resources[3].url, "\n")
        // console.log(parse[0].resources)
        console.log("########################### PAGE 2 ###########################")
        // console.log("Five Element :", parse[1].resources)
        console.log("1 Element :", parse[1].resources[0].title, parse[1].resources[0].url, "\n")
        console.log("2 Element :", parse[1].resources[1].title, parse[1].resources[1].url, "\n")
      
        console.log(parse[1].resources[1])

    })
}


ResourcesFetcher("https://www.data.gouv.fr/api/1/datasets/?page=3000&page_size=2");
















// sources.forEach()

//  source = url +`&page_size=${i}`
//  axios.get(url).then((result) => {
//     rejson = result.data.data
//     parse = JSON.parse(JSON.stringify(rejson))
//     resourcesData = parse[0].resources
//     console.log(resourcesData[1].title)
//     console.log(resourcesData[1].url)
// }).then((err) => {
//     console.log(err)
// })
