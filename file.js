const { error } = require("console")
const fs=require("fs")


const msg="\nhello Ashok"

fs.appendFile("hello.txt",msg,(error)=>{
    if (error) {
        console.error("file writing error")
    }else{
        console.log("file created")
    }
})