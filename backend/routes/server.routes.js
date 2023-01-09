const express = require("express");
const Card = require ("../model/card.model")
const router = express.Router();

router.post("/create-card",async(req,res,next)=>{
    const {title,urlImage}=req.body;
    if (!title) next("title is requeird");
    if (!urlImage) next("urlImage is requeird");
    //  const newCard= new Card(req.body);
    //  newCard.save();
    await Card.create(req.body)
    res.send({title,urlImage})
});



module.exports = router