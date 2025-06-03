const express = require('express');
const cors = require('cors');
const app = express();
const db = require('./models');

app.use(cors());
app.use(express.json());

const productRouter = require('./routes/Products');
app.use("/prod",productRouter);

db.sequelize.sync().then(()=> {
    app.listen("3001",() => {
        console.log("Server running on port 3001");
    });
});
