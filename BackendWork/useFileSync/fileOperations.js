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


function dataread()
{
    try{
        const rf=fs.readFileSync('data.txt',{encoding:'utf-8'})
        console.log(rf)
    }
    catch(err)
    {
        console.log("Error read succesfuklly"+ err);
    }
}

function appenddata()
{
    try{
        const rf=fs.appendFile('data.txt', "appendding the data into the file");
    console.log("data written successfully");
    }
    catch(err)
    {
        console.log("Error read succesfuklly"+ err);
    }
}

function unlinkdata()
{
    try{
        const rf=fs.unlinkSync('data.txt');
    console.log("file deleted successfully");
    }
    catch(err)
    {
        console.log("Error read succesfuklly"+ err);
    }
}

module.exports
{
    dataWrite(),
    dataread(),
    appenddata(),
    unlinkdata()


};