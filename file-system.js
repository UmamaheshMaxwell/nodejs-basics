const fs = require("fs")

// fs.readFile("./files/sample.txt", function(err, data){
//     if(err){
//         throw err
//     }
//     console.log(data.toString())
// })


/*
  ? To read the file synchronusly, you need to use readFileSync
*/
// var data = fs.readFileSync("./files/sample.txt")
// console.log(data.toString())

// fs.writeFile("./files/write-data.txt", "Hello World" , function(err){
//     if(err){
//         throw err
//     }
//     console.log('Write Operation Completed !!!')
// })

// fs.appendFile("./files/write-data.txt", "I am appending new text \n" , function(err){
//     if(err){
//         throw err
//     }
//     console.log('Append Operation Completed !!!')
// })

fs.unlink("./files/sample.txt", function(err){
    if(err){
        throw err
    }
    console.log('File Deletion Completed !!!')
})