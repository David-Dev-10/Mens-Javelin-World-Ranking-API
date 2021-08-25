const express = require("express");
const router = new express.Router();
const Menjavelin = require("../models/javelin");

// Creating handle for posting mens info
router.post("/mens", async (req, res) => {
    try{
        const addmen = new Menjavelin(req.body);
        console.log(req.body);
        const newMen = await addmen.save();
        res.status(201).send(newMen);
    }catch{
        (err) => {res.status(400).send(err)}
    }
});

// To get all ranking data
router.get("/mens", async (req, res) => {
    try{
        const getMen = await Menjavelin.find({}).sort({"rank":1});
        res.status(201).send(getMen);
    }catch{(err) => {
        res.status(401).send(err);
    }}
});

// To get particular ranking data via 
router.get("/mens/:rank", async (req, res) => {
    try{
        // console.log(req.params.rank);
        const getMan = await Menjavelin.find({ rank: req.params.rank });
        if(!getMan){
            res.status(404).send("Request Not Found");
        }else{
            res.status(201).send(getMan);
        }
    }catch{
        (err) => {
            res.status(401).send(err)
        }
    }
});

// To update a particular record
router.patch("/mens/:_id", async (req,res) => {
    try{
        const updateMan = await Menjavelin.findByIdAndUpdate({_id:req.params._id}, req.body,{
            new: true
        });
        if(!updateMan){
            res.status(404).send();
        }
        else{
            res.status(201).send(updateMan);
        }
    }catch{err => { res.status(500).send(err)}}//status 500 cause its server related and data is already stored.
});

// to delete a particular record
router.delete("/mens/:_id", async( req, res) => {
    try{
        const deleteMan = await MenjavelinfindByIdAndDelete({_id:req.params._id});
        if(!deleteMan){
            res.status(404).send();
        }
        else{
            res.status(201).send(deleteMan);
        }
    }catch{err => res.status(401).send()}
})

module.exports = router;