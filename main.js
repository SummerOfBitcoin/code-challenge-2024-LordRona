const fs = require('fs');
const path =require('path');

//getting the json transaction file Directory
const memPoolDirectory = path.join(__dirname, 'mempool');

//reading the contents of the mempool
fs.readdir(memPoolDirectory, (err, JSONfiles)=>{
    if(err){
        console.log("Error occured while getting files",err);
        return;
    }

    //process each transaction file
    JSONfiles.forEach((file)=>{
        //getting each transaction file file path
        const memPoolPath = path.join(memPoolDirectory, file);

        //processing each transaction file
        fs.readFile(memPoolPath, 'utf8', (err, data)=>{
            if(err){
                console.log("Error occured while trying to ");
                return;
            }

            //Process the transaction
            const transaction = JSON.parse(data);

            console.log(transaction);
        })
    })
});

