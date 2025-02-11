const fs = require('fs');

// Writing data to the file
fs.writeFile('data.txt', "Welcome to FSD session", () => {
    console.log("Data written successfully");

    // Reading the data from the file
    fs.readFile('data.txt', (error, data) => {
        if (error) {
            console.log("Error while reading the data");
        } else {
            console.log(data.toString()); 
        }

   
        try {
            fs.unlinkSync('data.txt');  
            console.log("File deleted successfully");
        } catch (err) {
            console.log("Error while deleting the file: " + err);
        }

        try{
            fs.appendFile('data.txt',"appendding the data into the file");
            console.log("data written successfully");
        }
        catch(err)
        {
            console.log("Error read succesfuklly"+ err);
        }
    });
});
