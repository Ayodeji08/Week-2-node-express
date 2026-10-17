const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Custom middleware: log requests
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

// GET /
// GET / - Serve static HTML page
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});    

// POST /user
app.post("/user", (req, res) => {
    const { name, email } = req.body;

    if (!name || !email) {
        return res.status(400).json({
            error: "Name and email are required"
        });
    }

    res.json({
        message: `Hello, ${name}!`
    });
});

// GET /user/:id
app.get("/user/:id", (req, res) => {
    res.json({
        message: `User ${req.params.id} profile`
    });
});

// Serve static HTML at /
app.get("/home", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

// Handle invalid JSON
app.use((err, req, res, next) => {
    if (err instanceof SyntaxError && err.status === 400 && "body" in err) {
        return res.status(400).json({
            error: "Invalid JSON"
        });
    }

    next(err);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
