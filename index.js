const express = require('express');
const bodyParser = require("body-parser");

const db = require('./data');

const app = express();

app.use(bodyParser.json());
app.use(express.urlencoded({extendd:true}));

app.get("/login", async (req, res) =>{
    const sql = "SELECT * FROM login";

    const result = await db.query(sql);
    res.status(200).json(result.rows);
});

app.post("/logins",(req,res) => {
    const { name1,
        surname,
        phone,
        city,
        order_id} = req.body;
    
    db.query(`INSERT INTO login(name1,surname,phone,city,order_id) VALUES ($1,$2,$3,$4,$5)`,[name1,surname,phone,city,order_id])  
    res.status(200).json({name1,surname,phone,city,order_id})  ;
    });

    const PORT = process.env.PORT || 3000;
app.listen(PORT, () => 
{
	console.log('Server is running on port ${PORT}');
});