const express = require("express");
const app = express();

const rou = require('./router')

//define path
var path = require('path');

const ejs = require('ejs');
app.set('view engine', 'html');
app.engine('html', ejs.renderFile);

const cookieparser = require('cookie-parser');
app.use(cookieparser());


//define static folders for asset usages
app.use(express.static(path.join(__dirname)));
app.use(express.static(path.join(__dirname, "asset", "css")));
app.use(express.static(path.join(__dirname, "asset", "images")));

//Build in middleware express parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Start server at default port 80
app.listen(3000);

// app.get('/login', rou);
// app.post('/authenticate', rou);
app.use(rou);

// app.get("/login", (req, res, next) => {
//     res.clearCookie("key");
//     res.sendFile(path.join(__dirname, "views", 'login.html'));
// });

// app.post("/authenticate",
//     (req, res, next) => {
//         // console.log(req.body.username);
//         // console.log(req.cookies);
//         if (req.body.username == 'admin'
//             && req.body.password == 'admin') {
//             res.cookie('key', req.body.username + req.body.password);
//             res.redirect("formview");
//         } else {
//             res.clearCookie("key");
//             res.redirect('back')
//         }
//     });

// app.get("/formview",
//     (req, res, next) => {
//         console.log("RAJ", req.cookies.key);
//         if (req.cookies.key != null
//             && req.cookies.key.length > 0) {
//             res.sendFile(path.join(__dirname, "views", 'UserForm.html'));
//         } else {
//             res.clearCookie("key");
//             res.redirect("/login");
//         }
//     });

// app.post("/postUser",
//     (req, res, next) => {
//         if (req.cookies.key != null
//             && req.cookies.key.length > 0) {
//             res.render(path.join(__dirname,
//                 "views", "userdetails.html"), { data: req.body });
//         } else {
//             res.clearCookie("key");
//             res.redirect("/login");
//         }
//     });


// app.get("/formatedPOsition", (req, res, next) => {
//     res.render(path.join(__dirname, 'views', 'ejsreadobject.html'),
//         {
//             skill: { name: 'Javascript', level: 0 },
//             position: 'developer',
//             jet: [{ a: 2, b: 3 }, { a: 5, b: 7 }],
//             obj: {
//                 name: "ram", age: 45, skills: ["java", "javascript"], // select
//                 location: [{ address: "100 N", city: "fairfield" }, { addres: "200 N", city: "Burlington" }]// 
//             }
//         });
// });


// app.get("/finalreview",
//     (req, res, next) => {
//         res.render(path.join(__dirname, "views"
//             , "final", 'finalreview'), {
//             Title: "Header", text: "My Paragraph",
//             second: [{
//                 name: "Ram", courses: ["java", "javascript"]
//             }, {
//                 name: "Shyam", courses: ["Python", "Angular"]
//             }]
//         })
//     });


// app.get("/ajax", (req, res, next) => {
//     res.render(path.join(__dirname, "views", 'ajaxexample', 'ajaxpage'));
// });



// app.get(
//     '/hello', function (req, res, next) {
//         console.log("FROM GET==>", req.body, req.query);
//         // res.send('Ajax Response');
//         res.send('{a:"checking object",b:"Place number as wel",ok:3}');
//     }
// );

// app.post(
//     '/hello', function (req, res, next) {
//         console.log("FROM POST==>", req.body, req.query);
//         // res.send('Ajax Response');
//         res.send('{a:"checking object",b:"Place number as wel",ok:3}');
//     }
// );


// // //404 not found
// // app.use((req, res, next) => {
// //     res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
// //     // res.send("PAGE NOT FOUND");
// // });

// // // //error page
// // app.use((err, req, res, next) => {
// //     res.send("Page ran into issue.");
// // });