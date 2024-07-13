const express = require('express');
const app = express();

const userModel = require('./usermodel');

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.get('/create', async (req, res) => {
    let createdUser = await userModel.create({
        name: "sourabh",
        email: "sourabh@gmail.com",
        username: "sourabh"
    });
    res.send(createdUser); 
});


app.get('/create', async (req, res) => {
    let createdUser = await userModel.create({
        name: "john",
        email: "john@gmail.com",
        username: "john"
    });
    res.send(createdUser); 
});



app.get('/read', async (req, res) =>{
    let users = await userModel.find({username:"sourabh"});
    res.send(users);
    });
    

app.get('/update', async (req, res) => {
    let updatedUser = await userModel.findOneAndUpdate(
        { username: "sourabh" }, 
        { name: "sourabh howale" }, 
        { new: true }
    );
    res.send(updatedUser);
});
 


app.get('/delete', async (req, res) => {
 
        let deletedUser = await userModel.findOneAndDelete({ username: "sourabh" });
        res.send("User deleted successfully");

});




app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
