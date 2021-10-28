const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const mongoose = require("mongoose");
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());

///const url = process.env.MONGO_URL || 'mongodb://localhost/artwalk_db';

///const url = 'mongodb+srv://frankild:pc8307pc@artwalkkonzept.rnrwp.mongodb.net/artwalksDB?retryWrites=true&w=majority';
//mongoose frankild:pc8307pc@artwalkkonzept.rnrwp.mongodb.net/Test
//mongoose.connect("mongodb+srv://frankild:pc8307pc@cluster0.hudw9.mongodb.net/test?retryWrites=true&w=majority", {useNewUrlParser: true, useUnifiedTopology: true})

mongoose.connect("mongodb+srv://frankild:pc8307pc@artwalkkonzept.rnrwp.mongodb.net/Test?retryWrites=true&w=majority", {useNewUrlParser: true, useUnifiedTopology: true})
//mongodb+srv://frankild:pc8307pc@cluster0.hudw9.mongodb.net?retryWrites=true&w=majority
//mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true})

//data schema and model
const artwalkSchema = {
    name: String,
    bilds: String
}

const Artwalk = mongoose.model("Artwalk", artwalkSchema);

//API routes
app.get('/artwalks', function(req, res) {
    Artwalk.find().then(artwalks => res.json(artwalks));
})

//add artwalk
app.post('/newartwalk', function(req, res) {
    const name = req.body.name;
    const bilds = req.body.bilds;

    const newArtwalk = new Artwalk({
        name,
        bilds
    });

    newArtwalk.save();

});

app.delete('/delete/:id', function(req, res) {
    const id = req.params.id;
    Artwalk.findByIdAndDelete({_id: id}, function(err) {
        if(!err) {
            console.log("artwalk deleted");
        } else {
            console.log(err);
        }
    })
});

if(process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    })
}

app.listen(port, function() {
    console.log("express is running");
})