const express = require('express')
const app = express();
const port = 3000;

let users = [];

app.use(express.json());

// // GET request - Fetch all users
// app.get('/user', (req, res) => {
//     res.json(users);
// });

// // POST request - Create new user
// app.post('/user', (req, res) => {
//     const userData = req.body;
//     users.push(userData); // Add new user data to the array
//     res.status(201).send(`User created with data: ${JSON.stringify(userData)}`);
// });

// // PUT request - Update user
// app.put('/user/:id', (req, res) => {
//     const userId = parseInt(req.params.id, 10);
//     const updatedData = req.body;
//     let user = users.find(u => u.id === userId);
//     if (user) {
//         Object.assign(user, updatedData); // Update user data
//         res.send(`User with ID ${userId} updated with data: ${JSON.stringify(updatedData)}`);
//     } else {
//         res.status(404).send('User not found');
//     }
// });

// // DELETE request - Delete user
// app.delete('/user/:id', (req, res) => {
//     const userId = parseInt(req.params.id, 10);
//     const userIndex = users.findIndex(u => u.id === userId);
//     if (userIndex !== -1) {
//         users.splice(userIndex, 1); // Remove user from array
//         res.send(`User with ID ${userId} deleted`);
//     } else {
//         res.status(404).send('User not found');
//     }
// });
app.get('/user', (req, res) =>{
    res.send(users)

});

app.post('/user', (req, res) =>{
    users.push(req.body);
    res.status(200).send(req.body.name  );

});

app.get('/user/:id',(req,res)=>{
    const id = parseInt(req.params.id, 10)
    const uData = users.find(u => u.id === id)
    res.send(uData)
})
app.put('/user/:id', (req,res)=>{
    const id = parseInt(req.params.id, 10)
    const updatedData = req.body;
    let user = users.find(u => u.id === id)
    if(user){
        user.name = req.body.name
        res.send(users)

    }
})


app.listen(port, () => {
    console.log(`Server is running on http:/localhost:${port}`);
});
