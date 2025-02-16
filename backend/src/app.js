const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import the cors package
const actionsRoutes = require('./routes/actions');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors()); // Use the cors middleware
app.use(bodyParser.json());
app.use('/api/actions', actionsRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});