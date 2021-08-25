const mongoose = require("mongoose");

const DB = "mongodb+srv://menjavelindb:javelinranker@cluster0.whxi4.mongodb.net/menjavelinranking?retryWrites=true&w=majority";

// mongoose.connect("mongodb://localhost:27017/javelinmen",{
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// }).then(() => {
//     console.log("Connected... 🤗");
// }).catch((err) => {
//     console.log(err);
// })

mongoose.connect(DB,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useFindAndModify: false,
    // useCreateIndex: true
}).then(() => {
    console.log("Connected... 🤗");
}).catch((err) => {
    console.log(err);
})