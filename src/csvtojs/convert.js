const csv=require(`csvtojson`)
const fs=require(`fs`)

//filenames

const csvdata='/home/arun/Downloads/ipl-project/src/data/matches.csv'
const jsondatafile=`/home/arun/Downloads/ipl-project/src/public/matches.json`

csv().fromFile(csvdata).then((jsonobject)=>{
  const jsondata=JSON.stringify(jsonobject,null,2)
  fs.writeFile(jsondatafile,jsondata,(err)=>{
    if(err){
      console.error("Error while Writting ",err)
    }
    else{
      console.log(`CSV file matches.csv has been converted to JSON file matches.json".`);
    }
  })
})
