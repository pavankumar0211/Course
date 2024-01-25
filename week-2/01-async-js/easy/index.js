const fs = require("fs");
const { resolve } = require("path");
var a = ''

function getData () {
    var text =  new Promise((resolve, reject) => {
        fs.readFile("a.txt", "utf-8", function(err, data) {
            resolve(data)     
        })
    }) 
    return text
}

var value = getData()
value.then((data) => {
    a = data
    a = a.replace(/\s+/g, ' ');
    fs.writeFile("a.txt", a , function(err, success) {
        if(err) {
            console.log('no data')
        }
    })
})












