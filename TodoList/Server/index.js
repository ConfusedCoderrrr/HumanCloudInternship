const express = require("express");
const cors = require('cors');
const app = express();
const port = 4000;
const mongoose = require('mongoose');
const User = require('./models/userModel');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bcrypt = require('bcrypt');
const formData = require('form-data');
const jwt = require('jsonwebtoken');
const Todo = require('./models/todoModel');
const bodyParser = require('body-parser');
const Mailgun = require('mailgun.js');
const mailgun = new Mailgun(formData);

app.use(cors());
app.use(morgan('tiny'));



dotenv.config();
console.log(process.env.MONGO_URI);




mongoose.connect("mongodb://localhost:27017/Todo");

app.use(express.json());

app.post('/verify', async (req, res) => {
    const { otp } = req.body;

})



app.use(bodyParser.json());

app.post('/verifyOtp', async (req, res) => {
    const userOtp = req.body.userOtp;
    const storedOtp = req.body.storedOtp;

    try {
        // Compare the user-provided OTP with the stored hashed OTP using bcrypt.compare
        const isMatch = await bcrypt.compare(userOtp, storedOtp);

        if (isMatch) {
            // OTPs match, perform tasks and send a success response
            res.status(200).send('OTP verification successful');
        } else {
            // OTPs do not match, send an error response
            res.status(400).send('OTP verification failed');
        }
    } catch (error) {
        console.error('Error during OTP verification:', error);
        // Handle any errors that occur during the OTP verification process
        res.status(500).send('Internal Server Error');
    }
});

app.get('/getOtp', async (req, res) => {
    try {
        const min = 1000; // Minimum value for a four-digit number
        const max = 9999; // Maximum value for a four-digit number
        const otp = Math.floor(Math.random() * (max - min + 1)) + min;
        const cryptOtp = await bcrypt.hash(otp.toString(), 10);
        const { email } = req.query; // Accessing email from query parameter directly

        const mg = mailgun({ apiKey: process.env.MAILGUN_API_KEY, domain: 'sandbox7b828106f9f2418c85cfe880418dfd63.mailgun.org' });

        const data = {
            from: 'sandbox7b828106f9f2418c85cfe880418dfd63.mailgun.org',
            to: email,
            subject: 'OTP',
            text: `Your OTP is: ${otp}`,
            html: `<h1>Your OTP is: ${otp}</h1>`
        };

        mg.messages().send(data, (error, body) => {
            if (error) {
                console.error(error);
                return res.status(500).send('Error sending OTP');
            }
            console.log(body);
            // Sending the hashed OTP
            res.send(cryptOtp);
        });
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});



app.put('/update/:id', async (req, res) => {
    const { id } = req.params;
    const { newTask } = req.body;

    try {
        const updatedTask = await Todo.findByIdAndUpdate(id, { task: newTask }, { new: true });

        if (!updatedTask) {
            return res.status(404).json({ error: 'Task not found' });
        }

        res.status(200).json({ message: 'Task updated successfully', updatedTask });
    } catch (error) {
        console.error('Error during task update:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.delete("/delete", async (req, res) => {
    const { id } = req.query;

    try {
        const delTask = await Todo.findByIdAndDelete(id);

        if (delTask) {
            res.status(200).json({
                message: "Task deleted successfully",
            });
        } else {
            res.status(404).json({
                error: "Task not found",
            });
        }
    } catch (error) {
        console.error("Error during task deletion:", error);
        res.status(500).json({
            error: "Internal Server Error",
        });
    }
});


app.put("/update", async (req, res) => {
    const { id } = req.body;
    const { updated } = req.body;
    const updateO = Todo.findByIdAndUpdate({ id });
})


app.post("/add", async (req, res) => {
    const { task, email, isComp } = req.body;
    console.log(req.body);
    const newTask = await Todo.create({
        email,
        isComp,
        task,


    });
    res.status(200).json({
        message: "task added successfully",

    });
});


app.get('/tasks', async (req, res) => {
    // Retrieve the email from query parameters

    try {
        const tasks = await Todo.find(); // Find tasks that match the provided email

        res.status(200).json({ tasks }); // Send matching tasks as JSON response
    } catch (error) {
        console.error('Error fetching tasks:', error);
        res.status(500).json({ message: 'Server error' });
    }
});





app.post("/register", async (req, res) => {
    const { email, username, password, passwordCofirm } = req.body;
    const existed = await User.findOne({ email }).exec();
    const data = {
        message: "user already existed",
    }
    if (existed) {
        res.status(500),
            res.json({
                message: "user already exist",
            }
            )
        return;
    }
    try {
        // Hash the password before saving it
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create the user in the database
        const newUser = await User.create({
            email,
            username,
            password: hashedPassword, // Save the hashed password
        });

        res.status(201).json({
            message: "User created successfully",
            user: {
                email: newUser.email,
                username: newUser.username,
            },
        });
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
});

app.get("/user", async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email, password }).exec();

    if (user) {
        res.status(200),
            res.json({
                username: user.username,
            }
            )
        return;
    }
})
app.post("/login", async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email }).exec();

        if (user) {
            const passwordMatch = await bcrypt.compare(password, user.password);

            if (passwordMatch) {
                const token = jwt.sign({ userId: user._id }, 'myKey', { expiresIn: '1h' });

                res.status(200).json({
                    data: {
                        username: user.username,
                        token: token,
                    },
                    message: "Logging you in",
                });

                return;
            }
        }

        // If user does not exist or password doesn't match
        res.status(401).json({
            error: "Invalid credentials",
        });
    } catch (error) {
        console.error("Error during login:", error);
        res.status(500).json({
            error: "Internal Server Error",
        });
    }
});

const db = mongoose.connection;
db.on('error', console.log.bind(console, 'connection errror'));
db.once('open', function () {
    app.listen(port, () => {
        console.log('app is listning port ' + port);
    })
})
