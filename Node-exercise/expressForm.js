const express = require('express');

// const { path } = require('express/lib/application');

const app = express();



var path = require('path');

const { send } = require('process');



//ejs

const ejs = require('ejs');

app.set('view engine', 'html');

app.engine('html', ejs.renderFile);



const cookieParser = require("cookie-parser");

app.use(cookieParser());


app.use(express.static(path.join(__dirname)));

// app.use(express.static(path.join(__dirname, "htmfrom")));
// built in middleWare express parser

app.use(express.json());

app.use(express.urlencoded({ extended: false }));





app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.listen(3000, () => {
    console.log("Your server is running on port 3000");

})




app.get("/getForm", function (req, res, next) {

    res.sendFile(path.join(__dirname, 'form.html'))

})


app.post("/postData", function (req, res, next) {

    console.log(req.body)
    // console.log(__dirname);

    res.render(path.join(__dirname, 'views', 'displayForm'), { data: req.body })

})



