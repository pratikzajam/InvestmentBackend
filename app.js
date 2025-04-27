require('dotenv').config()
const express = require('express');
const cors = require('cors')
const connectDB = require('./config/db.js');
const UserRouter = require('./routes/userRoutes.js');

const app = express();
const PORT = process.env.PORT || 3777

app.use(express.json());
// Configure CORS to allow requests from frontend
app.use(cors({
    origin: "*",
    credentials: false // set credentials: false when origin is "*"
}));
app.use("/api/user", UserRouter)

connectDB.then(() => {
    app.listen(PORT, () => {
        console.log(`server is listening on ${PORT}`)
    })
})
    .catch((err) => {
        console.log("Server Error", err)
    })
