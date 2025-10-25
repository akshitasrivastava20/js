function setTimeoutPromisified(ms){
    return new Promise((resolve)=>{
        setTimeout(resolve,ms)
    }).then(() => console.log("hi"));
}

setTimeoutPromisified(1000)

function fetchPromisified(url){
    return new Promise((resolve, reject) => {
        fetch(url)
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
            })
            .then(data => resolve(data))
            .catch(error => reject(error));
    });
}
const fs=require("fs");
function readFilePromisified(path){
    return new Promise((resolve,reject)=>{

        fs.readFile(path,"utf-8",(err,data)=>{
            if (data) {
                resolve(data)
                
            } else {
                rejects(err)
            }
        })

    }).then(()=>console.log("file read"))
}

readFilePromisified("a.txt");