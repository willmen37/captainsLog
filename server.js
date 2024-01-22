const express = require("express");
const app = express();
const PORT = 3000;

const jsxEngine = require("jsx-view-engine")
app.set("view engine", "jsx")
app.engine("jsx", jsxEngine())

// body-parser(POST request fromat)
app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res) => {
    res.send('Captain Log')
})

app.get("/new" ,(req, res)=>{
    res.render("New")
})



app.post('/create', (req, res) => {
    // console.log(req.body)
    if (req.body.shipIsBroken === 'on') {
        req.body.shipIsBroken = true
    } else {
        req.body.shipIsBroken = false
    }
    console.log(req.body, "after")
    res.send("data received")
})

app.listen(PORT, (req,res)=>{
    console.log(`listening on Port:${PORT}`);

})