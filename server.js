// Requires the releavnt modules
var express = require("express");
var path = require("path");
const cors = require("cors");
var bodyParser = require('body-parser');
// Starts an Express application
var app = express();
// Format JSON neatly
app.set("json spaces", 3);

const { MongoClient } = require('mongodb');

const uri = "mongodb+srv://jason123:kobe123123@cluster0.caocywq.mongodb.net/test";
const client = new MongoClient(uri);
/*
async function run() {
  try {


    await client.connect();
    const db = client.db('webstore');
    const collection = db.collection('lesson');

    // Find the first document in the collection
    const first = await collection.findOne();
    console.log(first);
  
    console.log("run it ");

  } finally {
    // Close the database connection when finished or an error occurs
    await client.close();
  }
}
run().catch(console.error);


*/























app.use(cors());

// Displays message once request has been recieved
app.use(function (req, res, next) {
  console.log("Request from: " + req.url + " path.");
  next();
});
// GET route to display message if user accesses server without specifying path
app.get("/", function (req, res, next) {
  res.send("Welcome to After School Web Page");
});
// GET route for server return a list of all lessons
app.get("/lessons", function (req, res, next) {
  // Array of objects to hold subjects data
  let subjects = [
    {
      id: 1,
      subject: "Math",
      location: "London",
      price: 100,
      spaces: 5,
      image_path: "https://cdn-icons-png.flaticon.com/512/221/221945.png",
      image_text: "Maths Icon",
    },
    {
      id: 2,
      subject: "English",
      location: "London",
      price: 50,
      spaces: 5,
      image_path:
        "https://cdn3.iconfinder.com/data/icons/linecons-free-vector-icons-pack/32/pen-512.png",
      image_text: "English Icon",
    },
    {
      id: 3,
      subject: "Science",
      location: "Leicester",
      price: 120,
      spaces: 5,
      image_path:
        "https://www.freeiconspng.com/thumbs/science-icon/science-icon-4.png",
      image_text: "Science Icon",
    },
    {
      id: 4,
      subject: "IT",
      location: "London",
      price: 80,
      spaces: 5,
      image_path: "https://cdn-icons-png.flaticon.com/512/3067/3067260.png",
      image_text: "IT Icon",
    },
    {
      id: 5,
      subject: "Art and Design",
      location: "Liverpool",
      price: 75,
      spaces: 5,
      image_path:
        "https://uxwing.com/wp-content/themes/uxwing/download/arts-graphic-shapes/art-icon.png",
      image_text: "Art Icon",
    },
    {
      id: 6,
      subject: "History",
      location: "Birmingham",
      price: 50,
      spaces: 5,
      image_path: "https://cdn-icons-png.flaticon.com/512/32/32223.png",
      image_text: "History Icon",
    },
    {
      id: 7,
      subject: "Geography",
      location: "Manchester",
      price: 110,
      spaces: 5,
      image_path: "http://cdn.onlinewebfonts.com/svg/img_511797.png",
      image_text: "Geography Icon",
    },
    {
      id: 8,
      subject: "Design and Technology",
      location: "London",
      price: 100,
      spaces: 5,
      image_path: "https://static.thenounproject.com/png/2038327-200.png",
      image_text: "DT Icon",
    },
    {
      id: 9,
      subject: "Music",
      location: "Bristol",
      price: 70,
      spaces: 5,
      image_path: "https://cdn-icons-png.flaticon.com/512/4430/4430494.png",
      image_text: "Music Icon",
    },
    {
      id: 10,
      subject: "PE",
      location: "London",
      price: 60,
      spaces: 5,
      image_path: "https://cdn-icons-png.flaticon.com/512/4384/4384368.png",
      image_text: "PE Icon",
    },
  ];

  async function run() {

    try {
  
      const database = client.db("webstore");
  
      const lessonco = database.collection("lesson");
  
      // query for movies that have a runtime less than 15 minutes
     
 
     
      const cursor = lessonco.find();
  
     
      console.log("client asked server and lessons being sent");

  
   let df = [];
 //  await cursor.forEach(console.dir);

   for await (const doc of cursor) {
    console.log(doc);
    df.push(doc);
  }
      res.json(df);

  
    } finally {
  
  //    await client.close();
  
    }
  
  }
  
  run().catch(console.dir);
  
  
  
  


 
});
















// http://localhost:3000/order?id=5&name=lewis&phonenumber=072999974734&spaces=1

