let express = require("express");
let os = require("os");
let path = require("path");

let app = express();
let port = process.env.PORT || 3000;

app.use("/html", express.static("./public"));
app.use("/node", express.static("./node_modules"));

app.get("/", (req, res) => {
    let filePath = path.join(__dirname, "public/PlotData_1.html");
    //let filePath = path.join("/html/MemoryManagement_2.html");
    res.sendFile(filePath, (err) =>{
        if(err){
            console.log(err);
        }else{
            console.log("File : " + filePath + " Sent...");
        }
    });
});

app.get("/Test2", (req, res) =>{
    let filePath = path.join(__dirname, "public/MemoryManagement.html");
    //let filePath = path.join("/html/MemoryManagement_2.html");
    res.sendFile(filePath, (err) =>{
        if(err){
            console.log(err);
        }else{
            console.log("File : " + filePath + " Sent...");
        }
    });

    //filePath = path.join(__dirname, "public/kc_house_data.csv");
    //res.download(filePath, "test.csv");
});

app.listen(port, () => {
    console.log("Server listening on PORT number : " + port);
});

let webDriver = require("selenium-webdriver");

async function getPage(){
    let driver = await new webDriver.Builder().forBrowser("chrome").build();
    await driver.get("http://localhost:3000/");
}

getPage();