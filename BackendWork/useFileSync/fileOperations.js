const fs=require('fs');

function dataWrite()
{
  try{
    fs.writeFileSync("data.txt", "Hello Node js using file sync")
    console.log("data written successfully");
  }
  catch(err)
  {
    console.log("Error while writing the data" + err);
  }
}


const rf=fs.readFileSync('data.txt',{encoding:'utf-8'})
console.log(rf)