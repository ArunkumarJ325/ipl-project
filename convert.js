const csv=require('csvtojson')
const fs=require('fs')

//filenames

const csvdata='matches.csv'
const jsondatafile='matches.json'

csv().fromFile(csvdata).then((jsonobject)=>{
  const jsondata=JSON.stringify(jsonobject,null,2)
  fs.writeFile(jsondatafile,jsondata,(err)=>{
    if(err){
      console.error("Error while Writting ",err)
    }
    else{
      console.log(`CSV file "${csvdata}" has been converted to JSON file "${jsondatafile}".`);
    }
  })
})