// GET route for path '/user' for server to return user data
app.get("/order", function (req, res, next) {

  async function run() {

    try {
  
      const database = client.db("webstore");
  
      const haiku = database.collection("order");
  
      // create a document to insert

      const doc = {
  
        lessonid: req.query.id,
        name:req.query.name,
        phonenumber: req.query.phonenumber,
        numberofspaces:req.query.spaces,
  
      }
  
      const result = await haiku.insertOne(doc);
  
      console.log(`A document was inserted with the _id: ${result.insertedId}`);
  
    } finally {
  
//    await client.close();
  
    }
  
  }
  
  run().catch(console.dir);
  let user = [
    {
      id: 1,
      email: "user@email.com",
      password: "123",
    },
    {
      id: 2,
      email: "user2@email.com",
      password: "456",
    },
  ];
res.json(user);
//res.end(user);
});


















// GET route for path '/user' for server to return user data
app.get("/update", function (req, res, next) {
  async function run() {

    try {
  
      const database = client.db("webstore");
  
      const movies = database.collection("lesson");
  
      // create a filter for a movie to update
  
      const filter = {  subject: req.query.subject };
  
      // this option instructs the method to create a document if no documents match the filter
  
    //  const options = { upsert: true };
  
      // create a document that sets the plot of the movie
      
      const updateDoc = {
  
        $set: {
  
          numberofspaces: req.query.spaceleft
  
        },
  
      };
  
      const result = await movies.updateOne(filter, updateDoc);
  
      console.log(
  
        `${result.matchedCount} document(s) matched the filter, updated ${result.modifiedCount} document(s)`,
  
      );
  
    } finally {
  
//      await client.close();
  
    }
  
  }
  
  run().catch(console.dir);


  // Array of objects to hold user data
  let user = [
    {
      id: 1,
      email: "user@email.com",
      password: "123",
    },
    {
      id: 2,
      email: "user2@email.com",
      password: "456",
    },
  ];
  res.json(user);
});





///////////////////////////// second post 


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())


// http://localhost:3000/order?id=5&name=lewis&phonenumber=072999974734&spaces=1

// POST  route for path '/user' for server to return user data
app.post("/order12", function (req, res, next) {
console.log("order 12 ");
  async function run() {

    try {
  
      const database = client.db("webstore");
  
      const haiku = database.collection("order");
  
      // create a document to insert

      const doc = {
  
        lessonid: req.id,
        name:req.name,
        phonenumber: req.phonenumber,
        numberofspaces:req.spaces,
  
      }
  
      const result = await haiku.insertOne(doc);
  
      console.log(`A document was inserted with the _id: ${result.insertedId}`);
  
    } finally {
  
//    await client.close();
  
    }
  
  }
  
  run().catch(console.dir);
  let user = [
    {
      id: 1,
      email: "user@email.com",
      password: "123",
    },
    {
      id: 2,
      email: "user2@email.com",
      password: "456",
    },
  ];
  console.log('receiving data ...');
  console.log('body is '+req.name);
// res.end(user);
res.send(user);
});








// PUT route for path '/user' for server to return user data
app.put("/updateinformation", function (req, res, next) {
  async function run() {

    try {
  
      const database = client.db("webstore");
  
      const movies = database.collection("lesson");
  
      // create a filter for a movie to update
  
      const filter = {  id:req.subject };
  
      // this option instructs the method to create a document if no documents match the filter
  
    //  const options = { upsert: true };
  
      // create a document that sets the plot of the movie
      
      const updateDoc = {
  
        $set: {
  
          numberofspaces: req.spaceleft
  
        },
  
      };
  
      const result = await movies.updateOne(filter, updateDoc);
  
      console.log(
  
        `${result.matchedCount} document(s) matched the filter, updated ${result.modifiedCount} document(s)`,
  
      );
  
    } finally {
  
//      await client.close();
  
    }
  
  }
  
  run().catch(console.dir);


  // Array of objects to hold user data
  let user = [
    {
      id: 1,
      email: "user@email.com",
      password: "123",
    },
    {
      id: 2,
      email: "user2@email.com",
      password: "456",
    },
  ];
  res.json(user);
});

















// Display messgae if path is incorrect
app.use(function (req, res) {
  res.status(404).send("Path '" + req.url + "' is incorrect");
});
// Display message when app has started

const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log("App started on port 3000");
});


let order = [
  {
    id: 1,
    name:"jack",
    password: "07917-883585",
    numberofspaces:2,
  },
  {
    id: 2,
    name:"rebecca",
    phonenumber: "107915-891629",
    numberofspaces:3,
  },
];


