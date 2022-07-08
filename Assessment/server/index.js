const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment, getFortune, createUser, incUser, delUser } = require('./controller')

app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune);
app.post("/api/createUser", createUser)
app.put("/api/incUser/:name", incUser)
app.put("/api/delUser/:name", delUser)

app.listen(4000, () => console.log("Server running on 4000"));
