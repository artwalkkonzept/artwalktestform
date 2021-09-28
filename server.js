const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const mongoose = require("mongoose");
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());

//mongoose
mongoose.connect("mongodb+srv://frankild:pc8307pc@artwalkkonzept.rnrwp.mongodb.net/artwakDB?retryWrites=true&w=majority")

//data schema and modelATLAS_URI=mongodb+srv://frankild:pc8307pc@artwalkkonzept.rnrwp.mongodb.net/Test?retryWrites=true&w=majority

const artwakSchema = {
    title: String,
    genre: String,
    year: String
}

const Artwak = mongoose.model("Artwak", artwakSchema);

//API routes
app.get('/artwaks', function(req, res) {
    Artwak.find().then(artwaks => res.json(artwaks));
})

//add artwak
app.post('/newartwak', function(req, res) {
    const title = req.body.title;
    const genre = req.body.genre;
    const year = req.body.year;

    const newArtwak = new Artwak({
        title,
        genre,
        year
    });

    newArtwak.save();

});

app.delete('/delete/:id', function(req, res) {
    const id = req.params.id;
    Artwak.findByIdAndDelete({_id: id}, function(err) {
        if(!err) {
            console.log("artwak deleted");
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