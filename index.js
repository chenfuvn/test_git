import express from "express";

const app = express();

app.get("/", (req, res)=> {
    return res.json({
        status: true,
        message: "OK"
    });
})

app.listen("4567", ()=>{
    console.log("server is running in localhost: 4567");
})