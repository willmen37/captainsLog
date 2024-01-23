const express = require("express");
const newLog = require("./models/newlog")
const app = express();
const PORT = 3000;



const jsxEngine = require("jsx-view-engine")
app.set("view engine", "jsx")
app.engine("jsx", jsxEngine())

// body-parser(POST request format)
app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res) => {
    res.send('Captain Log')
})

app.get("/new" ,(req, res)=>{
    res.render("New")
})

app.get("/index" ,(req, res)=>{
    res.render("index",  {logs: newLog[req.params.index]})
    // console.log(logs, "INDEXSERVER")
})


app.get("/show" ,(req, res)=>{
    res.render("show", {logs: newLog[req.params.index]})
    console.log(logs, "SERVERSHOW")
})



app.post('/create', (req, res) => {
    // console.log(req.body)
    if (req.body.shipIsBroken === 'on') {
        req.body.shipIsBroken = true
    } else {
        req.body.shipIsBroken = false
    }
    newLog.push(req.body)
    // console.log(newLog, "after")
    res.redirect("/show")
})

app.listen(PORT, (req,res)=>{
    console.log(`listening on Port:${PORT}`);

})