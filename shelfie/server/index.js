require("dotenv").config();
const express = require("express"),
  cors = require("cors"),
  { json } = require("body-parser"),
  massive = require("massive"),
  app = express(),
  port = process.env.PORT || 3001;

const { getInventory, addProduct } = require(`${__dirname}/controller`);

massive(process.env.CONNECTION_STRING).then(db => {
  app.set("db", db);
}).catch((error)=>console.log(error));

app.use(cors());
app.use(json());

app.get("/api/inventory", getInventory);
app.post("/api/product", addProduct);

app.listen(port, () => console.log(`Listening on port: ${port}`));
