const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
```

This is a basic ecommerce website template with a hero section, product listing, and add to cart functionality. You can add more features and products as needed.