const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/signup.html");
});

app.post("/", function (req, res) {
    var firstName = req.body.firstname;
    var lastName = req.body.lastname;
    var email = req.body.email;

    var data = {
        members: [
            {
                email_address: email,
                status: "subscribed",
                merge_fields: {
                    FNAME: firstName,
                    LNAME: lastName
                }
            }
        ]
    };

    var jsonData = JSON.stringify(data);

    var options = {
        url: "https://us20.api.mailchimp.com/3.0/lists/42f9bd2b1a",
        method: "POST",
        headers: {
            "Authorization": "73zillion 447350477f0f6ab23fcdaa5756105d7c-us20"
        },
        body: jsonData
    };

    request(options, function (error, response, body) {
       if (error) {
           console.log(error);
       } else {
           console.log(response.statusCode);
       }
    });
});

app.listen(3000, function () {
    console.log("Server is running on port 3000");
});

// API id
// 447350477f0f6ab23fcdaa5756105d7c-us20

// List id
// 42f9bd2b1a