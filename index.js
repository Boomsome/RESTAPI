const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors);

app.get('/', (req, res) => {
    res.status(200);
    res.send("<h1>This REST API will do various weather calculations!</h1>");
});

app.get('/FConvert', (req, res) => {
    res.status(200);
    res.send("<h1>This is the Celcius to Fahrenheit Converter!</h1>");
})

app.get('/FConvert/:degrees', function(req, res) {
    res.status(200);
    const result = req.params.degrees * (9/5) + 32; 
    res.json({"result": result});
})

app.get('/WChill', (req, res) => {
    res.status(200);
    res.send("<h1>This is the Wind Chill Calculator(Fahrenheit)!<h1>");
}) 

app.get('/WChill/:degrees/:speed'), function(req, res) {
    res.status(200);
    const result = req.params.degrees - (0.7 * req.params.speed); 
    res.json({result: result});
}

app.get('/RHum', (req, res) => {
    res.send("<h1>This is the Relative Humidity Calculator!<h1>");

})

app.get('/RHum/:watervapor/:airwatercont'), function(req, res) {
    res.status(200);
    const result = req.params.watervapor * req.params.airwatercont * 100;
    res.status(200);
    res.json({result: result});
}

app.get('/Cconvert', (req, res) => {
    res.status(200);
    res.send("<h1>This is the Fahrenheit to Celcius converter!<h1>");
})

app.get('/Cconvert/:degree'), function(req, res) {
    res.status(200);
    const result = req.params.degree * (5/9) - 32;
    res.json({result: result});
}

app.listen(3000, () => console.log("API version 1.0.0 is running on port 3000"));