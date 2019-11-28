const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

//Import delle classi di routing
const parcheggioRoute = require('./routes/parcheggio-route');
const macchinaRoute = require('./routes/macchine-route');
const personaRoute = require('./routes/persone-route');
const postoAutoRoute = require('./routes/postoauto-route');
const ticketRoute = require('./routes/tickets-route');

//Inizializzo express
let app = express();

//Inizializzo variabili d'ambiente
const port = process.env.PORT || 3000;

//Inizializzo middleware
app.use(cors());
app.use(bodyParser.json());

//Inizializzo il routing
app.use('/parcheggio',parcheggioRoute);
app.use('/macchina',macchinaRoute);
app.use('/persona',personaRoute);
app.use('/postoauto',postoAutoRoute);
app.use('/ticket',ticketRoute);

app.get('/',(req,res)=>{
    res.send(`Benvenuti nell backend di App-Parcheggio!`);
})

app.listen(port,()=>{
    console.log(`Listening on port ${port}!`);
})
