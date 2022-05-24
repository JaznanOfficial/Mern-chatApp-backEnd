const express = require('express')
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');
require('dotenv').config();
const {chats} = require('./data/data');
// console.log(chats);


app.use(cors())
app.use(express.json())




app.get('/api/chats', (req, res) => {
    // console.log(chats);
    res.send(chats)
})


app.get('/api/chats/:id', (req, res) => {
    const singleChat = chats.find(chat => chat._id === req.params.id);
    console.log(singleChat);
    res.send(singleChat)
})














app.get('/', (req, res) => {
    res.send("<code>This is Chat application server. It's running successfully</code>")
})

app.listen(port, () => {
    console.log('server is running on port', port);
})