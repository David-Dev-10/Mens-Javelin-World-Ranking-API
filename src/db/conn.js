const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({path:'./config.env'});

// const DB = process.env.DATABASE;

// mongoose.connect("mongodb://localhost:27017/javelinmen",{
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// }).then(() => {
//     console.log("Connected... 🤗");
// }).catch((err) => {
//     console.log(err);
// })

mongoose.connect(process.env.DATABASE,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useFindAndModify: false,
    // useCreateIndex: true
}).then(() => {
    console.log("Connected... 🤗");
}).catch((err) => {
    console.log(err);
})