const fs = require('fs');

// Read the JSON file
const rawData = fs.readFile('/home/arun/Downloads/IPL/matches.json');
const data = JSON.parse(rawData);


const out=data.reduce((acc,val)=>{
    let season1=val["season"]
    if(acc[season1]){
        acc[season1]++
    }
    else{
        acc[season1]=1
    }
    return acc
},{})
console.log(out)
const result=JSON.stringify(out,null,2)
const store='src/public/matches-per-year.json'
fs.writeFile(store,result,(err)=>{
    if(err){
        console.error("Error while writting",err)
    }
    else{
        console.log('json file "${store}" is written succesfully')
    }
})

