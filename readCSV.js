const fs = require('fs')
const csv = require('csv-parser')
exports.getCSVData = async function(filename) {
    const csvData = []
    promise = new Promise((resolve, reject)=>{
        fs.createReadStream('sample.csv')
        .pipe(csv()).on('data',(row)=>{
            csvData.push(row)
        }).on('end',()=>{
            console.table(csvData)
            resolve(csvData)
        });
    });
    return promise
}
